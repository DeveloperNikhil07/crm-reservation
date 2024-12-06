"use client";
import React, { useEffect, useState } from "react";
import SearchFromDate from "../../components/searchFromDate/SearchFromDate";
import SearchToDate from "../../components/searchToDate/SearchToDate";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";

DataTable.use(DT);

export default function ManageLead() {

 
  return (
    <>
      <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center py">
                <h1>Manage Lead</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-wrapper">
                <form action="" method='post' className="row">
                  <div className="col-12 col-md-3 mt-3 mt-md-0">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="booking_refer">Booking Reference</label>
                      <input type="text" className='form-control' id='booking_refer' placeholder='Enter Booking Reference' name='bookingRef' />
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="call_type">Call Type</label>
                      <input type="phone" name='callType' className='form-control' id='call_type' placeholder='Enter Call Type' />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3 mt-md-0">
                    <div className='form-fields'>
                      <SearchFromDate label="From Date" />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3 mt-md-0">
                    <div className='form-fields'>
                      <SearchToDate label="To Date" />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="caller_name">Caller Name</label>
                      <input type="text" name='callerName' className='form-control' id='caller_name' placeholder='Enter Caller Name' />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="caller_email">Caller Email</label>
                      <input type="email" name='callerEmail' className='form-control' id='caller_email' placeholder='Enter Caller Email' />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="phone_number">Phone Number</label>
                      <input type="phone" name='phoneNumber' className='form-control' id='phone_number' placeholder='Enter Phone Number' />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-3">
                    <div className='form-fields'>
                      <label className='form-label' htmlFor="lead_status">Lead Status</label>
                      <input type="phone" name='leadStatus' className='form-control' id='lead_status' placeholder='Enter Lead Status' />
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
      {/* Table start */}
      <section className="agent-activity-wrap pb">
        <div className="container-fluid">
          <div className="row">
            <div className="user-login-data-wrap booking-report-table">
              {/* <DataTable data={demoData} columns={LeadDataTable}
                options={{
                  paging: true,
                  searching: true,
                  ordering: false,
                  responsive: true
                }} className="display">
              </DataTable> */}
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
