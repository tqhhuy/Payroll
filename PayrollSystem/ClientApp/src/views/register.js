import React, { Component, useState } from 'react';

function Register(){
    const [page,setpage] = useState(0);
    const [count,setcount] = useState(100/9);
    const [per,setper] = useState("%");
    const [STT,setSTT] = useState("btn btn-danger");
    const [STT2,setSTT2] = useState("btn btn-success");
    const [comAdd,setcomAdd] = useState(false);
    const [comAddstt,setcomAddstt] = useState(false);
    const [addAcc,setaddAcc] = useState(false);
    const [addAccstt,setaddAccstt] = useState(false);
    const [addEMP,setaddEMP] = useState(false);
    const [addEMPstt,setaddEMPstt] = useState(false);
    function onClickComAdd(){
        progress();
        setcomAdd(true);
        setcomAddstt(true);
    }
    function onClickAddAcc(){
        progress();
        setaddAcc(true);
        setaddAccstt(true);
    }
    function onClickAddEMP(){
        progress();
        setaddEMP(true);
        setaddEMPstt(true);
    }
    function progress(){
        let a = page + count;
            setpage(a);
    }
    return(
        <>
        <h6>Progressing : </h6>
        <div className="progress">
            <div className="progress-bar bg-success" style={{width: page +per}}></div>
        </div>
        <div className="list-group list-group-flush">
                    <li className="list-group-item">
                    <button data-toggle="modal" data-target="#CompAddr" type="button" class={comAdd ? STT2:STT}>1.Company's Address</button>
                    </li>
                    <li className="list-group-item">
                    <button data-toggle="modal" data-target="#AddAcc" type="button" class={addAcc ? STT2:STT}>2.Add accountant</button>
                     </li>
                    <li className="list-group-item">
                    <button data-toggle="modal" data-target="#AddEmp" type="button" class={addEMP ? STT2:STT}>3.Add Employee</button>
                    </li>
                    <li className="list-group-item">
                    <button type="button" class={STT}>4.State Tax info</button>
                     </li>
                     <li className="list-group-item">
                    <button type="button" class={STT}>5.Bank Account</button>
                     </li>
                     <li className="list-group-item">
                    <button type="button" class={STT}>6.Pay Schedule</button>
                     </li>
                     <li className="list-group-item">
                    <button type="button" class={STT}>7.Sign documents</button>
                     </li>
                     <li className="list-group-item">
                    <button type="button" class={STT}>8.Workers's comp</button>
                     </li>
                     <li className="list-group-item">
                    <button type="button" class={STT}>9.Choose a plan</button>
                     </li>
                </div>

            {/*Modal*/}
                {/*Company Addresss*/}
                <div className="modal fade" id="CompAddr">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Company's Address</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h3>Add Company Location</h3>
                                <hr></hr>
                                <a>To automate your payroll filings, we need to have your company’s accurate addresses. Please take a minute and enter them below.</a><br></br>
                                <strong>Street :</strong>
                                <input type="text" className="form-control form-control" placeholder="Street..."></input>
                                <strong>City :</strong>
                                <input type="text" className="form-control form-control" placeholder="City..."></input>
                                <strong>District :</strong>
                                <input type="text" className="form-control form-control" placeholder="District..."></input>
                                <strong>ZIP :</strong>
                                <input type="text" className="form-control form-control" placeholder="ZIP..."></input>
                                <strong>Phone number :</strong>
                                <input type="text" className="form-control form-control" placeholder="Phone..."></input>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => 
                                    comAddstt === false &&
                                setpage(onClickComAdd)
                                }>
                                    DONE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Add accountant*/}
                <div className="modal fade" id="AddAcc">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Company's Address</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h3>Added your accountant or bookkeeper</h3>
                                <hr></hr><a>To automate your payroll filings, we need to have your company’s accurate addresses. Please take a minute and enter them below.</a><br></br>
                                <strong>First name :</strong>
                                <input type="text" className="form-control form-control" placeholder="First name..."></input>
                                <strong>Last Name :</strong>
                                <input type="text" className="form-control form-control" placeholder="Last Name..."></input>
                                <strong>Email :</strong>
                                <input type="text" className="form-control form-control" placeholder="Email..."></input>
                                <strong>Phone :</strong>
                                <input type="text" className="form-control form-control" placeholder="Phone..."></input>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => 
                                    addAccstt === false &&
                                setpage(onClickAddAcc)
                                }>
                                    DONE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Add Employee*/}
                <div className="modal fade" id="AddEmp">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h3>Create employee profile</h3>
                                <hr></hr>
                                <strong>First name :</strong>
                                <input type="text" className="form-control form-control" placeholder="First name..."></input>
                                <strong>Last Name :</strong>
                                <input type="text" className="form-control form-control" placeholder="Last Name..."></input>
                                <strong>Start date :</strong>
                                <input type="date" className="form-control form-control" placeholder="- Select date -"></input>
                                <strong>Department: </strong>
                                <select className="form-control form-control">
                                    <option>Dep 1</option>
                                    <option>Dep 2</option>
                                    <option>Dep 3</option>
                                </select>
                                <strong>Mangager: </strong>
                                <input type="text" className="form-control form-control" placeholder="Manager..."></input>
                                <strong>Work Address: </strong>
                                <select className="form-control form-control">
                                    <option>**Company address**</option>
                                    <option>WFH</option>
                                </select>
                                <strong>Personal Email :</strong>
                                <input type="text" className="form-control form-control" placeholder="Personal Email ..."></input>
                                <strong>Phone :</strong>
                                <input type="text" className="form-control form-control" placeholder="Phone..."></input>
                                <strong>Compensation</strong>
                                <strong>Job title</strong>
                                <input type="text" className="form-control form-control" placeholder="Job title ..."></input>
                                <strong>Employee type: </strong>
                                <select className="form-control form-control">
                                    <option selected disabled>- Select type -</option>
                                    <option>Salary</option>
                                    <option>Paid by the hour</option>
                                </select>
                                <strong>Amount</strong>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                </div>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                                </div>
                                <strong>Per: </strong>
                                <select className="form-control form-control">
                                    <option selected disabled>- Select time period -</option>
                                    <option>Hour</option>
                                    <option>Week</option>
                                    <option>Month</option>
                                    <option>Year</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => 
                                    addEMPstt === false &&
                                setpage(onClickAddEMP)
                                }>
                                    DONE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                { /*State Tax info*/}
                <div className="modal fade" id="CompAddr">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">State Tax info</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h3>Add Company Location</h3>
                                <hr></hr>
                                <a>To automate your payroll filings, we need to have your company’s accurate addresses. Please take a minute and enter them below.</a><br></br>
                                <strong>Street :</strong>
                                <input type="text" className="form-control form-control" placeholder="Street..."></input>
                                <strong>City :</strong>
                                <input type="text" className="form-control form-control" placeholder="City..."></input>
                                <strong>District :</strong>
                                <input type="text" className="form-control form-control" placeholder="District..."></input>
                                <strong>ZIP :</strong>
                                <input type="text" className="form-control form-control" placeholder="ZIP..."></input>
                                <strong>Phone number :</strong>
                                <input type="text" className="form-control form-control" placeholder="Phone..."></input>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => 
                                    comAddstt === false &&
                                setpage(onClickComAdd)
                                }>
                                    DONE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            {/*End modal*/}
        </>
    );
};
export default Register