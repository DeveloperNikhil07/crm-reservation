import React from 'react'

export default function AddLeadAndBooking() {
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Add Lead/New Booking</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row">
                                    {/* Display first 8 fields */}
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="domain_name">Domain</label>
                                            <select name="Domain" id="domain_name" className='form-control'>
                                                <option value="">-- Select Domain --</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="call_type">Call Type</label>
                                            <select name="Domain" id="call_type" className='form-control'>
                                                <option value="">-- Select Call Type --</option>
                                                <option value="Outbound">Outbound</option>
                                                <option value="Inbound">Inbound</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="phone_number">Phone Number</label>
                                            <input type="phone" className='form-control' id='phone_number' placeholder='Enter Phone Number' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="caller_name">Caller Name</label>
                                            <input type="text" className='form-control' id='caller_name' placeholder='Enter Caller Name' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="caller_email">Caller Email</label>
                                            <input type="email" className='form-control' id='caller_email' placeholder='Enter Caller Email' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="airline_code">Airline Code</label>
                                            <input type="text" className='form-control' id='airline_code' placeholder='Enter Airline Code' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="quer_type">Query Type</label>
                                            <select name="Domain" id="quer_type" className='form-control'>
                                                <option value="">-- Select Query Type --</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="lead_status">Lead Status</label>
                                            <select name="Domain" id="lead_status" className='form-control'>
                                                <option value="Lead type">-- Select Lead type --</option>
                                                <option value="Closed">Closed</option>
                                                <option value="Converted">Converted</option>
                                                <option value="Pending Follow Up">Pending Follow Up</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="pnr">PNR</label>
                                            <textarea className='form-control' id='pnr' placeholder='Enter PNR Details...' ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="comment_remarks">Comment/Remarks</label>
                                            <textarea className='form-control' id='comment_remarks' placeholder='Write Remarks...' ></textarea>
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
