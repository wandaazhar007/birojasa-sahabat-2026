// app/components/ctaHome/CtaHome.tsx
import Link from "next/link";
import styles from "./CtaHome.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faListCheck,
  faClock,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin Birojasa Sahabat, saya mau konsultasi perihal surat-surat kendaraan.";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

const mapHref = "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6";

export default function CtaHome() {
  return (
    <section className={styles.section} aria-label="CTA akhir Birojasa Sahabat">
      <div className={styles.inner}>
        <div className={styles.panel}>
          {/* LEFT */}
          <div className={styles.left}>
            <header className={styles.header}>
              <h2 className={styles.title}>
                Siap urus STNK tanpa ribet? Mulai dari chat dulu.
              </h2>
              <p className={styles.subtitle}>
                Birojasa Sahabat bantu pengurusan surat kendaraan dengan{" "}
                <strong>proses yang jelas</strong>, <strong>biaya transparan</strong>,
                dan penanganan berkas yang <strong>aman</strong>. Kamu fokus aktivitas—kami
                bantu urusnya.
              </p>
            </header>

            <ul className={styles.points} aria-label="Keunggulan utama">
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                <span className={styles.pointText}>
                  <strong>Cek persyaratan rapi</strong> sesuai layanan yang kamu butuhkan.
                </span>
              </li>

              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span className={styles.pointText}>
                  <strong>Hemat waktu</strong> — tidak perlu antre & bolak-balik.
                </span>
              </li>

              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <span className={styles.pointText}>
                  <strong>Komunikasi jelas</strong> + update status supaya kamu tenang.
                </span>
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Konsultasi gratis via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Konsultasi Gratis
              </a>

              <Link
                href="/layanan"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Lihat layanan kami"
              >
                Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <p className={styles.micro}>
              <strong>Tip:</strong> Saat chat, sebutkan kebutuhanmu (mis. STNK tahunan/5 tahunan, balik nama,
              mutasi, ganti plat, ubah bentuk/warna, STNK hilang/rusak, plat custom) dan lokasimu.
            </p>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Info lokasi dan kontak cepat">
            <div className={styles.infoCard}>
              <div className={styles.infoTop}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.infoTitle}>Lokasi</p>
                  <p className={styles.infoDesc}>
                    Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah, Ciputat, South
                    Tangerang City, Banten 15414, Indonesia
                  </p>
                </div>
              </div>

              <div className={styles.infoActions}>
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapBtn}
                  aria-label="Buka lokasi Birojasa Sahabat di Google Maps"
                >
                  Buka Google Maps <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waMini}
                  aria-label="Chat WhatsApp Birojasa Sahabat"
                >
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  WhatsApp: +62 813-1892-7898
                </a>
              </div>

              <div className={styles.infoFooter}>
                <p className={styles.infoFooterText}>
                  Mau yang paling cepat? Klik <strong>Konsultasi Gratis</strong> dan kami bantu arahkan langkahnya.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}