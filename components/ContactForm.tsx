type Variant = "light" | "gold";

export default function ContactForm({ variant = "light" }: { variant?: Variant }) {
  const fieldClass =
    variant === "gold"
      ? "rounded-md border border-dark bg-gold px-4 py-2.5 text-sm text-dark placeholder:text-dark/50 focus:border-white focus:outline-none"
      : "rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm placeholder:text-black/40 focus:border-gold focus:outline-none";

  const labelClass = variant === "gold" ? "text-dark" : "";
  const submitClass =
    variant === "gold"
      ? "self-start rounded-full border border-white bg-transparent px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-dark sm:col-span-2"
      : "self-start rounded-full bg-gold px-8 py-2.5 text-sm font-medium text-dark transition-colors hover:bg-gold-light sm:col-span-2";

  return (
    <form className="grid gap-4 sm:grid-cols-2">
      <label className={`flex flex-col gap-1.5 text-sm sm:col-span-1 ${labelClass}`}>
        Ad Soyad <span className="text-gold">*</span>
        <input type="text" placeholder="örn.: Ahmet Yılmaz" className={fieldClass} />
      </label>
      <label className={`flex flex-col gap-1.5 text-sm sm:col-span-1 ${labelClass}`}>
        E-posta <span className="text-gold">*</span>
        <input type="email" placeholder="örn.: ahmet@gmail.com" className={fieldClass} />
      </label>
      <label className={`flex flex-col gap-1.5 text-sm sm:col-span-1 ${labelClass}`}>
        Telefon
        <input type="tel" placeholder="örn.: +90 532 700 7777" className={fieldClass} />
      </label>
      <label className={`flex flex-col gap-1.5 text-sm sm:col-span-1 ${labelClass}`}>
        Konu
        <input
          type="text"
          placeholder="örn.: Teklif talebi"
          className={fieldClass}
        />
      </label>
      <label className={`flex flex-col gap-1.5 text-sm sm:col-span-2 ${labelClass}`}>
        Mesaj
        <textarea
          rows={4}
          placeholder="örn.: Aşağıdaki hizmetler için bir teklif almak istiyorum..."
          className={fieldClass}
        />
      </label>
      <div className={`flex flex-col gap-2 sm:col-span-2 ${labelClass}`}>
        <label className="flex items-start gap-2 text-xs">
          <input type="checkbox" className="mt-0.5" /> Gizlilik politikasını kabul
          ediyorum. <span className="text-gold">*</span>
        </label>
        <label className="flex items-start gap-2 text-xs">
          <input type="checkbox" className="mt-0.5" /> Bültene abone olmak istiyorum.
        </label>
      </div>
      <button type="submit" className={submitClass}>
        Gönder
      </button>
    </form>
  );
}
