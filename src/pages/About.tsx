import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import aboutImg from "@/assets/factory.jpg";
import { Shield, Award, Cog, Users, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Integrity", desc: "We believe in transparency and ethical business practices." },
  { icon: Award, title: "Quality", desc: "Uncompromising quality standards in every product we manufacture." },
  { icon: Eye, title: "Transparency", desc: "Open and honest communication with all stakeholders." },
  { icon: Cog, title: "Efficiency", desc: "Optimized processes for maximum value delivery." },
];

const About = () => (
  <div>
    <PageBreadcrumb
      title="About Us"
      subtitle="B. K. Rubber Industries Private Limited — Since 1985"
      breadcrumbs={[{ label: "About Us" }]}
    />

    {/* Company Overview */}
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            B. K. Rubber Industries <span className="text-gradient-red">Private Limited</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            B. K. Rubber Industries Private Limited was established in the year 1985. Our Company is a leading manufacturer of Butyl Tubes for Tyres, Curing Bags for Retreading of Tyres, Flaps and Rubber Compound. We at BK Rubber aim to manufacture and distribute best quality products. Today we are the established manufacturing which has made a continuous improvement in the supply of various genuine and trusted quality products. Under the insightful guidance of Mr. Jaswant Kumar Goomber and Mr. Bhupendra Kumar Goomber our company has made its way to became a pioneer in the industry.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our unit is situated in PITHAMPUR industrial area Dist. Dhar M.P. (INDIA). We are in production since 1987. Our brand name is 'BKSTONE'. We manufacture butyl tubes for Tires of sizes for 2/3 wheelers, Passenger Cars, LCVs, Truck/Bus, Tractor Rear, Off the Road Tires etc. We are an ISO certified company. Also our tubes are ISI marked.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <img src={aboutImg} alt="BK Rubber Industries Factory" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1200} height={800} />
        </AnimatedSection>
      </div>
    </section>

    {/* Market Sections */}
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            We market our products in the <span className="text-gradient-red">following sections</span>
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0" />
              Replacement market through distributors in various states of India.
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0" />
              State Road Transport Undertakings of India.
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0" />
              Export to Nepal, Bangladesh and Pakistan.
            </li>
          </ul>
          <Link to="/presence" className="btn-primary inline-flex items-center gap-2 mt-6">
            View Our Presence <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-muted-foreground mt-4">We also do job work for multinational Tyre companies.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Quality & Testing */}
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Quality & <span className="text-gradient-red">Testing</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We always have been a patron of new and innovative technology and are constantly seeking to upgrade the methodologies currently in use. The commitment to quality starts at the very beginning of the process, i.e. the outsourcing of the Raw material.</p>
            <p>We take pride in the world-class quality standards already in place, by making sure that every product that goes out is tried and tested to withstand the toughest conditions.</p>
            <p>Raw material is released only after physical & chemical testing although it is procured from approved sources only.</p>
            <p>Strict process control measures are taken and every tube passes through pre-defined specifications. We have well equipped laboratory where in finished product is tested and every lot of tubes, flaps & curing tubes are tested and released thereafter.</p>
            <p>Dedicated team of Rubber technologists & quality assurance staff ensures quality as per specification, new formulations and new working ideas.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Design & Development */}
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Design and <span className="text-gradient-red">Development</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>New designs are passed & tested before they are given for commercial production.</p>
            <p>Continuous feedback from customers on products is taken to keep our quality at the best. These feedbacks help to develop product quality of international standards.</p>
            <p>We keep ourselves up-to-date with new technology to offer better quality and efficiency. We are ISO and BIS certified company.</p>
            <p>Our expertise enables us to respond to the market developments and specific needs of the clients, thereby making us one of the most dependable suppliers in the industry.</p>
            <p>Our team comprises of dedicated dynamic professionals who understand the customers' requirement and work hard to delight them. Our success stands on three pillars- wide product range, world-class technology and efficient team.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground">Our <span className="text-gradient-red">Values</span></h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 text-center h-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-crimson/10 flex items-center justify-center">
                  <v.icon className="w-7 h-7 text-crimson" />
                </div>
                <h3 className="font-heading text-lg font-semibold mt-4 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
