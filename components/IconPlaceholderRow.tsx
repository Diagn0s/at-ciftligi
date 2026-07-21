export default function IconPlaceholderRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="h-16 w-16 shrink-0 rounded-2xl border border-gold" />
      <p className="pt-2 leading-relaxed text-black/60">{text}</p>
    </div>
  );
}
