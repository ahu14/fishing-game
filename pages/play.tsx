import React, {useRef, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/Fish.module.css";


export default function Fish(){
    let [template, setTemplate] = useState<any>();
    let [animate, setAnimate] = useState<any>();
    let [checkBorder, setCheckBorder] = useState<any>();

    let btn:any = useRef();
    let image:any = useRef();
    let mainBox:any = useRef();

    let data = useSelector((state:any) => state);
    let score = useSelector((state:any) => state.score);
    let time = useSelector((state:any) => state.time);
    let randTime = useSelector((state:any) => state.randTime);
    let hurricane = useSelector((state:any) => state.hurricane);

    let dispatch = useDispatch();


    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            dispatch({type: 'checkClicked'});
        })
    }, []);

    useEffect(() => {
        if (hurricane == true){
            setTemplate(template = data.data);
        }
        
        if (template != undefined && template.length > 0){
            dispatch({type: 'summonFish'});
            setTemplate(template = data.data);
        }
    }, [data]);


    useEffect(() => {
        if (time == randTime){
            dispatch({type: 'randTime'});
            dispatch({type: 'hurricaneStatus'});
        }
    }, [time, checkBorder]);

    useEffect(() => {
        let youCanMove = (e:any) => {
            if (image.current != null){
                let minHeight = window.innerHeight / 100 * 8.5;
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
            dispatch({type: 'addRepetition'});
            dispatch({type: 'clearFish'});

            mainBox.current.style.background = '#356fb9';
            document.onmousemove = () => {}

            btn.current.style.display = "block";
            setAnimate(animate = startInterval());
        }

        else{ 
            dispatch({type: 'summonFish'});
            mainBox.current.style.background = '#7bb5ff';
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
            dispatch({type: 'clearFish'});

            let box:any = document.querySelector('#msg-game-over-box');
            box.style.display = "flex";
        }
    }, [time]);


    let clicked = (e:any) => {
        let left = parseInt(image.current.style.left) + 10;
        image.current.style.left = left + 'px';        
    }

    let refresh = () => window.location.reload();

    let start = (e:any) => {
        setInterval(() => {
            dispatch({type: 'addTime'});
        }, 1000);

        dispatch({type: 'summonFish'});
        setTemplate(template = data.data);

        dispatch({type: 'randTime'});
        e.target.remove();
    }

    return (
        <div ref={mainBox} className={styles.body}>
            <div className={styles.topSection}>
                <div className={styles.playerStatus}>
                    <h3 id={styles.word}>Fish caught: {score}</h3>
                    <h3><span id={styles.randTime}>{parseInt(`${randTime - time}`)}s</span> again 
                    when the storm {hurricane == false ? "comes" : "end"}</h3>
                </div>
            </div>

            <div className={styles.middleSection} key="middle-section">
                <div className={styles.sideMsg} id="side-msg">
                    <div className={styles.fish}></div>
                    <div id={styles.wordMsg}>+1</div>
                </div>
                
                <div className={styles.image} ref={image}></div>
                
                <div id="wrapper-box">
                    {template != undefined ? template.map((tem:any) => tem.template): null}
                </div>

                <button className={styles.startBtn} onClick={start}>start</button>
                <button className={styles.btn} ref={btn} onClick={clicked}>Click !!</button>

                <div className={styles.msgGameOverBox} id="msg-game-over-box">
                    <h1 id={styles.msgGameOver}>You Lose !</h1>
                    <p id={styles.score}>Fish caught : {score}</p>
                    <button className={styles.btnGameOver} 
                    onClick={refresh}>Click to play again</button>
                </div>
            </div>
        </div>
    )
}