import React from 'react'

export default function LandingPageBanner({heading = ""}) {
    return (
        <>
            <section className="homepage-wrapper landingpage-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title banner-content">
                                <h1 className="text-white">{heading}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
