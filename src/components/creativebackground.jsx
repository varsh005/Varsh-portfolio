function CreativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute top-24 right-24 grid grid-cols-4 gap-3 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
        ))}
      </div>

      <div className="absolute bottom-24 left-24 grid grid-cols-4 gap-3 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
        ))}
      </div>
    </div>
  );
}

export default CreativeBackground;