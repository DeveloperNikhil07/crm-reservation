import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content text-center">
                                <p>© 2024 - Reservationcentre LLC
                                    <Link href="#" className="footer-logo">
                                        <Image src="/assets/images/siteseal-img.gif" alt="Brand Image" height={40} width={160} priority />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
