import React from 'react';
import Card from './Card';
import CardDetail from './CardDetail';
import { NavLink } from 'react-router-dom';
const Services = () => {
    return (
        <>
            <h1 style={{ marginTop: "0px", textAlign: "center", fontSize: "28px" }} >Our Services</h1>
            <div>
                <div>
                    <div class="container">
                        <div class="row gy-4">
                            {
                                CardDetail.map((value, index) => {
                                    return <Card
                                        key={index}
                                        imgSrc={value.imgSrc}
                                        title={value.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;