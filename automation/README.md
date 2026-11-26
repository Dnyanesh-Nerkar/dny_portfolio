# Contact form → email → Claude summary → WhatsApp

```
Visitor fills the Contact form on the website
        │  (Web3Forms, free)
        ▼
Email lands in Gmail, subject starts with "[Portfolio contact]"
        │  (n8n Gmail Trigger, checks every minute)
        ▼
Claude summarizes it (Anthropic API, claude-opus-5-5, low effort)
        │
        ▼
Summary sent to your WhatsApp (CallMeBot, free)
```

Nothing in this folder contains secrets. Keys and your phone number are entered in GitHub and n8n only.

## 1. Contact form → your email (Web3Forms)

1. Go to <https://web3forms.com>, enter the email address that should receive messages, and copy the **access key** they email you.
2. In GitHub: **Settings → Secrets and variables → Actions → Variables → New repository variable**
   - Name: `WEB3FORMS_KEY`
   - Value: the access key
3. Merge `release` into `main`. The deploy build picks up the key and the form appears in the Contact section. Without the key, the form stays hidden.
4. Send yourself a test message from the live site and check it arrives with the subject `[Portfolio contact] <name>`.

To see the form locally, create `.env.local` (git ignores it) with `NEXT_PUBLIC_WEB3FORMS_KEY=<key>` and run `npm run dev`.

The access key is public by design: it can only send to your inbox, and Web3Forms adds spam filtering plus the hidden `botcheck` field.

## 2. WhatsApp key (CallMeBot)

1. Save **+34 694 25 79 72** in your phone's contacts (check <https://www.callmebot.com/blog/free-api-whatsapp-messages/> in case the number has changed).
2. Send it this WhatsApp message: `I allow callmebot to send me messages`
3. It replies with your **apikey**. Keep it for step 4.

## 3. Anthropic API key

1. Sign in at <https://platform.claude.com>, add a small credit balance, and create an API key.
2. Cost: one summary is a few thousand tokens at most; expect well under $1 a month at normal contact volume.

## 4. Import and connect the workflow in n8n

1. In n8n: **Workflows → Import from File** → choose `automation/n8n/contact-to-whatsapp.json`.
2. Open each node with a credential and create it:

   | Node | Credential type | Fill in |
   | --- | --- | --- |
   | New contact email | Gmail OAuth2 | Sign in with the Gmail account from step 1 |
   | Summarize with Claude | Header Auth | Name `x-api-key`, Value = your Anthropic API key |
   | Send to WhatsApp (CallMeBot) | Query Auth | Name `apikey`, Value = your CallMeBot apikey |

3. In **Send to WhatsApp (CallMeBot)**, replace `REPLACE_WITH_YOUR_WHATSAPP_NUMBER` with your number in international format, digits only with a leading `+` (for example `+15551234567`). Keep it only in n8n; don't commit it.
4. Click **Test workflow**, submit the form on the site, and wait up to a minute.
5. When the WhatsApp message arrives, switch the workflow to **Active**.

## How it handles odd cases

- **Prompt injection:** the visitor's message is wrapped in `<email>` tags and Claude is told to treat it only as content. The only output is a WhatsApp message to you.
- **Claude declines:** you still get a WhatsApp message telling you to read it in Gmail.
- **Spam:** Web3Forms filters most of it; anything that gets through is labelled `Type: Spam` in the summary.

## Changing the workflow

`automation/n8n/build.mjs` generates `contact-to-whatsapp.json`. Edit the prompt or nodes there and run:

```bash
node automation/n8n/build.mjs
```

If you change the subject prefix, change it in both `build.mjs` and `components/contact/ContactForm.tsx`.
