"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  // @ts-ignore
  const handleLogin = async (e) => {
    e.preventDefault();

    // Example: Basic validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Replace this with your actual authentication API call
    if (username === "Nikhil" && password === "1234") {
      // Redirect to another page upon success
      router.push("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };
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
                {/* <h2 className='text-center fs-6 xl-line'>Login</h2> */}
                <form className="form-wrapper" onSubmit={handleLogin}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="input-fields">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="input-fields my-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type={!showPassword ? "password" : "text"} className="form-control" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash" onClick={togglePasswordVisibility}></i>
                    ) : (
                      <i className="fa-solid fa-eye" onClick={togglePasswordVisibility}></i>
                    )}
                  </div>
                  <button type="submit" className="btn login-btn cm-button">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
