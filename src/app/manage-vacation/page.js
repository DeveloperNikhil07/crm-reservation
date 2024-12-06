import Link from 'next/link'
export default function ManageVacation() {
    return (
        <>
            <section className="manage-vacation-wrapp bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Manage Vacation (Add / Update / Delete)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row pb">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form className='row justify-content-center'>
                                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="enter_vacation_code">Enter Vacation Code</label>
                                            <input type="text" id='enter_vacation_code' className="form-control" placeholder='Enter Vacation Code' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="vacation_type">Vacation Type</label>
                                            <select name="" id="vacation_type" className='form-control'>
                                                <option value="">-- Vacation Type --</option>
                                                <option value="">Domestic</option>
                                                <option value="">International</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="theme_name">Theme Name</label>
                                            <select name="" id="theme_name" className='form-control'>
                                                <option value="">-- Theme Name --</option>
                                                <option value="">Beach</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                                        <div className='form-fields'>
                                            <Link href="/manage-vacation/edit-vacation" className='cm-button mt-4'>Add New Vacation</Link>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                                        <div className='form-fields'>
                                            <button className='cm-button mt-4' type='button'>Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='vacation-table pb bg-gray pb'>
                <div className="container-fluid">
                    <table className='mt-0'>
                        <thead>
                            <tr>
                                <th>Vacation Code</th>
                                <th>Vacation Type</th>
                                <th>Theme Name</th>
                                <th>Package Name</th>
                                <th>Display Order</th>
                                <th>Flight + Hotel</th>
                                <th>Active</th>
                                <th>Map Vacation</th>
                                <th>View Demo</th>
                                <th>Edit Master</th>
                                <th>Edit Itinerary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RES0001</td>
                                <td>Domestic</td>
                                <td>Beach</td>
                                <td>Orlando Vacation Package</td>
                                <td>0</td>
                                <td>False</td>
                                <td>True</td>
                                <td><a href="#">Map Vacation</a></td>
                                <td><a href="#">View Demo</a></td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Edit Detail</a></td>
                            </tr>
                            <tr>
                                <td>RES0001</td>
                                <td>Domestic</td>
                                <td>Beach</td>
                                <td>Orlando Vacation Package</td>
                                <td>0</td>
                                <td>False</td>
                                <td>True</td>
                                <td><a href="#">Map Vacation</a></td>
                                <td><a href="#">View Demo</a></td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Edit Detail</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
