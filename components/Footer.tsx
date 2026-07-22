import Link from "next/link";
import HorseLogo from "./HorseLogo";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  MapPinIcon,
} from "./SocialIcons";
import FooterBulletLink from "./FooterBulletLink";
import { footerMenu, siteInfo, newsletterText } from "@/lib/data";

const socialCircle =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-dark transition-colors";

export default function Footer() {
  return (
    <footer className="bg-dark pb-20 pt-24 text-white">
      <div className="container-page grid gap-12 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <h2 className="relative pl-[100px] font-sans text-2xl font-medium">
            <HorseLogo className="absolute -top-[25px] left-0 h-[66px] w-[66px] text-white" />
            Bülten
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">{newsletterText}</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              Ad Soyad
              <input
                type="text"
                placeholder="örn.: Ahmet Yılmaz"
                className="rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              E-posta
              <input
                type="email"
                placeholder="örn.: ahmet@gmail.com"
                className="rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
              />
            </label>
            <label className="flex items-start gap-2 text-xs text-white/70 sm:col-span-2">
              <input type="checkbox" className="mt-0.5" />
              Gizlilik politikasını kabul ediyorum.
            </label>
            <button
              type="submit"
              className="self-start rounded-md bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/70 sm:col-span-2"
            >
              Gönder
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-sans text-2xl font-medium">Menü - Seçenekler</h2>
          <ul className="mt-4 flex flex-col">
            {footerMenu.map((item) => (
              <li key={item.href}>
                <FooterBulletLink href={item.href}>{item.label}</FooterBulletLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-2xl font-medium">Bilgiler</h2>
          <p className="mt-4 font-sans font-semibold text-white">{siteInfo.legalName}</p>
          <ul className="mt-2 flex flex-col">
            <li>
              <FooterBulletLink href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}>
                {siteInfo.phone}
              </FooterBulletLink>
            </li>
            <li>
              <FooterBulletLink href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </FooterBulletLink>
            </li>
            <li>
              <FooterBulletLink href={siteInfo.social.maps} external>
                {siteInfo.address}
              </FooterBulletLink>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={socialCircle}>
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={siteInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={socialCircle}>
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={siteInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className={socialCircle}>
              <YoutubeIcon className="h-4 w-4" />
            </a>
            <a href={siteInfo.social.maps} target="_blank" rel="noreferrer" aria-label="Google Maps" className={socialCircle}>
              <MapPinIcon className="h-4 w-4" />
            </a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={socialCircle}>
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-16 text-center text-xs text-white">
        <p>
          {new Date().getFullYear()} © Tüm hakları saklıdır |{" "}
          <Link href="/tr/gizlilik-politikasi" className="hover:text-gold-light">
            Gizlilik Politikası
          </Link>{" "}
          |{" "}
          <Link href="/tr/kullanim-sartlari" className="hover:text-gold-light">
            Şartlar ve Koşullar
          </Link>
        </p>
        <p className="mt-1">
          Tasarım:{" "}
          <a href="https://webmestered.hu" className="hover:text-gold-light">
            webmestered.hu
          </a>
        </p>
      </div>
    </footer>
  );
}
