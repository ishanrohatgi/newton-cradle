let intervel;
let timeout;
function anime(number){
    let pendulum = document.querySelectorAll('.cradle-box .box');
    if(timeout){
        clearTimeout(timeout);
        for(let pen=0;pen<5;pen++){
            pendulum[pen].classList.remove('animate-left'); 
            pendulum[pen].classList.remove('animate-right');
        }
    }
    if(intervel){
        clearInterval(intervel);
        for(let pen=0;pen<5;pen++){
            pendulum[pen].classList.remove('animate-left'); 
            pendulum[pen].classList.remove('animate-right');
        }
    }
    intervel=setInterval(()=>{
        for(let pen=0;pen<5;pen++){
            pendulum[pen].classList.remove('animate-left'); 
            pendulum[pen].classList.remove('animate-right');
        }
       
    for(let pen=0;pen<number;pen++){
                pendulum[pen].classList.add('animate-left');
        }
    timeout=setTimeout(()=>{
                for(let pen=0;pen<5;pen++){
                    pendulum[pen].classList.remove('animate-left'); 
                }
                for(let pen = 4;pen>4-number;pen--){
                pendulum[pen].classList.add('animate-right');
            }
    },750)
    },1500)
    
    
}
