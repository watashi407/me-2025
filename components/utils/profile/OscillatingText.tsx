export default function OscillatingText() {
  const watashiStudio = "watashi".split(""); // Example text

  return (
    <div className="w-fit -rotate-12 text-orange-700 homemade-apple-regular antialiased ">
      <div className="flex whitespace-nowrap animate-typing overflow-hidden border-r-5 border-r-orange-700 pr-4 py-2 tracking-tight">
        {watashiStudio.map((letter, index) => (
          <span
            key={index}
            className="text-[80px] max-sm:text-[40px] motion-preset-oscillate"
            style={{ animationDelay: `${index % 2 === 0 ? 1 : 2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
