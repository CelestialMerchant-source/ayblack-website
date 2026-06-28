export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="text-gold uppercase text-xs sm:text-sm tracking-[0.2em] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-cream">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cream/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
