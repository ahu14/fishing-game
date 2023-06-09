import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
//import handleSubmit from "./firebase/testdb";


let Fish = () => {
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

let Home = () => {
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
}

let App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="fish" element={<Fish />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;