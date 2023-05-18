 import {useEffect, useRef, useState} from "react";
import "./index.css";


let Fish = () => {
    let [score, setScore] = useState(0);
    let [data, setData] = useState([]);
    let [lastClick, setLastClick] = useState();

    let randomNum = (num, length) => Math.floor(Math.random() * (num - length));

    let clicked = (event) => {
        if (lastClick != event.target && lastClick != undefined){
            setData(prev => {
                for (let i = 0; i < prev.length; i++){
                    prev[i].life = 3;
                }

                data = prev;
                return data;
            })

            setLastClick(lastClick = event.target);
        }  
        
        else{
            setLastClick(lastClick = event.target);
        }
        


        let msg = document.querySelector('.side-msg');

        setData(prev => prev.filter(d => {
            if (d.template.key == event.target.id){
                if (d.life > 1){
                    d.life -= 1 ;
                }

                else{
                    setData(prev => prev.filter(d2 => d2.life > 1));
                    setLastClick(lastClick = undefined);
                    setScore(score => score += 1);

                    msg.style.display = 'flex';
                }
            }

            data = prev;
            return data;
        }));

        setTimeout(() => msg.style.display = 'none', 500);
    }

    if (data.length == 0){
        let randomFish = Math.floor(Math.random() * 7 + 1);

        for (let i = 0; i < randomFish; i++){
            setData(prev => prev.concat(...[
                {
                    template: <div className="fish" key={'fish-' + i} id={'fish-' + i}
                    style={{top : randomNum(window.innerHeight, 10) + 'px',
                    left: randomNum(window.innerWidth, 30) + 'px'}} onClick={clicked}></div>,
                    life: 3
                }
            ]));
        }
    }

    return (
        <>
            <h3 id="word">Fish Caught : {score}</h3>
            {data.map(d => d.template)}
        </>
    )
}


let App = () => {
    useEffect(() => {
        let image = document.querySelector('.image');
        
        document.addEventListener('mousemove', (e) => {
            image.style.top = (e.pageY - 27) + 'px';
            image.style.left = (e.pageX - 120) + 'px';
        })
    }, []);

    return (
        <div>
            <div className="side-msg">
                <div className="fish"></div>
                <div id="word-msg">+1</div>
            </div>
            
            <div className="image"></div>
            <Fish />
        </div>
    )
}

export default App;