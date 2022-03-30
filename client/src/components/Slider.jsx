import React from 'react'
import './slider.css'
import Flower from '../img/flower-background.jpg'


export const Slider = () => {
    return (
        <div className='slider-container'>
            <div className="slider-wrapper">
                <div className="image-container">
                    <img className='slider-bg' src={Flower}></img>
                </div>
                <div className="info-container">
                    <h1 className='slider-title'>Test Title</h1>
                    <p className='slider-description'>TEST DESCRIPTION!! LIMITED SALE!!</p>
                    <button className='slider-button'>Go!</button>
                </div>
            </div>
        </div>
    )
}
