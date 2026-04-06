import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useState } from "react";
import { Upload } from "lucide-react";

const Career = () => {
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <PageBreadcrumb
        title="Career"
        subtitle="Join our team of dynamic professionals"
        breadcrumbs={[{ label: "Career" }]}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="glass-card rounded-xl p-8 mb-10">
              <p className="text-muted-foreground leading-relaxed">
                We are a group of dynamic professionals who work in a team with a fresh view. We employ years of experience 
                to meet clients' requirements. We envision rising and expanding as an organization, with people who have 
                similar principal grounds, different attributes and positive attitude.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                At B.K. Rubber Industries we believe in integrity, quality, transparency and efficiency. Our team strives hard 
                not just to maintain but surpass the legacy of quality standards made by our firm.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our Team is our valuable asset and biggest strength. We believe that our distinctive image and success 
                resides in the exceptional value of our people.
              </p>
              <p className="text-muted-foreground mt-4">
                Mail us at: <a href="mailto:hrbkrubber1@gmail.com" className="text-crimson hover:underline">hrbkrubber1@gmail.com</a>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Upload Resume</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                  <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                </div>
                <textarea rows={3} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50 resize-none" />
                <div>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted border border-border cursor-pointer hover:border-crimson/30 transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{fileName || "Upload your resume (.doc, .docx, .pdf)"}</span>
                    <input type="file" accept=".doc,.docx,.pdf" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full">Send Application</button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Career;
