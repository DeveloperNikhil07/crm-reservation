"use client";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/crm-style.css';
import '../../public/assets/css/crm-responsive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "react-datepicker/dist/react-datepicker.css";
// Hooks call
import { usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noHeaderFooterPages = ['/', '/pages/forgetpassword', '/pages/signup'];
  const hideHeaderFooter = noHeaderFooterPages.includes(pathname);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Welcome to Reservation centre" />
        <title>CRM Reservation Centre</title>
      </head>
      <body>
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
