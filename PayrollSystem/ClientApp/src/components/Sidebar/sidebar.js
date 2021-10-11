import React, { Component, useState } from "react";
import { NavLink } from 'reactstrap';
import { GrContactInfo, GrEdit, GrUserSettings, GrContact } from 'react-icons/gr'
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

function Sidebar(props) {
    const [isCollapse, setIsCollapse] = useState(false);

    return (

        <><nav id="sidebar">
            <div className="sidebar-header">
                <h3>Payroll System</h3>
            </div>
            <div className="user">
                <div className="navbar">
                    <img className="avatar" alt="tets" src="https://www.w3schools.com/howto/img_avatar.png"></img>
                    <a
                        className={isCollapse ? "collapsed" : ""}
                        data-toggle="collapse"
                        href="#infor"
                        onClick={() => setIsCollapse(!isCollapse)}
                    >
                        <span className="text-left">{props.dataFromParent}</span>
                        <i className="arrow down"></i>
                    </a>
                    <div className={isCollapse ? "content-parent show" : "content-parent"}>
                        <div className="content">
                            <IconContext.Provider value={{ color: "white", size: "1.4em" }}>
                                <div className="list-group list-group-flush">
                                    
                                    <li className="list-group-item">
                                        <NavLink tag={Link} className="text-light" to="/profile"><AiIcons.AiFillProfile /> Profile</NavLink>
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink tag={Link} className="text-light" to="/register"><AiIcons.AiFillProfile /> Register</NavLink>
                                    </li>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <div className="list-group">
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/home"><AiIcons.AiFillHome /> Home</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/people"><AiIcons.AiFillProfile /> People</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/run-payrolss"><FaIcons.FaMoneyBillWave /> Run Paroll</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/taxes"><FaIcons.FaMoneyBillWaveAlt /> Taxes</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/benefits"><AiIcons.AiOutlineHeart /> Benefits</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink tag={Link} className="text-light" to="/reports"><AiIcons.AiFillBook/> Reports</NavLink>
                    </li>
                  
                </div>
            </IconContext.Provider>
        </nav>
        </>
    );

};
export default Sidebar