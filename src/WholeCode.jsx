import React from 'react';
import { NavLink } from 'react-router-dom';
//Home Page Coding
const WholeCode = (props) => {
    return (
        <>
            <div>
                <section>
                    <div className="row">
                        <div className="col-5">
                            <div className="content">
                                <h2 className="mainHeadng">{props.mainHeading}
                                    <br />
                                    <span className="irfan_Span"> {props.name} </span></h2>
                                <p className="secondHeading">{props.secondParagraph}</p>
                                <NavLink to={props.btnClickingVisit} className="btn btn-outline-info getStartedBtn" style={{ width: "90px", fontSize: "12px", borderRadius: "50px" }}>{props.btnText}</NavLink>
                            </div>
                        </div>
                        <div className="col-6">
                            <img style={{ width: "100%", marginTop: "80px" }} src={props.imgsrc}></img>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}
export default WholeCode;