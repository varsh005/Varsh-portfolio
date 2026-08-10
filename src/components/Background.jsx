function Background() {
  return (
    <>
      {/* Purple Glow */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Cyan Glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full"></div>

      {/* Grid Dots */}
      <div className="absolute top-60 right-80 grid grid-cols-6 gap-3 opacity-25">
        {Array.from({ length: 36 }).map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        ))}
      </div>

      {/* Curved Glow Line */}
      <div className="absolute right-12 top-24 w-[450px] h-[450px] border border-purple-500/30 rounded-full"></div>
    </>
  );
}

export default Background;