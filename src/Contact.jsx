import React, { useState } from 'react';
import Footer from './Footer';
const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        mssg: "",
    });

    //inputEvent
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preData) => {
            return {
                ...preData,
                [name]: value,
            };
        });
    }



    //formSubmit
    const formSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent Successfully!');
    }
    return (
        <>
            <h1 style={{ marginTop: "30px", textAlign: "center", fontSize: "28px" }} >Contact Us</h1>
            <div style={{ width: "100%", marginLeft: "350px", marginTop: "30px" }}>
                <div>
                    <div className="row">
                        <div className="col-md-10 col-10- mx-auto">
                            <form onSubmit={formSubmit} action="mailto:muhammadirfan9273@gmail.com">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Your Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={inputEvent} placeholder="your name" style={{ width: "460px" }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Your Email</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Your Email" style={{ width: "460px" }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="mssg" value={data.mssg} onChange={inputEvent} placeholder="Enter Your Message!" rows="2" cols="20" style={{ width: "460px" }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-info btn-sm">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}
export default Contact;