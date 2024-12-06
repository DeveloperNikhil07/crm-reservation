import React from 'react'

export default function TotalReportEnteryCounter({ count, filterCount }) {
    return (
        <>
            <div className="total-row text-center">
                <p>Showing <span className='current-data'>{filterCount}</span> of <span className='all-entery'>{count}</span> Entery</p>
            </div>
        </>
    )
}
