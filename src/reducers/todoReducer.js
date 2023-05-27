let initialState = {
    score: 0,
    data: [],
    lastClick: ''
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
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
                score: state.score, 
                data: state.data,
                lastClick: state.lastClick
            };


        case 'summonFish':
            if (state.data.length == 0){
                let randomNum = (num, length) => Math.floor(Math.random() * (num - length));
                let random = Math.floor(Math.random() * 7 + 1);

                for (let i = 0; i < random; i++){
                    state.data.push({
                        template: <div className="fish" key={'fish-' + i} id={'fish-' + i}
                        style={{top : randomNum(window.innerHeight, 10) + 'px',
                        left: randomNum(window.innerWidth, 30) + 'px'}}></div>,
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