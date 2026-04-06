import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { MapPin, Phone, Mail, Printer } from "lucide-react";

const Contact = () => (
  <div>
    <PageBreadcrumb
      title="Contact Us"
      subtitle="Get in touch with our team"
      breadcrumbs={[{ label: "Contact Us" }]}
    />

    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <AnimatedSection>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Head Office</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-crimson" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  B. K. Rubber Industries Private Limited<br />
                  No. 1/6, Chhoti Gwaltoli,<br />
                  Indore - 452 001, Madhya Pradesh, India.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-crimson" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground text-sm mt-1">+91 - 731 - 4216135<br />+91 - 9827036135</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-crimson" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm mt-1">bkrubber1@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                <Printer className="w-6 h-6 text-crimson" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fax</h3>
                <p className="text-muted-foreground text-sm mt-1">+(91) - (731) - 2522779</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50 resize-none" />
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Google Maps */}
    <section className="pb-16">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Find Us On Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0e44ffffff%3A0x0!2sChhoti%20Gwaltoli%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BK Rubber Industries Location"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Contact;
