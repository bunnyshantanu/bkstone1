import vehicleStrip from "@/assets/moving-vehicles.jpg";

const VehicleMarquee = () => (
  <div className="relative overflow-hidden bg-secondary/80 border-t border-b border-border ">
    <div className="flex animate-scroll whitespace-nowrap">
      <img src={vehicleStrip} alt="Vehicles" className="h-16 md:h-20 w-auto object-contain " />
      <img src={vehicleStrip} alt="Vehicles" className="h-16 md:h-20 w-auto object-contain " />
      <img src={vehicleStrip} alt="Vehicles" className="h-16 md:h-20 w-auto object-contain " />
      <img src={vehicleStrip} alt="Vehicles" className="h-16 md:h-20 w-auto object-contain " />
    </div>
  </div>
);

export default VehicleMarquee;
