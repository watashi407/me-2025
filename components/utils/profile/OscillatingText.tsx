export default function OscillatingText() {
  const watashiStudio = "watashi".split(""); // Example text

  return (
    <div className="homemade-apple-regular w-fit -rotate-12 text-orange-700 antialiased">
      <div className="animate-typing border-r-5 flex overflow-hidden whitespace-nowrap border-r-orange-700 py-2 pr-4 tracking-tight">
        {watashiStudio.map((letter, index) => (
          <span
            key={index}
            className="motion-preset-oscillate homemade-apple-regular text-[80px] antialiased max-sm:text-[40px]"
            style={{ animationDelay: `${index % 2 === 0 ? 1 : 2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
