// app/components/footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Footer Birojasa Sahabat">
      {/* Top */}
      <div className={styles.top}>
        {/* Left */}
        <div className={styles.left}>
          <Link href="/" className={styles.brand} aria-label="Birojasa Sahabat - Home">
            <span className={styles.logoWrap} aria-hidden="true">
              <Image
                src="/images/logo-birojasa-sahabat.jpg"
                alt="Logo Birojasa Sahabat"
                width={48}
                height={48}
                className={styles.logo}
              />
            </span>

            <span className={styles.brandText}>Birojasa Sahabat</span>
          </Link>

          <p className={styles.desc}>
            Biro jasa pengurusan surat kendaraan yang{" "}
            <strong>terpercaya</strong>, <strong>transparan</strong>, dan{" "}
            <strong>aman</strong>. Konsultasi gratis via WhatsApp—tanpa perlu
            antre & bolak-balik.
          </p>

          <div className={styles.social} aria-label="Tautan sosial">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="Chat WhatsApp Birojasa Sahabat"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.instagram.com/wanda_azharr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="Instagram"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="Buka lokasi di Google Maps"
              title="Google Maps"
            >
              <FontAwesomeIcon icon={faLocationArrow} />
            </a>
          </div>
        </div>

        {/* Middle */}
        <nav className={styles.middle} aria-label="Footer links layanan">
          <h2 className={styles.colTitle}>Layanan</h2>

          <div className={styles.linkCols}>
            <ul className={styles.linkList}>
              <li>
                <Link href="/layanan/perpanjang-stnk-tahunan">Perpanjang STNK Tahunan</Link>
              </li>
              <li>
                <Link href="/layanan/perpanjang-stnk-5-tahunan">Perpanjang STNK 5 Tahunan</Link>
              </li>
              <li>
                <Link href="/layanan/balik-nama-kendaraan">Balik Nama Kendaraan</Link>
              </li>
              <li>
                <Link href="/layanan/ganti-nomor-plat">Ganti Nomor Plat</Link>
              </li>
            </ul>

            <ul className={styles.linkList}>
              <li>
                <Link href="/layanan/ubah-bentuk-warna">Ubah Bentuk Warna</Link>
              </li>
              <li>
                <Link href="/layanan/mutasi-masuk-kendaraan">Mutasi Masuk</Link>
              </li>
              <li>
                <Link href="/layanan/stnk-hilang-rusak">STNK Hilang/Rusak</Link>
              </li>
              <li>
                <Link href="/layanan/plat-custom">Plat Custom</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Right */}
        <div className={styles.right} aria-label="Kontak dan alamat">
          <h2 className={styles.colTitle}>Kontak</h2>

          <p className={styles.address}>
            Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah, Ciputat, South
            Tangerang City, Banten 15414, Indonesia
          </p>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                WhatsApp: +62 813-1892-7898
              </a>
            </li>

            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a
                href="mailto:birojasa-sahabat@gmail.com"
                className={styles.contactLink}
              >
                Email: birojasa-sahabat@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomLeft}>
            Build with ❤️ by{" "}
            <a
              href="https://wandaazhar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.author}
            >
              Wanda Azhar
            </a>{" "}
            in Detroit, MI. USA
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.legalRow} aria-label="Legal links">
              <Link href="/kebijakan-privasi" className={styles.legalLink}>
                Kebijakan Privasi
              </Link>
              <span className={styles.sep} aria-hidden="true">
                •
              </span>
              <Link href="/syarat-ketentuan" className={styles.legalLink}>
                Syarat &amp; Ketentuan
              </Link>
            </div>

            <div className={styles.copyRow}>
              © {year} Birojasa Sahabat. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}