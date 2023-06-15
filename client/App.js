import React, {useRef, useState, useEffect, useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
import eventReducer from "./reducers/eventReducer";



let Fish = () => {
    let [template, setTemplate] = useState([]);
    let [time, setTime] = useState(0);

    let btn = useRef();
    let image = useRef();

    let data = useSelector(state => state.data);
    let score = useSelector(state => state.score);
    let dispatch = useDispatch();

    let [eventState, eventDispatch] = useReducer(eventReducer, {
        randTime: null,
        strongWaves: false,
        moveMouse: (e) => {
            let minHeight = window.innerHeight / 100 * 8;
            let yPos = e.pageY < minHeight ? minHeight : e.pageY;
            image.current.style.top = (yPos - 27) + 'px';
            image.current.style.left = (e.pageX - 120) + 'px';
        },
        animate: null
    })


    useEffect(() => {
        if (eventState.randTime == null){
            eventDispatch({type: 'setRandTime'});
        }

        if (time == eventState.randTime && eventState.randTime != null){
            eventDispatch({type: 'setWaves'});
            eventDispatch({type: 'setRandTime'});
        }
    }, [time, eventState]);


    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            dispatch({type: 'checkClicked'});
        })
        document.addEventListener('mousemove', eventState.moveMouse);

        setInterval(() => setTime(time += 1), 1000);
    }, []);


    useEffect(() => {
        dispatch({type: 'summonFish'});
        setTemplate(template = data);
    }, [data]);


    return (
        <>
            <div className="top-section">
                <div className="player-status">
                    <h3 id="word">Fish caught: {score}</h3>
                    <h3 id="time">Time : {time}</h3>
                    <h3 id="anticipate">
                        Strom will {eventState.strongWaves == true ? "end": "start"} 
                         at {eventState.randTime - time} seconds
                    </h3>
                </div>
            </div>

            <div className="middle-section">
                <div className="side-msg">
                    <div className="fish"></div>
                    <div id="word-msg">+1</div>
                </div>
                
                <div className="image" ref={image}></div>
                {template.map(tem => tem.template)}

                <button className="btn" ref={btn}>Click !!</button>
            </div>
        </>
    )
}

/*let Login = () => {
    let submitted = () => {
        console.log('yeshh');
    }

    return (
        <form className="form-box" onSubmit={submitted}>
            <label htmlFor="name">Name :</label>
            <input id="name" />
            <button type="submit">Submit</button>
        </form>
    )
}*/

/*let App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Fish />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}*/

export default Fish;