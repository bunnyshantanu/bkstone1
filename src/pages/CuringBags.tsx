import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import curingBagsImg from "@/assets/curing-bags-dark.jpg";

const specs = [
  ["1", "8.3-32", "TR 0501 (80 Dia)", "10", "10"],
  ["2", "16.9 - 28", "TR 0501 (80 Dia)", "6", "6"],
  ["3", "13.6 - 28", "TR 0501 (80 Dia)", "6", "6"],
  ["4", "12.4 - 28", "TR 0501 (80 Dia)", "6", "6"],
  ["5", "14.00- 24/25", "TR 0501 (80 Dia)", "5", "5"],
  ["6", "9.5-24", "TR 0501 (80 Dia)", "8", "8"],
  ["7", "10.00 - 20", "TR 0501 (80 Dia)", "6", "6"],
  ["8", "9.00 - 20", "TR 0501 (80 Dia)", "8", "8"],
  ["9", "8.25 - 20", "TR 0501 (80 Dia)", "10", "10"],
  ["10", "9.00 - 16", "TR 0501 (80 Dia)", "12", "12"],
  ["11", "7.50 - 16", "TR 0501 (80 Dia)", "16", "16"],
  ["12", "6.00 - 16", "TR 0501 (80 Dia)", "20", "20"],
  ["13", "670/7.00 - 15", "TR 0501 (80 Dia)", "16", "16"],
  ["14", "5.90 - 15", "TR 0501 (80 Dia)", "20", "20"],
  ["15", "5.20 - 14", "TR 0501 (80 Dia)", "30", "30"],
  ["16", "4.50/5.65 - 12", "TR 0501 (80 Dia)", "30", "30"],
  ["17", "4.50 - 10", "TR 0501 (80 Dia)", "30", "30"],
  ["18", "3.00 -18", "TR 0501 (70 Dia)", "60", "60"],
  ["19", "3.00 -17", "TR 0501 (70 Dia)", "60", "60"],
  ["20", "4.00 - 8", "TR 0501 (70 Dia)", "50", "50"],
];

const CuringBags = () => (
  <div>
    <PageBreadcrumb
      title="Curing Bags"
      subtitle="Butyl Rubber Curing Bags for Tyre Retreading"
      breadcrumbs={[{ label: "Products", path: "/products" }, { label: "Curing Bags" }]}
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Curing Bags</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Curing Bags</strong> : Butyl Rubber Curing Bags are used for tyre retreading. We are offering a wide range of Curing Bags that resist high heat pressure, have long life and are flexible to use. We make them available at affordable prices without compromising on the quality parameters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Automotive Curing Bags</strong> : Our Automotive Curing Bags are widely appreciated for their durability. These bags are highly resistant to heat and help in multiple retreads. These bags are highly regarded for the long lasting life. We ensure stringent compliance of all the quality standards in order to meet our clients specification with high value and quality.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={curingBagsImg} alt="Curing Bags" className="w-full rounded-xl shadow-lg" loading="lazy" width={800} height={600} />
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

export default CuringBags;
