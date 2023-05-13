import {useEffect, useRef, useState} from "react";

let summonFish = (body, data, setData, fish, setFish) => {
    let fishes = [];
    let randomNum = (num) => Math.floor(Math.random() * (num - 40));

    let clicked = (event) => {
        setData(prev => prev.filter(d => d.key != event.target.id));
        setFish(fish += 1);

        let msg = document.querySelector('.side-msg');
        msg.style.display = 'flex';
        msg.innerHTML = "Fish +1";

        setTimeout(() => msg.style.display = 'none', 300);
    }

    for (let i = 0; i < 3; i++){
        fishes.push(
            <div className="fish" key={'fish-' + i} id={'fish-' + i}
            style={{top : randomNum(window.innerHeight) + 'px',
            left: randomNum(window.innerWidth) + 'px'}}
            onClick={clicked}></div>
        );
    }

    return fishes;
}


let App = () => {
    let body = useRef();
    let [data, setData] = useState([]);
    let [fish, setFish] = useState(0);

    useEffect(() => {
        if (data.length < 1){
            setData(data = summonFish(
                body.current, data, setData, fish, setFish
            ));
        }
    }, [data]);


    return (
        <div ref={body}>
            <h3 id="word">Fish Caught : {fish}</h3>
            <div className="side-msg"></div>
            {data}
        </div>
    )
}

export default App;