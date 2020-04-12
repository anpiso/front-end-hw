let count = 0;

let timer = setInterval(function (msg){
    count++;
    console.log(msg, new Date());
    if(count == 10){
        console.log("끝");
        clearInterval(timer);
    }
}, 1000, "현재시각 : ");

