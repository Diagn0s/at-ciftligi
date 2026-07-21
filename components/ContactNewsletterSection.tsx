import Image from "next/image";
import HorseLogo from "./HorseLogo";
import ContactForm from "./ContactForm";

export default function ContactNewsletterSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image src="/images/formbg.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="container-page relative z-10 flex justify-center">
        <div className="w-full max-w-xl rounded-2xl bg-gold p-10 shadow-xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <HorseLogo className="h-9 w-9 text-dark" />
              <h2 className="font-sans text-4xl font-bold text-dark">iletişim</h2>
            </div>
            <p className="font-script mt-1 text-2xl text-white">B-Horse</p>
          </div>
          <div className="mt-8">
            <ContactForm variant="gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
