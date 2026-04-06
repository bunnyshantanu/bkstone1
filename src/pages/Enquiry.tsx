import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Enquiry = () => (
  <div>
    <PageBreadcrumb
      title="Enquiry"
      subtitle="Get a quote for our premium butyl tubes and products"
      breadcrumbs={[{ label: "Enquiry" }]}
    />

    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <AnimatedSection>
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Enquiry Form</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              </div>
              <h3 className="font-semibold text-foreground pt-2">Address</h3>
              <input type="text" placeholder="Street" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="text" placeholder="District" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <input type="text" placeholder="Postal Code" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="text" placeholder="State" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
                <input type="text" placeholder="Country" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50" />
              </div>
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson/50 resize-none" />
              <button type="submit" className="btn-primary w-full">Send Enquiry</button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Enquiry;
