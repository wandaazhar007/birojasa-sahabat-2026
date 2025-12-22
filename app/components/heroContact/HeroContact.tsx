// app/components/heroContact/HeroContact.tsx
import Link from "next/link";
import styles from "./HeroContact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faLocationDot,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

const mapsHref = "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6";

export default function HeroContact() {
  return (
    <section className={styles.section} aria-label="Kontak Birojasa Sahabat">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faHeadset} />
              </span>
              <span className={styles.kickerText}>Kontak & Lokasi</span>
            </div>

            <h1 className={styles.title}>
              Hubungi <span className={styles.brand}>Birojasa Sahabat</span>
            </h1>

            <p className={styles.subtitle}>
              Konsultasi dulu saja—kami bantu cek kebutuhanmu, persyaratan berkas, dan alur prosesnya.
              Fokus kami: <strong>jelas</strong>, <strong>aman</strong>, dan <strong>transparan</strong>.
            </p>

            <div className={styles.actions} aria-label="Tombol aksi kontak">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Chat WhatsApp Birojasa Sahabat"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Chat WhatsApp sekarang
              </a>

              <Link
                href="/layanan"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Lihat layanan Birojasa Sahabat"
              >
                Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.quickInfo} aria-label="Info kontak cepat">
              <a
                className={styles.infoCard}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp: +62 813-1892-7898"
              >
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.infoLabel}>WhatsApp</span>
                  <span className={styles.infoValue}>+62 813-1892-7898</span>
                </span>
              </a>

              <a
                className={styles.infoCard}
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka lokasi Birojasa Sahabat di Google Maps"
              >
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.infoLabel}>Lokasi</span>
                  <span className={styles.infoValue}>Ciputat, Tangerang Selatan</span>
                </span>
              </a>

              <a
                className={styles.infoCard}
                href="mailto:birojasa-sahabat@gmail.com"
                aria-label="Kirim email ke birojasa-sahabat@gmail.com"
              >
                <span className={styles.infoIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>birojasa-sahabat@gmail.com</span>
                </span>
              </a>
            </div>

            <p className={styles.note}>
              Ingin cepat dibalas? Kirim format:{" "}
              <span className={styles.format}>“Layanan: … / Area: … / Kondisi berkas: …”</span>
            </p>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Highlight singkat layanan">
            <div className={styles.panel}>
              <p className={styles.panelTitle}>Mulai dari yang paling mudah</p>
              <p className={styles.panelDesc}>
                Chat dulu saja. Kami bantu arahkan layanan yang tepat dan persyaratan berkasnya, supaya kamu
                tidak bolak-balik.
              </p>

              <ul className={styles.panelList} aria-label="Keunggulan utama">
                <li className={styles.panelItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Respon cepat & komunikatif
                </li>
                <li className={styles.panelItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Penjelasan persyaratan yang jelas
                </li>
                <li className={styles.panelItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  Proses rapi, status ter-update
                </li>
              </ul>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.panelLink}
                aria-label="Buka Google Maps"
              >
                Buka di Google Maps <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}