import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { motion } from "framer-motion";
import tubeOtr from "@/assets/tube-otr.jpg";
import tubeTractor from "@/assets/tube-tractor.jpg";
import tubeTruck from "@/assets/tube-truck.jpg";
import tubePassenger from "@/assets/tube-passenger.jpg";
import tubeMotorcycle from "@/assets/tube-motorcycle.jpg";
import tubeThreewheeler from "@/assets/tube-threewheeler.jpg";
import tubeScooter from "@/assets/tube-scooter.jpg";
import tubeErickshaw from "@/assets/tube-erickshaw.jpg";

const sections = [
  {
    id: "otr",
    title: "OTR TUBES",
    image: tubeOtr,
    desc: "With the years of experience we precisely know the requirements and specifications of clients, and serve them accordingly. We have a wide and qualitative range of OTR Tubes. Our products ensure stability, resilience, robustness and easy maintenance.",
    specs: [
      ["1", "13.00 - 24/25", "TR 179 A", "6", "4"],
      ["2", "14.00 - 24/25", "SP1000 + 1175C", "6", "4"],
      ["3", "12.00 R 24 (HD)", "TR 78 A", "6", "5"],
      ["4", "12.00-24", "TR 78 A", "10", "5"],
      ["5", "11.2/10-24", "TR 218A", "10", "7"],
      ["6", "15.00-21", "V-590", "3", "3"],
      ["7", "12.5/80-18", "TR 218", "16", "10"],
    ],
  },
  {
    id: "tractor-rear",
    title: "TRACTOR REAR TUBES",
    image: tubeTractor,
    desc: "We serve comprehensive range of Tractor Rear Tubes. These are made with utmost precision and care. Our products are widely demanded and appreciated by clients for their consistency, durability, exceptional competence and flawless quality.",
    specs: [
      ["1", "9.5-42/9.5-44", "TR 218", "10", "6"],
      ["2", "16.9-38", "TR 218 A", "6", "3"],
      ["3", "18.4-34", "TR 218", "4", "2"],
      ["4", "16.9-34", "TR 218", "4", "2"],
      ["5", "8.3-36/9.5-36 (TR.R.)", "TR 218", "10", "6"],
      ["6", "8.3 - 32 (TR.R.)", "TR 218", "10", "7"],
      ["7", "18.4-30 (TR.R.)", "TR218", "6", "3"],
      ["8", "16.9-30 (TR.R.)", "TR 218", "6", "3"],
      ["9", "16.9 - 28 (TR.R.)", "TR 218", "6", "3"],
      ["10", "14.9 - 28 (TR.R.)", "TR 218", "6", "5"],
      ["11", "13.6 - 28 (TR.R.)", "TR 218", "8", "6"],
      ["12", "12.4 - 28 (TR.R.)", "TR 218", "10", "6"],
      ["13", "14.00 - 24/25 (TR.R.)", "TR 218", "6", "4"],
      ["14", "13.00 - 24/25 (TR.R.)", "TR 218", "6", "4"],
      ["15", "11.2/12.4-24 (TR.R.)", "TR 218", "10", "6"],
      ["16", "9.5-24/8.3-24 (TR.R.)", "TR 218", "14", "9"],
      ["17", "9.5-20 (TR.R.)", "TR 218", "20", "8"],
      ["18", "8.3-20 (TR.R.)", "TR 218", "20", "11"],
      ["19", "7.50/8.00-18 (TR.R.)", "TR 218", "20", "16"],
      ["20", "7.50/8.00-18 (TR.R.)", "TR 15", "20", "16"],
      ["21", "9.5-16 (T.F)", "TR 15", "15x4=60", "12"],
    ],
  },
  {
    id: "tractor-front",
    title: "TRACTOR FRONT TUBES",
    image: tubeTractor,
    desc: "We specialize in offering a huge range of products in Tractor Front Tubes. These products are designed and developed with the help of best quality material, while our products are made up from superior quality material from certified vendors.",
    specs: [
      ["1", "6.00-20/6.50-20/6.70-20 (T.F.)", "TR 15", "24", "16"],
      ["2", "6.50/80-12", "TR-13", "60", "25"],
      ["3", "6.50/80-13", "TR-13", "60", "20"],
      ["4", "7.50 - 16 (SV) (TR.TR.)", "TR 15", "20", "16"],
      ["5", "6.50-16", "AB 1582", "10x4=40", "18"],
      ["6", "6.00 - 16/ 6.50-16 (T.F.)", "TR15", "10x4=40", "24"],
      ["7", "6.50/80-13", "TR-13", "60", "20"],
      ["8", "6.50/80-12", "", "60", "25"],
      ["9", "6.00-12 (LV)", "B46357", "15x4=60", "30"],
      ["10", "6.00-12 (SV)", "TR 13", "15x4=60", "30"],
      ["11", "5.00-12", "TR 13", "15x4=60", "30"],
      ["12", "5.00-15", "TR 13", "40", "20"],
    ],
  },
  {
    id: "truck-bus",
    title: "TRUCK / BUS TUBES",
    image: tubeTruck,
    desc: "Our expertise and experience enables us to offer and serve a wide and extensive range of Truck/Bus Tubes. Our specific designs are demanded and applauded for their dimensional precision, resilience, impeccable performance, durability and robustness.",
    specs: [
      ["1", "3.55/90-20", "TR 78 A", "8", "7"],
      ["2", "12.00 R 20", "TR 78 A", "8", "7"],
      ["3", "12.00-20, 295/95 D 20", "TR 78 A", "10", "7"],
      ["4", "11.00 R 20", "TR 78 A", "10", "7"],
      ["5", "11.00 - 20", "TR 78 A", "10", "7"],
      ["6", "10.00 R 20 (HD)", "TR 78 A", "10", "7"],
      ["7", "10.00 R 20", "TR 78 A", "10", "7"],
      ["8", "10.5/11.2-20", "TR 218 A", "10", "9"],
      ["9", "10.00 - 20", "TR 78 A", "10", "9"],
      ["10", "10.00 - 20 (LW)", "TR 78 A", "10", "9"],
      ["11", "9.00 R 20", "TR 78 A", "10", "11"],
      ["12", "9.00 - 20", "TR 175 A", "10", "11"],
      ["13", "9.00 - 20 (L/W)", "TR 175 A", "14", "11"],
      ["14", "8.25 - 20", "TR 175", "14", "11"],
      ["15", "7.50 - 20", "TR 175 A", "24", "12"],
    ],
  },
  {
    id: "adv",
    title: "ANIMAL DRIVEN VEHICLE TUBES",
    desc: "We offer huge range of Animal Driven Vehicle Tubes. These tubes are dimensionally efficient and functionally effective. Our competitive prices make our range popular against our peers. Our team's experience and expertise is promises the high performance of our products.",
    specs: [
      ["1", "8.25-19", "TR14", "20", "11"],
      ["2", "7.00/8.00 - 19 (ADV)", "TR 14", "20", "14"],
      ["3", "6.00-19 (ADV)", "TR 14", "20", "16"],
      ["4", "9.00-16 ( TR.TR )", "AB1582", "16", "12"],
    ],
  },
  {
    id: "lcv",
    title: "LIGHT COMMERCIAL VEHICLE TUBES",
    desc: "We design Light Commercial Vehicle Tubes to meet the specific requirements of our clients. We have expertise in supplying a comprehensive range of Light Commercial Vehicles Tubes. These tubes are durable, reliable and affordable.",
    specs: [
      ["1", "8.25 - 16", "AB 1582", "20", "16"],
      ["2", "7.50 - 16 (LV)", "AB 1582", "20", "16"],
      ["3", "7.50 R 16", "TR 15", "20", "16"],
      ["4", "7.00 - 16 (LV)", "AB 1582", "20", "18"],
      ["5", "7.00 - 16 (SV)", "TR 15", "20", "18"],
      ["6", "5.00-15", "TR 13", "40", "20"],
      ["7", "6.70/7.00 - 15 (TR-177) (LV)", "TR 177", "20", "18"],
      ["8", "6.70/7.00 - 15 (SV)", "TR 13", "20", "18"],
    ],
  },
  {
    id: "passenger",
    title: "PASSENGER RADIAL TUBES",
    image: tubePassenger,
    desc: "We serve high quality and efficient Passenger Radial Tubes. Manufactured with the latest technology, our Radial Passenger Tyre Tubes have better air retaining capacity and longer tube life. These Tubes are made of high quality natural rubber.",
    specs: [
      ["1", "235/65 R 17 & 265/65 R 17", "B 46357", "20", "15"],
      ["2", "235/65 R 17.5", "TR 227", "20", "15"],
      ["3", "235/70 R 16 & 255/70 R 16", "B 46357", "20", "15"],
      ["4", "205/65 R 16 & 215/65 R 16 (LV)", "B 46357", "10x4=40", "20"],
      ["5", "205/65 R 16 & 215/65 R 16 (SV)", "TR 13", "10x4=40", "20"],
      ["6", "195/55-16", "TR-13", "10x4=40", "24"],
      ["7", "185/85 R 16", "TR 13", "10x4=40", "24"],
      ["8", "235/75 R 15", "TR 13", "20", "15"],
      ["9", "700 R 15", "TR 13", "20", "18"],
      ["10", "215/75 R 15(LV)", "TR 13", "20", "18"],
      ["11", "215/75 R 15(SV)", "B 46357", "20", "18"],
      ["12", "205/70 R 15 & 205/65 R 15 (LV)", "B 46357", "10X4=40", "20"],
      ["13", "205/70 R 15 & 205/65 R 15 (SV)", "TR 13", "10X4=40", "20"],
      ["14", "195/70 R 15 & 195/80 R 15", "TR 13", "10X4=40", "20"],
      ["15", "185/60 R 15(LV)", "B 46357", "10X4=40", "24"],
      ["16", "185/60 R 15(SV)", "TR 13", "10X4=40", "24"],
      ["17", "165/80 R 15", "TR 13", "10X4=40", "24"],
      ["18", "185/70 R 14 & 195/70 R 14 (LV)", "B 46357", "10X4=40", "24"],
      ["19", "185/70 R 14 & 195/70 R 14 (SV)", "TR 13", "10X4=40", "24"],
      ["20", "165/80 R 14 & 175/65 R 14 (LV) &145/80-LV", "B 46357", "10X4=40", "24"],
      ["21", "165/80 R 14 & 175/65 R 14 (SV)", "TR 13", "10X4=40", "24"],
      ["22", "145/70 R 14 (SV)", "TR 13", "10x4=40", "35"],
      ["23", "175/70 R 13 & 185/60 R 13 (LV)", "B 46357", "15x4=60", "35"],
      ["24", "165/65 R 13 (LV)", "B 46357", "15x4=60", "35"],
      ["25", "155/70 R 13 & 155/65 R 13(LV)", "B 46357", "15x4=60", "35"],
      ["26", "145/80 R 13 & 145/70 R 13 (SV)", "TR 13", "15x4=60", "35"],
      ["27", "145/70 R 12 & 145/80 R 12", "TR 13", "15x4=60", "35"],
      ["28", "135/70 R 12 & 135/80-12", "B 35157", "15x4=60", "35"],
      ["29", "F.78 - 15", "TR 13", "10x4=40", "24"],
      ["30", "5.90 - 15", "TR 13", "10x4=40", "24"],
      ["31", "195 D 15 ( LV )", "TR 75", "10x4=40", "15"],
      ["32", "5.20 - 14", "TR 13", "15x4=60", "24"],
      ["33", "4.50/5.00-12 & 5.65-12", "TR 13", "15x4=60", "35"],
      ["34", "155 D 12 & 165 D 12", "TR 13", "15x4=60", "35"],
      ["35", "155/500-12", "TR 13", "15x4=60", "35"],
      ["36", "165 D 13", "TR 13", "15x4=60", "30"],
      ["37", "165 D 14 & 175 D 14", "TR 13", "15x4=60", "24"],
      ["38", "185 D 14", "TR 13", "10x4=40", "20"],
    ],
  },
  {
    id: "three-wheeler",
    title: "THREE WHEELER TUBES",
    image: tubeThreewheeler,
    desc: "We offer Three Wheeler Tubes to meet the requirements of our clients. The components that we use to fabricate these tubes are procured from reliable and certified vendors. We make them available at affordable prices.",
    specs: [
      ["1", "4.50 - 10", "TR 13", "15x4=60", "40"],
      ["2", "3.75-10/ 4.00-10", "TR 13", "25x4=100", "50"],
      ["3", "4.00 - 8", "V1.08.03", "25x4=100", "55"],
      ["4", "4.00 - 8 ( STRAIGHT NECK )", "V1.08.03", "25x4=100", "55"],
      ["5", "4.00 - 8", "TR 13", "25x4=100", "55"],
    ],
  },
  {
    id: "motorcycle",
    title: "MOTOR CYCLE TUBES",
    image: tubeMotorcycle,
    desc: "We offer Motor Cycle Tubes to meet the requirements of our clients. The components that we use to fabricate these tubes are procured from reliable and certified vendors. We make them available at affordable prices.",
    specs: [
      ["1", "3.00/3.25 - 19", "TR 29", "20x4=80", "40"],
      ["2", "100/90 - 18, 100/80 - 18, 90/90 - 18", "TR 29", "20x4=80", "45"],
      ["3", "2.75/3.00 - 18", "TR 29", "25x4=100", "50"],
      ["4", "2.50/2.75 - 18", "TR 29", "25x4=100", "55"],
      ["5", "140/70 -17 & 130/70 -17", "TR 29", "15x4=60", "35"],
      ["6", "100/90 -17, 100/80 - 17, 90/90 -17", "TR 29", "20x4=80", "45"],
      ["7", "2.75/3.00 - 17", "TR 29", "25x4=100", "50"],
      ["8", "2.25/2.50 - 17", "TR 29", "25x4=100", "60"],
      ["9", "120/130 -80 -16", "TR 29", "15x4=60", "35"],
      ["10", "2.25/2.50 - 16", "TR 29", "25x4=100", "60"],
      ["11", "130/90 -15", "TR 29", "15x4=60", "35"],
    ],
  },
  {
    id: "scooter",
    title: "SCOOTER TUBES",
    image: tubeScooter,
    desc: "We offer Scooter Tubes to meet the requirements of our clients. The components that we use to fabricate these tubes are procured from reliable and certified vendors. We make them available at affordable prices.",
    specs: [
      ["1", "3.50 - 10/100/90-10", "V1.08.01", "25x4=100", "55"],
      ["2", "2.75/3.00 - 10", "V1.08.01", "25x4=100", "55"],
      ["3", "3.50 - 8", "V1.08.03", "25x4=100", "55"],
      ["4", "16-3.0 (76-305 )", "V1.08.01", "25X5=125", ""],
    ],
  },
  {
    id: "e-rickshaw",
    title: "E-RICKSHAW TUBES",
    image: tubeErickshaw,
    desc: "We offer E-Rickshaw Tubes to meet the requirements of our clients. The components that we use to fabricate these tubes are procured from reliable and certified vendors. We make them available at affordable prices.",
    specs: [
      ["1", "3.00/3.25 - 16", "TR 29", "25x4=100", "40"],
      ["2", "2.75/3.00 -14", "TR-29", "25x4=100", "50"],
      ["3", "3.75/4.00-12", "V1.08.01", "20X4=80", "40"],
      ["4", "90/90 -12", "V1.08.01", "20x4=80", "55"],
    ],
  },
];

const SpecTable = ({ specs }: { specs: string[][] }) => (
  <div className="overflow-x-auto mt-4">
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
);

const ButylTubes = () => (
  <div>
    <PageBreadcrumb
      title="Butyl Tubes"
      subtitle="Premium Quality Automotive Butyl Inner Tubes — Strong Companion of Your Tyre"
      breadcrumbs={[{ label: "Products", path: "/products" }, { label: "Butyl Tubes" }]}
    />

    {/* Quick nav */}
    <section className="py-4 bg-secondary/30 border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted hover:bg-crimson hover:text-white transition-colors text-muted-foreground"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-16">
        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="scroll-mt-32"
          >
            <div className={`grid ${section.image ? "lg:grid-cols-2" : ""} gap-8 items-start`}>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Specifications:</h4>
                <SpecTable specs={section.specs} />
              </div>
              {section.image && (
                <AnimatedSection delay={0.2}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full rounded-xl shadow-lg"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </AnimatedSection>
              )}
            </div>
            {idx < sections.length - 1 && <hr className="border-border mt-12" />}
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default ButylTubes;
