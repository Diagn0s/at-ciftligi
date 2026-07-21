import clsx from "clsx";

export default function SectionHeading({
  goldWord,
  darkWord,
  script,
  align = "left",
  light = false,
}: {
  goldWord: string;
  darkWord: string;
  script: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={clsx(align === "center" && "text-center")}>
      <h2 className="font-sans text-4xl font-bold leading-tight sm:text-5xl lg:text-[4.4rem]">
        <span className="text-gold">{goldWord}</span>{" "}
        <span className={light ? "text-white" : "text-dark"}>{darkWord}</span>
      </h2>
      <p className="font-script mt-1 text-3xl text-gold-light sm:text-4xl">{script}</p>
    </div>
  );
}
