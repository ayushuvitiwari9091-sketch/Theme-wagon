import React from 'react'
import './CSS/Card.css'

const Card = ({ products }) => {
    
    return (
        <>
            <div className="home-body">

                <img src={products.weblogo} alt="" />

                <div className="button-card">

                    <div>
                        <h2>{products.coursename}</h2>

                        <p>{products.para}</p>

                    </div>

                    <div className="btn">

                        <button>Preview</button>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Card