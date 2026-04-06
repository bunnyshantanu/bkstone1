import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import flapsImg from "@/assets/flaps-dark.jpg";

const specs = [
  ["1", "12.00/13.00 -24", "", "15", "15"],
  ["2", "11.00/12.00 - 20 (NR) CLIP", "", "18", "18"],
  ["3", "9.00 R 20/10.00 R 20 (NR) CLIP (210 MM)", "", "28", "28"],
  ["4", "9.00 R 20/10.00 R 20 (NR) CLIP (180 MM)", "", "28", "28"],
  ["5", "8.25 - 20 (NR) CLIP", "", "28", "28"],
  ["6", "7.50/8.25/9.00 - 16 (NR) CLIP", "", "40", "40"],
  ["7", "7.00 - 15 (NR) CLIP", "", "40", "40"],
  ["8", "9.00/10.00 -20(EPDM) CLIP", "", "28", "28"],
  ["9", "7.50 - 16 (EPDM) CLIP", "", "40", "40"],
];

const Flaps = () => (
  <div>
    <PageBreadcrumb
      title="Flaps"
      subtitle="Highly Durable Tyre Flaps for Automobile Industry"
      breadcrumbs={[{ label: "Products", path: "/products" }, { label: "Flaps" }]}
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Flaps</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Flaps</strong> : We serve and offer highly durable and robust Tyre Flaps that are widely used in automobile industry. These are made from high quality rubber and can bear extremely rough conditions. These Tyre Flaps are available in various sizes and customised shapes according to the client's need.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Tyre Flaps</strong> : We serve a comprehensive range of Tyre Flaps. These Tyre Flaps protect the tubes from damage and impairment. These flaps are capable of bearing extreme heat and pressure. These products have resistance to wear and tear and are highly durable and efficient. Our products give assurance of optimum quality and value to our customers.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={flapsImg} alt="Tyre Flaps" className="w-full rounded-xl shadow-lg" loading="lazy" width={800} height={600} />
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Specifications:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-crimson/10">
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Sr. No.</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Size</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Valve</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Pcs Per Bag</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Pcs Per Carton</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    {row.map((cell, j) => (
                      <td key={j} className="border border-border px-3 py-2 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Flaps;
