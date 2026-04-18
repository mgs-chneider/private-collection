import { siteContent } from "@/content/site";

export function ContactBlock() {
  return (
    <section className="contact-block">
      <h3>Kontakt</h3>
      <p>Bei Interesse oder Fragen freuen wir uns über Ihre Kontaktaufnahme.</p>
      <p>
        <a href={`mailto:${siteContent.contactEmail}`}>
          {siteContent.contactEmail}
        </a>
      </p>
      {siteContent.contactPhone ? <p>{siteContent.contactPhone}</p> : null}
    </section>
  );
}
