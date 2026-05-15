import { TextReveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.92] text-white">
        <TextReveal text={title} />
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
