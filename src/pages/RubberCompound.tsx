import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import rubberCompImg from "@/assets/rubber-compound-dark.jpg";

const RubberCompound = () => (
  <div>
    <PageBreadcrumb
      title="Rubber Compound"
      subtitle="High Quality Rubber Compounds Meeting International Standards"
      breadcrumbs={[{ label: "Products", path: "/products" }, { label: "Rubber Compound" }]}
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Rubber Compound</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rubber compound is combination of 8 to 15 ingredients. It is basically the mixture of base polymer and other chemicals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Product has high quality properties that meet international standards. These are produced from natural rubber, butyl rubber, EPDM rubber and others as per our client requirements. Our product is widely appreciated for its features and application. The products are tough, durable and easy to use.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              BK Rubber serves certified and high quality Rubber Compound.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={rubberCompImg} alt="Rubber Compound" className="w-full rounded-xl shadow-lg" loading="lazy" width={800} height={600} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default RubberCompound;
