"use client";
import SearchFromDate from "../../components/searchFromDate/SearchFromDate";
import SearchToDate from "../../components/searchToDate/SearchToDate";
export default function DeepLink() {
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Create Your Deeplink</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row">
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="domain_name">Domain Name:(with https/http)</label>
                                            <input type="text" className="form-control" id="domain_name" placeholder="Enter Domain Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="affiliate_name">Affiliate Name</label>
                                            <input type="text" className="form-control" id="affiliate_name" placeholder="Enter Affiliate Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="fly_from">Fly From</label>
                                            <input type="text" className="form-control" id="fly_from" placeholder="Enter Fly From" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="fly_to">Fly To</label>
                                            <input type="text" className="form-control" id="fly_to" placeholder="Enter Fly To" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="trip_type">Trip Type</label>
                                            <select name="trip-type" id="trip_type" className="form-control">
                                                <option value="select">-- Select --</option>
                                                <option value="One Way">One Way</option>
                                                <option value="Round Way">Round Way</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="trip_type">Class</label>
                                            <select name="trip-type" id="trip_type" className="form-control">
                                                <option value="select">-- Select Class --</option>
                                                <option value="Economy">Economy</option>
                                                <option value="Premium Economy">Premium Economy</option>
                                                <option value="Business">Business</option>
                                                <option value="First">First</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="prefer_airline">Prefer Airline</label>
                                            <input type="text" className="form-control" id="prefer_airline" placeholder="Enter Prefer Airline" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="adult_num">Adult</label>
                                            <input type="text" className="form-control" id="adult_num" placeholder="Enter Adult Num" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="child_num">Child</label>
                                            <input type="text" className="form-control" id="child_num" placeholder="Enter Child Num" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <label className="form-label" htmlFor="infant_num">Infant</label>
                                            <input type="text" className="form-control" id="infant_num" placeholder="Enter Infant Num" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <SearchFromDate/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <SearchToDate/>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="cm-button">Submit</button>
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
