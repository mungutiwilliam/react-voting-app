import React from "react";
import './card-style.css';
import { useState } from 'react';




    const Card = (props) =>{

    

        return(
            <div className="bg-dark card text-center">
                    <div className="card-body text-white">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text text-danger">
                            Please Select One Candidate
                        </p>      
                    </div>
            </div>
        );
    }


export default Card;
