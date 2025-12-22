"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const [desktopLayananOpen, setDesktopLayananOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const layananItems: NavItem[] = useMemo(
    () => [
      { label: "Perpanjang STNK Tahunan", href: "/layanan/perpanjang-stnk-tahunan" },
      { label: "Perpanjang STNK 5 Tahunan", href: "/layanan/perpanjang-stnk-5-tahunan" },
      { label: "Balik Nama Kendaraan", href: "/layanan/balik-nama-kendaraan" },
      { label: "Ganti Nomor Plat", href: "/layanan/ganti-nomor-plat" },
      { label: "Ubah Bentuk Warna", href: "/layanan/ubah-bentuk-warna" },
      { label: "Mutasi Masuk", href: "/layanan/mutasi-masuk-kendaraan" },
      { label: "STNK Hilang/Rusak", href: "/layanan/stnk-hilang-rusak" },
      { label: "Plat Custom", href: "/layanan/plat-custom" },
    ],
    []
  );

  const whatsappMessage =
    "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
  const whatsappHref = `https://wa.me/6281318927898?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // close mobile panel on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileLayananOpen(false);
    setDesktopLayananOpen(false);
  }, [pathname]);

  // close dropdown on outside click / escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!desktopLayananOpen) return;
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDesktopLayananOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopLayananOpen(false);
        setMobileOpen(false);
        setMobileLayananOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopLayananOpen]);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="Birojasa Sahabat - Home">
          <span className={styles.logoWrap} aria-hidden="true">
            <Image
              src="/images/logo-birojasa-sahabat.jpg"
              alt="Logo Birojasa Sahabat"
              width={44}
              height={44}
              priority
              className={styles.logo}
            />
          </span>
          <span className={styles.brandText}>BIROJASA SAHABAT</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navigasi utama">
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link
                href="/"
                className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
              >
                Home
              </Link>
            </li>

            <li className={`${styles.item} ${styles.dropdown}`} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.link} ${styles.dropdownBtn} ${
                  isActive("/layanan") ? styles.active : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={desktopLayananOpen}
                aria-controls="nav-layanan-menu"
                onClick={() => setDesktopLayananOpen((v) => !v)}
              >
                Layanan
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${styles.chev} ${
                    desktopLayananOpen ? styles.chevOpen : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="nav-layanan-menu"
                className={`${styles.dropdownPanel} ${
                  desktopLayananOpen ? styles.dropdownOpen : ""
                }`}
                role="menu"
                aria-label="Menu layanan"
              >
                <Link href="/layanan" className={styles.dropdownTopLink} role="menuitem">
                  Lihat semua layanan
                </Link>

                <div className={styles.dropdownDivider} aria-hidden="true" />

                <ul className={styles.dropdownList}>
                  {layananItems.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className={styles.dropdownLink}
                        role="menuitem"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className={styles.item}>
              <Link
                href="/tentang"
                className={`${styles.link} ${isActive("/tentang") ? styles.active : ""}`}
              >
                Tentang Kami
              </Link>
            </li>

            <li className={styles.item}>
              <Link
                href="/kontak"
                className={`${styles.link} ${isActive("/kontak") ? styles.active : ""}`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cta} btn btnPrimary`}
            aria-label="Tanya Sekarang via WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            Tanya Sekarang
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${mobileOpen ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>Menu</span>
          <button
            type="button"
            className={styles.mobileClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Tutup menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className={styles.mobileBody}>
          <Link
            href="/"
            className={`${styles.mobileLink} ${isActive("/") ? styles.mobileActive : ""}`}
          >
            Home
          </Link>

          <button
            type="button"
            className={`${styles.mobileLink} ${styles.mobileAccordionBtn} ${
              isActive("/layanan") ? styles.mobileActive : ""
            }`}
            onClick={() => setMobileLayananOpen((v) => !v)}
            aria-expanded={mobileLayananOpen}
            aria-controls="mobile-layanan"
          >
            <span>Layanan</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.chev} ${
                mobileLayananOpen ? styles.chevOpen : ""
              }`}
              aria-hidden="true"
            />
          </button>

          <div
            id="mobile-layanan"
            className={`${styles.mobileSub} ${
              mobileLayananOpen ? styles.mobileSubOpen : ""
            }`}
          >
            <Link href="/layanan" className={styles.mobileSubLink}>
              Lihat semua layanan
            </Link>
            {layananItems.map((it) => (
              <Link key={it.href} href={it.href} className={styles.mobileSubLink}>
                {it.label}
              </Link>
            ))}
          </div>

          <Link
            href="/tentang"
            className={`${styles.mobileLink} ${isActive("/tentang") ? styles.mobileActive : ""}`}
          >
            Tentang Kami
          </Link>

          <Link
            href="/kontak"
            className={`${styles.mobileLink} ${isActive("/kontak") ? styles.mobileActive : ""}`}
          >
            Kontak
          </Link>

          <div className={styles.mobileCtaWrap}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mobileCta} btn btnPrimary`}
              aria-label="Tanya Sekarang via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              Tanya Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}