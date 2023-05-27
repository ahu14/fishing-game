import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


let App = () => {
    let [template, setTemplate] = useState([]);
    let data = useSelector(state => state.data);
    let score = useSelector(state => state.score);
    let dispatch = useDispatch();

    useEffect(() => {
        let image = document.querySelector('.image');
        
        document.addEventListener('mousemove', (e) => {
            image.style.top = (e.pageY - 27) + 'px';
            image.style.left = (e.pageX - 120) + 'px';
        })

        document.body.addEventListener('click', (event) => {
            dispatch({type: 'checkClicked'});
        })
    }, []);

    useEffect(() => {
        dispatch({type: 'summonFish'});
        setTemplate(template = data);
    }, [data]);

    return (
        <div>
            <div className="side-msg">
                <div className="fish"></div>
                <div id="word-msg">+1</div>
            </div>
            
            <div className="image"></div>
            <h3 id="word">Fish caught: {score}</h3>
            {template.map(tem => tem.template)}
        </div>
    )
}

export default App;