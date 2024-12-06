import React from 'react'

export default function EditVacation() {
    return (
        <>
            <section className="edit-vacation-wrapper py bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h1>Manage Vacation (Add / Update / Delete)</h1>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-wrapper mt-5">
                                <form action="" className='row'>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="vacation_type">Vacation Type</label>
                                            <select name="" id="vacation_type" className='form-control'>
                                                <option value="">-- Vacation Type --</option>
                                                <option value="">Domestic</option>
                                                <option value="">International</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="select_theme">Select Themes</label>
                                            <select name="" id="select_theme" className='form-control'>
                                                <option value="Select Theme">-- Select Theme --</option>
                                                <option value="Beach">Beach</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-continent' htmlFor="select_continent">Continent</label>
                                            <select name="select-continent" id="select_continent" className='form-control'>
                                                <option value="select">-- Select --</option>
                                                <option value="Africa">Africa</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Asia">Asia</option>
                                                <option value="Europe">Europe</option>
                                                <option value="North America">North America</option>
                                                <option value="Oceania">Oceania</option>
                                                <option value="South America">South America</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="select_country">Country</label>
                                            <select name="" id="select_country" className='form-control'>
                                                <option value="select">-- Select Country --</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
