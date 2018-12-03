let time = 60


class Timer {
    
    timeFunction(){
        setInterval(function countdown(){
            
            if(time>=1){
            time=time-1
            let number = document.getElementById("number")
            number.innerHTML=time
            console.log(time)
            }else if(time == 0){
                alert("BOOOMMM!!!!!")
            }else{
                console.log("You successfully disarm the bomb")
            }
            
            
        }, 1000);
    }
}

let startTimer= new Timer();