import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Résumé | ${profile.shortName}`,
  robots: { index: false },
};

/** Static hosting has no server redirects, so this page forwards to the PDF in the browser. */
export default function ResumePage() {
  return (
    <div className="section">
      <meta httpEquiv="refresh" content={`0; url=${profile.links.resume}`} />
      <p>
        Opening the résumé. If nothing happens, <a className="text-link underline" href={profile.links.resume}>download the PDF</a>.
      </p>
    </div>
  );
}
