import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Download } from "lucide-react";
import isoCert from "@/assets/iso-certificate.jpg";
import indiamartCert from "@/assets/indiamart-certificate.jpg";

const downloads = [
  { name: "Download Domestic Brochure", url: "https://www.bkstonetyretube.com/uploadproductimg/" },
  { name: "Download MGT_7A 21-22", url: "https://www.bkstonetyretube.com/uploadproductimg/6353b2c6b0471Form_MGT_7A%20.pdf" },
  { name: "Download MGT_7A 20-21", url: "https://www.bkstonetyretube.com/uploadproductimg/6353bdd105671Form_MGT_7A%2020-21.pdf" },
];

const certificates = [
  { src: isoCert, alt: "ISO 9001:2015 Certificate" },
  { src: indiamartCert, alt: "IndiaMART Trust Seal Certificate" },
];

const Downloads = () => (
  <div>
    <PageBreadcrumb
      title="Downloads"
      subtitle="Download our product catalogues and certificates"
      breadcrumbs={[{ label: "Downloads" }]}
    />

    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <AnimatedSection>
          <div className="glass-card rounded-xl p-6 md:p-8 mb-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">B. K. Rubber Industries Private Limited</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Company rigorously scrutinise the quality parameters to ensure durability of the products. We keep a check of consistency, dimensional accuracy and strength on all the steps of the production process. Our quality controllers regularly and randomly check the procedure to avoid any hitches and loopholes, thereby, ensuring that the quality meets the industrial and international standards. We are certified ISO 9001:2008 company and approved by Bureau of Indian standards for using ISI mark.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {downloads.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                {d.name} <Download className="w-4 h-4" />
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Our <span className="text-gradient-red">Certificates</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <img src={cert.src} alt={cert.alt} className="w-full" loading="lazy" width={600} height={800} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Downloads;
