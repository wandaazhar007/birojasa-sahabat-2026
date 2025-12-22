"use client";

// app/components/faqMini/FaqMini.tsx
import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./FaqMini.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faShieldHalved,
  faListCheck,
  faClock,
  faChevronDown,
  faComments,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type FaqItem = {
  q: string;
  a: string;
};

const waMessage = "Assalamualaikum admin Birojasa Sahabat";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

export default function FaqMini() {
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "Apa saja berkas yang biasanya dibutuhkan?",
        a: "Tergantung layanan. Umumnya kami akan minta dokumen seperti STNK/BPKB, KTP, surat kuasa, dan untuk beberapa layanan perlu cek fisik atau dokumen tambahan. Tenang—kamu tinggal chat, kami cekkan kebutuhan berkasnya biar tidak salah dan tidak bolak-balik.",
      },
      {
        q: "Apakah bisa konsultasi dulu sebelum proses?",
        a: "Bisa. Justru kami sarankan mulai dari konsultasi dulu supaya jelas: layanan yang tepat, persyaratan, dan alur prosesnya. Kamu akan dapat penjelasan yang rapi dan mudah dipahami sebelum memutuskan lanjut.",
      },
      {
        q: "Bagaimana dengan biaya—apakah transparan?",
        a: "Ya. Kami menjaga komunikasi yang transparan: apa yang perlu disiapkan, langkah yang akan dijalankan, dan estimasi biaya akan dijelaskan di awal sesuai kebutuhan kasusmu. Kalau ada hal yang memengaruhi proses, kami sampaikan dengan jelas.",
      },
      {
        q: "Berapa lama estimasi proses pengurusannya?",
        a: "Estimasi tergantung kelengkapan berkas, jenis layanan, dan ketentuan wilayah/instansi terkait. Yang pasti, kami bantu alur agar lebih tertib dan kamu tetap mendapat update status supaya tenang dan tidak menebak-nebak progress.",
      },
      {
        q: "Apakah berkas saya aman saat ditangani?",
        a: "Kami mengutamakan penanganan dokumen yang rapi dan bertanggung jawab. Kami juga menjaga komunikasi selama proses berjalan, sehingga kamu tahu status pengurusan dan dokumen tidak “hilang kabar”.",
      },
      {
        q: "Apakah bisa jemput/terima berkas dan antar kembali?",
        a: "Bisa. Untuk banyak kasus, kami bantu koordinasi penyerahan berkas dan pengembalian dokumen sesuai kesepakatan. Kamu tetap bisa fokus aktivitas—tanpa harus antre panjang atau bolak-balik untuk hal yang sama.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <section className={styles.section} aria-label="FAQ singkat Birojasa Sahabat">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT COLUMN */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className={styles.kickerText}>FAQ Singkat</span>
            </div>

            <h2 className={styles.title}>Pertanyaan yang paling sering ditanya</h2>
            <p className={styles.subtitle}>
              Biar kamu makin yakin sebelum chat, ini jawaban ringkas untuk pertanyaan yang paling sering
              muncul. Kalau pertanyaanmu berbeda, tinggal WhatsApp—kami jawab dengan jelas.
            </p>

            <ul className={styles.points} aria-label="Nilai utama layanan">
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                Proses rapi & mudah dipahami
              </li>
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                Hemat waktu, tidak perlu antre
              </li>
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                Berkas ditangani aman & bertanggung jawab
              </li>
              <li className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faComments} />
                </span>
                Komunikasi jelas + update status
              </li>
            </ul>

            <div className={styles.leftActions}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Tanya via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Tanya via WhatsApp
              </a>

              <Link
                href="/faq"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Ke halaman FAQ lengkap"
              >
                Lihat FAQ lengkap <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.right} aria-label="Accordion FAQ">
            <div className={styles.accordion}>
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                const contentId = `faq-mini-panel-${idx}`;
                const btnId = `faq-mini-button-${idx}`;

                return (
                  <div key={item.q} className={styles.item}>
                    <button
                      id={btnId}
                      type="button"
                      className={styles.q}
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={styles.qText}>{item.q}</span>
                      <span
                        className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`${styles.aWrap} ${isOpen ? styles.aOpen : ""}`}
                    >
                      <div className={styles.a}>
                        <p className={styles.aText}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={styles.note}>
              Tidak menemukan jawaban yang kamu cari? Klik{" "}
              <a href={waHref} target="_blank" rel="noopener noreferrer" className={styles.noteLink}>
                WhatsApp
              </a>{" "}
              — kami bantu cek kebutuhanmu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}