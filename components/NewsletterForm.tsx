export default function NewsletterForm() {
  return (
    <form className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm">
        Ad Soyad
        <input
          type="text"
          placeholder="örn.: Ahmet Yılmaz"
          className="rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm placeholder:text-black/40 focus:border-gold focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        E-posta
        <input
          type="email"
          placeholder="örn.: ahmet@gmail.com"
          className="rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm placeholder:text-black/40 focus:border-gold focus:outline-none"
        />
      </label>
      <label className="flex items-start gap-2 text-xs sm:col-span-2">
        <input type="checkbox" className="mt-0.5" /> Gizlilik politikasını kabul
        ediyorum.
      </label>
      <button
        type="submit"
        className="self-start rounded-full bg-dark px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-dark-soft"
      >
        Gönder
      </button>
    </form>
  );
}
