"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
export default function ForgetPassword() {
    // New password
    const [ViewNewPassword, setViewNewPassword] = useState(false);
    const toggleNewPassPasswordVisibility = () => {
        setViewNewPassword(!ViewNewPassword)
    }
    // Confirm Password
    const [viewConfPassword,setViewConfPassword] = useState(false)
    const toggleConfPasswordVisibility = () => {
        setViewConfPassword(!viewConfPassword)
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
                                <h2 className='text-center fs-6 xl-line'>Change Password</h2>
                                <form className="form-wrapper" >
                                    <div className="input-fields">
                                        <label htmlFor="email_address" className="form-label">Your Email</label>
                                        <input type="email" className="form-control" id="email_address" placeholder="Your Email" required />
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="input-fields my-2">
                                        <label htmlFor="new_password" className="form-label">New Password</label>
                                        <input type={ViewNewPassword ? 'text' : 'password'} className="form-control" id="new_password" placeholder="New Password" required />
                                        {ViewNewPassword ? (<i className="fa-solid fa-eye-slash" onClick={toggleNewPassPasswordVisibility}></i>) :
                                            (<i className="fa-solid fa-eye" onClick={toggleNewPassPasswordVisibility}></i>)}
                                    </div>
                                    <div className="input-fields">
                                        <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                        <input type={viewConfPassword ? 'text' : 'password'} className="form-control" id="confirm_password" placeholder="Confirm Password" required />
                                        {viewConfPassword ? (<i className="fa-solid fa-eye-slash" onClick={toggleConfPasswordVisibility}></i>) :
                                            (<i className="fa-solid fa-eye" onClick={toggleConfPasswordVisibility}></i>)}
                                    </div>
                                    <div className="input-fields mt-2 d-flex align-items-center gap-2">
                                        <input type="checkbox" id="all_conditions" />
                                        <label htmlFor="all_conditions">I accept all <Link href="#">terms & condition</Link></label>
                                    </div>
                                    <button type="submit" className="btn login-btn cm-button" id="signup">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
