import styles from "@/styles/Fish.module.css";

let initialState = {
    score: 0,
    data: [],
    copyData: null,
    lastClick: '',
    time: 0,
    randTime: null,
    hurricane: false,
    lose: false,
    repetition: 0
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addRepetition':
            return {...state, repetition: state.repetition += 1}

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
            
        case 'clearFish':
            return {...state, data: []}

        case 'gameOver':
            return {...state, hurricane: null, time: null, randTime: null, lose: true}



        case 'checkClicked':
            if (state.lastClick == ''){
                state.lastClick = event.target.id;
                return {...state, lastClick: state.lastClick}
            }

            else{
                if (state.lastClick == event.target.id){
                    for (let i = 0; i < state.data.length; i++){
                        if (event.target.id == state.data[i].template.key){
                            if (state.data[i].life < 1){
                                state.data = state.data.filter(d => d.life >= 1);
                                state.score += 1;
                                state.lastClick = '';
    
                                let msg = document.querySelector('#side-msg');
                                msg.style.display = 'flex';
                                setTimeout(() => msg.style.display = 'none', 500);
                            }
                            
                            else{
                                state.data[i].life -= 1;
                                state.lastClick = event.target.id;
                            }
                        }
                    }
                }

                else{
                    for (let i = 0; i < state.copyData.length; i++){
                        if (state.data[i] != undefined){
                            state.data[i].life = state.copyData[i].life;
                        }
                    }

                    state.lastClick = event.target.id;
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
                    let randomLife = Math.floor(Math.random() * 5);

                    state.data.push({
                        template: <div className={randomLife % 2 == 0 ? styles.fish : styles.enemyFish} key={'fish-' + i} id={'fish-' + i} 
                        style={{top : randomNum(window.innerHeight, minHeight, 35) + 'px',
                        left: randomNum(window.innerWidth, 0, 35) + 'px'}}></div>,
                        life: randomLife < 2 ? randomLife + 2 : randomLife
                    })
                }

                state.copyData = JSON.parse(JSON.stringify(state.data));
                return {...state, data: state.data, copyData: state.copyData};
            }
    
        default:
            return state;
    }
} 

export default reducer;