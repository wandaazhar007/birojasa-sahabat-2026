// app/components/businessHours/BusinessHours.tsx
import styles from "./BusinessHours.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarDay,
  faLocationArrow,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

const mapsHref = "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6";

// sama seperti di app/kontak/page.tsx (embed map)
const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6532356893217!2d106.7216366!3d-6.3092055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4 Purely aesthetic.13.1!3m3!1m2!1s0x2e69e56ea58af423%3A0xbbcdfa50c6a4400c!2sBiro%20Jasa%20Stnk%20Bpkb%20Sahabat!5e0!3m2!1sen!2sus!4v1766370931730!5m2!1sen!2sus";

const hours = [
  { day: "Senin", time: "08:00 - 16:00" },
  { day: "Selasa", time: "08:00 - 16:00" },
  { day: "Rabu", time: "08:00 - 16:00" },
  { day: "Kamis", time: "08:00 - 16:00" },
  { day: "Jumat", time: "08:00 - 11:00" },
  { day: "Sabtu", time: "08:00 - 14:00" },
  { day: "Minggu", time: "Tutup" },
];

export default function BusinessHours() {
  return (
    <section className={styles.section} aria-label="Jam operasional dan lokasi">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className={styles.kickerText}>Business Hours</span>
            </div>

            <h2 className={styles.title}>Jam operasional & arah ke lokasi</h2>
            <p className={styles.subtitle}>
              Kamu bisa datang sesuai jam operasional di bawah ini, atau lebih praktis: chat WhatsApp dulu
              untuk memastikan kebutuhan berkas dan langkah berikutnya.
            </p>

            <div className={styles.hoursCard} aria-label="Jam buka">
              <div className={styles.hoursHeader}>
                <span className={styles.hoursIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCalendarDay} />
                </span>
                <p className={styles.hoursTitle}>Jam Buka</p>
              </div>

              <ul className={styles.list} aria-label="Daftar jam operasional">
                {hours.map((h) => (
                  <li key={h.day} className={styles.row}>
                    <span className={styles.day}>{h.day}</span>
                    <span className={styles.time}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions} aria-label="Aksi kontak dan arah">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Chat WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Chat WhatsApp
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
                aria-label="Direction ke lokasi via Google Maps"
              >
                <FontAwesomeIcon icon={faLocationArrow} aria-hidden="true" />
                Direction
              </a>
            </div>

            <div className={styles.note} aria-label="Catatan">
              <span className={styles.noteIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              <p className={styles.noteText}>
                Alamat: Jl. Suka Bakti 1 No.30, Serua Indah, Ciputat, Tangerang Selatan.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Peta lokasi">
            <div className={styles.mapCard}>
              <div className={styles.mapTop}>
                <p className={styles.mapTitle}>Lokasi di Google Maps</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                  aria-label="Buka di Google Maps"
                >
                  Buka Maps
                </a>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={mapsEmbedSrc}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta lokasi Birojasa Sahabat"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}