import React from 'react'
import './Slider.css'

export default props =>
    <div className="slide">
        <img className="image" src={props.src} alt="" />
        <div className="description">
            <strong className="title">{props.title}</strong>
            <p className="text-description">{props.text}</p>
        </div>
        <div className="footer">
            {props.children}
        </div>
    </div>