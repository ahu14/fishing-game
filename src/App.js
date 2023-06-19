import React, {useRef, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";



let Fish = () => {
    let [template, setTemplate] = useState([]);
    let [animate, setAnimate] = useState();
    let [checkBorder, setCheckBorder] = useState();

    let btn = useRef();
    let image = useRef();
    let mainBox = useRef();

    let data = useSelector(state => state.data);
    let score = useSelector(state => state.score);
    let time = useSelector(state => state.time);
    let randTime = useSelector(state => state.randTime);
    let hurricane = useSelector(state => state.hurricane);

    let dispatch = useDispatch();


    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            dispatch({type: 'checkClicked'});
        })

        setInterval(() => dispatch({type: 'addTime'}), 1000);
        dispatch({type: 'randTime'});
    }, []);


    useEffect(() => {
        dispatch({type: 'summonFish'});
        setTemplate(template = data);
    }, [data]);


    useEffect(() => {
        if (time == randTime){
            dispatch({type: 'randTime'});
            dispatch({type: 'hurricaneStatus'});
        }
    }, [time, checkBorder]);


    useEffect(() => {
        let youCanMove = (e) => {
            if (image.current != null){
                let minHeight = window.innerHeight / 100 * 8;
                let yPos = e.pageY < minHeight ? minHeight : e.pageY;
                image.current.style.top = (yPos - 27) + 'px';
                image.current.style.left = (e.pageX - 120) + 'px';
            }
        }

        let startInterval = () => {
            return setInterval(() => {
                if (image.current != null){
                    let left = parseInt(image.current.style.left);
                    left = left > -150 ? left -= 4 : left;
                    image.current.style.left = left + 'px';
                }
            }, 100)
        }

        let stopInterval = () => clearInterval(animate);

        if (hurricane == true && hurricane != null){
            document.body.style.background = '#356fb9';
            document.onmousemove = () => {}

            btn.current.style.display = "block";
            setAnimate(animate = startInterval());
        }

        else {
            document.body.style.background = '#7bb5ff';
            document.onmousemove = (e) => youCanMove(e);
            btn.current.style.display = "none";

            setAnimate(animate = stopInterval());
        }
    }, [hurricane]);


    useEffect(() => {
        let left = parseInt(image.current.style.left);

        if (left < -120 || left > (window.innerWidth - 120)){
            image.current.style.left = left + 'px';
            document.onmousemove = () => {}

            dispatch({type: 'gameOver'});
            document.querySelector('.msg-game-over-box').style.display = "flex";
        }
    }, [time]);


    let clicked = () => {
        let left = parseInt(image.current.style.left) + 10;
        image.current.style.left = left + 'px';
    }

    let refresh = () => window.location.reload();

    return (
        <div ref={mainBox}>
            <div className="top-section">
                <div className="player-status">
                    <h3 id="word">Fish caught: {score}</h3>
                    <h3 id="time">Time : {time}</h3>
                    <h3 id="randTime">{parseInt(randTime - time)}s again when the 
                    storm {hurricane == false ? "comes" : "end"}</h3>
                </div>
            </div>

            <div className="middle-section">
                <div className="side-msg">
                    <div className="fish"></div>
                    <div id="word-msg">+1</div>
                </div>
                
                <div className="image" ref={image}></div>
                {template.map(tem => tem.template)}

                <button className="btn" ref={btn} onClick={clicked}>Click !!</button>

                <div className="msg-game-over-box">
                    <h2 id="msg-game-over">You Lose !</h2>
                    <p id="score">Fish caught : {score}</p>
                    <button className="btn-game-over" 
                    onClick={refresh}>Click to play again</button>
                </div>
            </div>
        </div>
    )
}

let NextUpdate = () => {
    return <p>Next update someday...</p>
}

let App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Fish />} />
                    <Route path="new" element={<NextUpdate />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;