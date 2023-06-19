let initialState = {
    score: 0,
    data: [],
    lastClick: '',
    time: 0,
    randTime: null,
    hurricane: false,
    lose: false
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTime':
            return {...state, time: state.time += 1 };

        case 'randTime':
            return {
                ...state,
                randTime: state.randTime == null ? 10 : state.randTime += 10
            }

        case 'hurricaneStatus':
            return {
                ...state, 
                hurricane: state.hurricane == false ? true : false
            }

        case 'gameOver':
            return {...state, hurricane: null, time: null, randTime: null, lose: true}



        case 'checkClicked':
            if (state.lastClick == ''){
                state.lastClick = event.target;
            }

            else{
                for (let i = 0; i < state.data.length; i++){
                    if (event.target.id == state.data[i].template.key){
                        if (state.data[i].life < 1){
                            state.data = state.data.filter(d => d.life > 1);
                            state.score += 1;
                            state.lastClick = '';

                            let msg = document.querySelector('.side-msg');
                            msg.style.display = 'flex';
                            setTimeout(() => msg.style.display = 'none', 500);
                        }
                        
                        else{
                            state.data[i].life -= 1;
                            state.lastClick = event.target;
                        }
                    }

                    else{
                        state.data[i].life = 3
                        state.lastClick = event.target;
                    }
                }
            }

            return {
                ...state,
                score: state.score, 
                data: state.data,
                lastClick: state.lastClick
            }


        case 'summonFish':
            if (state.data.length == 0){
                let randomNum = (num, minimum = 0, length) => {
                    let random = Math.floor(Math.random() * (num - length))
                    return random < minimum ? random + minimum : random;
                };

                let minHeight = window.innerHeight / 100 * 8;
                let random = Math.floor(Math.random() * 7 + 1);

                for (let i = 0; i < random; i++){
                    state.data.push({
                        template: <div className="fish" key={'fish-' + i} id={'fish-' + i}
                        style={{top : randomNum(window.innerHeight, minHeight, 10) + 'px',
                        left: randomNum(window.innerWidth, 0, 30) + 'px'}}></div>,
                        life: 3
                    })
                }

                return {...state, data: state.data};
            }
    
        default:
            return state;
    }
} 

export default reducer;