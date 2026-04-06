const FloatingTubes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tube ring shapes */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border-[12px] border-crimson/10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[60%] right-[8%] w-48 h-48 rounded-full border-[16px] border-crimson/8 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[15%] left-[15%] w-24 h-24 rounded-full border-[8px] border-crimson/5 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute top-[30%] right-[25%] w-40 h-40 rounded-full border-[14px] border-foreground/5 animate-spin-slow" />
      <div className="absolute bottom-[40%] left-[40%] w-20 h-20 rounded-full border-[6px] border-crimson/5 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[75%] right-[40%] w-36 h-36 rounded-full border-[10px] border-crimson/8 animate-spin-slow" style={{ animationDelay: '3s' }} />
      
      {/* Glow spots */}
      <div className="absolute top-[20%] left-[30%] w-64 h-64 rounded-full bg-crimson/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 rounded-full bg-crimson/3 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default FloatingTubes;
