'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Header = () => {
    const [isOffCanvasShow, setOffCanvasShow] = useState(false);
    const currentPath = usePathname();

    const ToggleHandle = () => {
        setOffCanvasShow(!isOffCanvasShow);
    };

    useEffect(() => {
        if (isOffCanvasShow) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        };
    }, [isOffCanvasShow]);

    const isActive = (path, subPaths = []) =>
        currentPath === path || subPaths.includes(currentPath);

    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 header-item-row">
                            <div className="header-logo">
                                <Link href="/dashboard">
                                    <Image
                                        src="/assets/images/logo.png"
                                        alt="Logo"
                                        width={250}
                                        height={50}
                                        priority
                                    />
                                </Link>
                            </div>
                            <div className="offcanvas-menu-body d-flex align-items-center gap-0 gap-md-3">
                                <div className="search-bar position-relative d-none d-md-block">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search..." className="form-control" />
                                </div>
                                <div className="admin-text">
                                    <p>
                                        Hello, <span className="admin-name">Admin</span>
                                        <span className="badge">
                                            <i className="fa-solid fa-bell"></i>
                                            <sup className="badge-num">01</sup>
                                        </span>
                                    </p>
                                </div>
                                <button className="toggle-btn" onClick={ToggleHandle}>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`header-bottom ${isOffCanvasShow ? 'show' : ''}`}>
                    <div className="container">
                        <div className="row header-item-row">
                            <div className="offcanvas-menu-body d-flex">
                                <div className="offcanvas-item-body">
                                    <div className="offcanvas-header d-flex align-items-center justify-content-between">
                                        <Link href="/dashboard">
                                            <Image src="/assets/images/logo.png" alt="Logo" height={40} width={80} />
                                        </Link>
                                        <button className="close-btn" onClick={ToggleHandle}>
                                            <i className="fa-regular fa-circle-xmark"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <div className="offcanvas-menu-item menu-items">

                                            <ul>
                                                {/* Home Menu */}
                                                <li className={isActive('/dashboard') ? 'active' : ''}>
                                                    <Link href="/dashboard"><i className="fa-solid fa-house"></i>Home</Link>
                                                </li>

                                                {/* Reports Menu with Submenu */}
                                                <li className={isActive('/reports',
                                                    [
                                                        '/reports/flight-report',
                                                        '/reports/affiliate-click',
                                                        '/reports/common-report',
                                                        '/reports/card-auth-report',
                                                        '/reports/deeplink',
                                                        '/reports/flight-report-history'
                                                    ]) ? 'active' : ''} >
                                                    <Link href="">
                                                        Report <i className="fa-solid fa-angle-down"></i>
                                                    </Link>
                                                    <span className="submenu-items">
                                                        <ul>
                                                            <li
                                                                className={currentPath === '/reports/flight-report' ? 'active' : ''}>
                                                                <Link href="/reports/flight-report">Flight Report</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/hotel' ? 'active' : ''}>
                                                                <Link href="/reports/hotel">Hotel</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/car' ? 'active' : ''}>
                                                                <Link href="/reports/car">Car</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/cruise' ? 'active' : ''}>
                                                                <Link href="/reports/cruise">Cruise</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/affiliate-click' ? 'active' : ''}>
                                                                <Link href="/reports/affiliate-click">Affiliate Click</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/common-report' ? 'active' : ''}>
                                                                <Link href="/reports/common-report">Common Report</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/card-auth-report' ? 'active' : ''}>
                                                                <Link href="/reports/card-auth-report">Card Auth Report</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/deeplink' ? 'active' : ''}>
                                                                <Link href="/reports/deeplink">Deep Link</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/reports/flight-report-history' ? 'active' : ''}>
                                                                <Link href="/reports/flight-report-history">Flight Count</Link>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </li>

                                                {/* Vacation Menu with Submenu */}
                                                <li className={isActive('/manage-vacation', ['/manage-vacation', '/manage-theme', '/map-themes',]) ? 'active' : ''}>
                                                    <Link href="">
                                                        Vacation <i className="fa-solid fa-angle-down"></i>
                                                    </Link>
                                                    <span className="submenu-items">
                                                        <ul>
                                                            <li className={currentPath === '/manage-vacation' ? 'active' : ''}>
                                                                <Link href="/manage-vacation">Manage Vacation</Link>
                                                            </li>
                                                            <li className={currentPath === '/manage-theme' ? 'active' : ''}>
                                                                <Link href="#">Manage Theme</Link>
                                                            </li>
                                                            <li className={currentPath === '/map-themes' ? 'active' : ''}>
                                                                <Link href="#">Map Themes</Link>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </li>

                                                {/* Lead Menu with submenu */}
                                                <li className={isActive('/lead/lead-booking-flight', ['/lead/lead-booking-flight', '/lead/add-lead-and-booking', '/lead/manage-lead']) ? 'active' : ''}>
                                                    <Link href="">
                                                        Lead <i className="fa-solid fa-angle-down"></i>
                                                    </Link>
                                                    <span className="submenu-items">
                                                        <ul>
                                                            <li
                                                                className={currentPath === '/lead/lead-booking-flight' ? 'active' : ''}>
                                                                <Link href="/lead/lead-booking-flight">Search Lead</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/lead/add-lead-and-booking' ? 'active' : ''}>
                                                                <Link href="/lead/add-lead-and-booking">Create Lead Booking</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/lead/manage-lead' ? 'active' : ''}>
                                                                <Link href="/lead/manage-lead">Manage Lead</Link>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </li>
                                                {/* Review Menu */}
                                                <li className={isActive('/review/customer-feedback', ['/review/customer-feedback', '/review/product-review']) ? 'active' : ''}>
                                                    <Link href="">
                                                        Review <i className="fa-solid fa-angle-down"></i>
                                                    </Link>
                                                    <span className="submenu-items">
                                                        <ul>
                                                            <li
                                                                className={currentPath === '/review/customer-feedback' ? 'active' : ''}>
                                                                <Link href="/review/customer-feedback">Customer Feedback</Link>
                                                            </li>
                                                            <li
                                                                className={currentPath === '/review/product-review' ? 'active' : ''}>
                                                                <Link href="/review/product-review">Product Review</Link>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="search-bar position-relative d-block d-md-none mx-2 mx-md-0 mt-3 mt-md-0">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <input type="text" placeholder="Search..." className="form-control" />
                                    </div>
                                </div>
                                <div className="backdrop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
