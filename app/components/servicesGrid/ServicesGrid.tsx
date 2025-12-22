// app/components/servicesGrid/ServicesGrid.tsx
import Link from "next/link";
import styles from "./ServicesGrid.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCarSide,
  faRotate,
  faPalette,
  faArrowRightArrowLeft,
  faHashtag,
  faTriangleExclamation,
  faWandMagicSparkles,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

type ServiceItem = {
  title: string;
  href: string;
  icon: any;
  desc: string;
};

const services: ServiceItem[] = [
  {
    title: "Perpanjang STNK Tahunan",
    href: "/layanan/perpanjang-stnk-tahunan",
    icon: faIdCard,
    desc: "Perpanjang STNK tahunan lebih praktis. Kami bantu cek kebutuhan berkas, arahkan langkahnya, dan komunikasikan prosesnya dengan jelas.",
  },
  {
    title: "Perpanjang STNK 5 Tahunan",
    href: "/layanan/perpanjang-stnk-5-tahunan",
    icon: faCarSide,
    desc: "Butuh ganti plat & cek fisik? Kami bantu menyiapkan persyaratan, mengatur alur proses, dan memastikan kamu tidak perlu bolak-balik.",
  },
  {
    title: "Balik Nama Kendaraan",
    href: "/layanan/balik-nama-kendaraan",
    icon: faRotate,
    desc: "Balik nama tanpa bingung. Kami bantu dari pengecekan berkas sampai langkah pengurusan, dengan penjelasan yang rapi dan transparan.",
  },
  {
    title: "Ganti Nomor Plat",
    href: "/layanan/ganti-nomor-plat",
    icon: faHashtag,
    desc: "Mau ganti nomor plat? Kami bantu persiapan dokumen dan arahkan prosesnya, supaya pengurusan jadi lebih tertib dan cepat dipahami.",
  },
  {
    title: "Ubah Bentuk/Warna",
    href: "/layanan/ubah-bentuk-warna",
    icon: faPalette,
    desc: "Ubah bentuk atau warna kendaraan perlu persyaratan khusus. Kami bantu jelaskan dokumen yang dibutuhkan dan alur pengurusannya langkah demi langkah.",
  },
  {
    title: "Mutasi Masuk",
    href: "/layanan/mutasi-masuk-kendaraan",
    icon: faArrowRightArrowLeft,
    desc: "Mutasi masuk dari luar daerah bisa terasa rumit. Kami bantu cek kelengkapan arsip berkas dan arahkan proses agar lebih terstruktur.",
  },
  {
    title: "STNK Hilang/Rusak",
    href: "/layanan/stnk-hilang-rusak",
    icon: faTriangleExclamation,
    desc: "STNK hilang atau rusak? Kami bantu kamu menyiapkan dokumen pendukung (termasuk laporan kehilangan) dan menjelaskan alur pengurusannya.",
  },
  {
    title: "Plat Custom",
    href: "/layanan/plat-custom",
    icon: faWandMagicSparkles,
    desc: "Ingin nomor pilihan? Kami bantu menyiapkan persyaratan dan memastikan prosesnya jelas, rapi, dan komunikasinya tetap nyaman.",
  },
];

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        <FontAwesomeIcon icon={item.icon} />
      </div>

      <h3 className={styles.cardTitle}>
        <Link href={item.href} className={styles.cardLink}>
          {item.title}
        </Link>
      </h3>

      <p className={styles.cardDesc}>{item.desc}</p>

      <Link href={item.href} className={styles.cardCta} aria-label={`Lihat detail ${item.title}`}>
        Lihat detail <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className={styles.section} aria-label="Daftar layanan Birojasa Sahabat">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Layanan yang paling sering dibutuhkan</h2>
          <p className={styles.subtitle}>
            Pilih layanan sesuai kebutuhan. Kalau masih ragu, kamu bisa mulai dari konsultasi dulu—kami jelaskan persyaratan dan alurnya dengan bahasa yang mudah.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((item) => (
            <ServiceCard key={item.href} item={item} />
          ))}
        </div>

        <div className={styles.bottomCta}>
          <p className={styles.bottomText}>
            Mau lihat semua layanan dalam satu halaman?
          </p>
          <Link href="/layanan" className={`${styles.bottomBtn} btn btnSecondary`} aria-label="Ke halaman layanan">
            Ke halaman layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}