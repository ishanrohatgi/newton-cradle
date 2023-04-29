function anime(number){
    let pendulum = document.querySelectorAll('.cradle-box .box');
    setInterval(()=>{
        for(let pen=0;pen<5;pen++){
            pendulum[pen].classList.remove('animate-left'); 
            pendulum[pen].classList.remove('animate-right');
        }
       
    for(let pen=0;pen<number;pen++){
                pendulum[pen].classList.add('animate-left');
        }
    setTimeout(()=>{
                for(let pen=0;pen<5;pen++){
                    pendulum[pen].classList.remove('animate-left'); 
                }
                for(let pen = 4;pen>4-number;pen--){
                pendulum[pen].classList.add('animate-right');
            }
    },1000)
    },2000)
    
    
}
