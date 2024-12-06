"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
export default function ProductReview() {
    const [searchFromDate, setSearchFormDate] = useState(null);
    const [searchToDate, setSearchToDate] = useState(null);
    const SearchDateHandle = (date) => {
        setSearchFormDate(date)
    }
    const SearchToDateHandle = (date) => {
        setSearchToDate(date);
    }
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Product Reviews</h1>
                                <p className="text-end"><a href="#">Add New Review</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row justify-content-center">
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="product_review">Product Review</label>
                                            <select name="Domain" id="product_review" className='form-control'>
                                                <option value="Lead type">-- Select Product Review --</option>
                                                <option value="Google Review">Google Review</option>
                                                <option value="Trust Pilot">Trust Pilot</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="website_name">Website Name</label>
                                            <select name="websiteName" id="" className="form-control">
                                                <option value="">-- Select Website --</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="email">Email</label>
                                            <input type="email" className='form-control' name="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="product_review">Rating</label>
                                            <select name="Domain" id="product_review" className='form-control'>
                                                <option value="">-- Select Product Rating --</option>
                                                <option value="5">5</option>
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="search_from_date">Search From Date</label>
                                            <DatePicker selected={searchFromDate} id="search_form_date" onChange={SearchDateHandle} className="form-control" placeholderText="Select Date" dateFormat="YYYY MMM d" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="search_to_date">Search To Date</label>
                                            <DatePicker selected={searchToDate} id="search_to_date" onChange={SearchToDateHandle} className="form-control" placeholderText="Select Date" dateFormat="YYYY MMM d" />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="cm-button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="user-login-data-wrap mt-3 product-review-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Website Name</th>
                                        <th>Review Type</th>
                                        <th>Rating</th>
                                        <th>Review Submit Date</th>
                                        {/* <th>Review Description</th> */}
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Active/Deactive</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className='cm-button w-auto mt-0'>Active Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
