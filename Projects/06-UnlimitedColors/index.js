let interval;

const bgchange = function(){
    const colors = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    document.body.style.backgroundColor = colors;
}

document.querySelector('#start').addEventListener('click',function(){
    if(interval)return;
    interval = setInterval(bgchange,1000);
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(interval);
    interval = null;
    document.body.style.backgroundColor = '#212121';
})