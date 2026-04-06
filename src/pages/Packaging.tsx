import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import packFront from "@/assets/packaging-front.png";
import packBag from "@/assets/packaging-bag.jpg";
import packBox from "@/assets/packaging-box.png";
import packCarton from "@/assets/packaging-carton.jpg";
import packVivonFront from "@/assets/packaging-vivon-front.jpg";
import packVivonBack from "@/assets/packaging-vivon-back.jpg";
import packBack from "@/assets/packaging-back.png";

const images = [
  { src: packFront, alt: "BK Stone Tube Pack Front" },
  { src: packBag, alt: "BK Stone Bag" },
  { src: packBox, alt: "BK Stone Packaging Box" },
  { src: packCarton, alt: "BK Stone Carton Packaging" },
  { src: packVivonFront, alt: "Vivon Front" },
  { src: packVivonBack, alt: "Vivon Back" },
  { src: packBack, alt: "BK Stone Tube Pack Back" },
];

const Packaging = () => (
  <div>
    <PageBreadcrumb
      title="Packaging"
      subtitle="Quality Packaging Solutions for Safe Delivery"
      breadcrumbs={[{ label: "Products", path: "/products" }, { label: "Packaging" }]}
    />

    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Our <span className="text-gradient-red">Packaging</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card rounded-xl overflow-hidden group">
                <div className="aspect-square overflow-hidden bg-muted/20 flex items-center justify-center p-4">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Packaging;
