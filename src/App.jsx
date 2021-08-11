import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import Nav from './components/Navegation'
import SeeMore from './components/SeeMore'
import Slider from './components/Slider'

export default () =>
<div className="main">
    <button className="arrow">❮</button>
    <div id="slide">
        <Slider src="https://i.redd.it/6vdxzv1bqlx41.png" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
        <Nav/></Slider>
        <Slider src="https://i.pinimg.com/564x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
                <SeeMore/>
            </Slider>
        <Slider src="https://i.pinimg.com/originals/3a/60/b2/3a60b2d1d4b3e848611e7a0b69eeaecf.jpg" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
                <SeeMore/>
            </Slider>
        <Slider src="https://i.pinimg.com/originals/3a/60/b2/3a60b2d1d4b3e848611e7a0b69eeaecf.jpg" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
            <SeeMore/>
        </Slider>
        <Slider src="https://i.pinimg.com/originals/3a/60/b2/3a60b2d1d4b3e848611e7a0b69eeaecf.jpg" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
            <SeeMore/>
        </Slider>
        <Slider src="https://i.pinimg.com/originals/3a/60/b2/3a60b2d1d4b3e848611e7a0b69eeaecf.jpg" title="Title" text="Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quia, ratione nihil
                 asperiores soluta quae adipisci aliquid
                 molestias architecto minus odit aut sint
                 sunt est exercitationem ad at
                 consequuntur dolorem alias!">
            <SeeMore/>
        </Slider>
    </div>
        <button className="arrow" onClick={()=>document.getElementsByClassName("slide").style.color='red'}>❯</button>
</div>