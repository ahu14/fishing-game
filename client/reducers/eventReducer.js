let eventReducer = (state, action) => {
    switch (action.type) {
        case 'addTime':
            state.time += 1;
            return {...state, time: state.time}

        case 'setWaves':
            state.strongWaves = state.strongWaves == true ? false : true;
            let btn = document.querySelector('.btn');

            let startInterval = () => {
                return setInterval(function(){
                    let image = document.querySelector('.image');
                    let minus;

                    minus = parseInt(image.style.left) < -120 
                        ? parseInt(image.style.left)
                        : parseInt(image.style.left) - 4

                    image.style.left = minus + 'px';
                    console.log(image.style.left);
                }, 100);
            }

            let stopInterval = () => clearInterval(state.animate);


            if (state.strongWaves == true){
                document.body.style.background = '#356fb9';
                document.removeEventListener('mousemove', state.moveMouse);
                btn.style.display = 'block';
                btn.onClick = () => {
                    let image = document.querySelector('.image');
                    image.style.left = (parseInt(image.style.left) + 8) + 'px';
                }

                state.animate = startInterval();
            }

            else{
                document.body.style.background = '#7bb5ff';
                btn.style.display = 'none';
                document.addEventListener('mousemove', state.moveMouse);
                stopInterval();
            }

            return {...state, strongWaves: state.strongWaves}

        case 'setRandTime':
            let rand = Math.floor(Math.random() * 20);
    
            if (state.randTime == null){
                state.randTime = rand < 10 ? rand + 10: rand;
            }
    
            else{
                let newTime = rand < 10 ? rand + 10: rand;
                state.randTime += newTime;
            }
    
            return {...state, randTime: state.randTime}
    
        default:
            return state;
    }
}

export default eventReducer;