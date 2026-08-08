import React from 'react'
import './CSS/Card.css'

const Card = ({ id, coursename , weblogo , para  }) => {
    return (
        <>
            <div className="home-body">

                <img src={weblogo} alt="" />

                <div className="button-card">

                    <div>
                        <h2>{coursename}</h2>

                        <p>{para}</p>

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