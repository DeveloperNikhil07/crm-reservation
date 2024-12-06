"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <section className="login-form-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="login-wrapper d-flex align-items-center justify-content-center">
                            <div className="login-card section-title">
                                <Link href="/" className="logo">
                                    <Image src="/assets/images/logo.png" alt="logo" height={40} width={160} priority />
                                </Link>
                                {/* <h2 className='text-center fs-6 xl-line'>Signup</h2> */}
                                <form className="form-wrapper" >
                                    <div className="input-fields">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Full Name" required />
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="my-2 input-fields">
                                        <label htmlFor="email_address" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="email_address" placeholder="Email Address" required />
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="input-fields">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type={!showPassword ? 'password' : 'text'} className="form-control" id="password" placeholder="Enter Password" required />
                                        {showPassword ?(
                                            <i className="fa-solid fa-eye-slash" onClick={togglePasswordVisibility}></i>
                                        ):(
                                        <i className="fa-solid fa-eye" onClick={togglePasswordVisibility}></i>
                                        )}

                                    </div>
                                    <div className="input-fields mt-2 d-flex align-items-center gap-2">
                                        <input type="checkbox" id="all_conditions" />
                                        <label htmlFor="all_conditions">I accept all <Link href="#">terms & condition</Link></label>
                                    </div>
                                    <button type="submit" className="btn login-btn cm-button" id="signup">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
