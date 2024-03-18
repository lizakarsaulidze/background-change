

const bkchang = document.querySelector(".bkchange");

bkchang.addEventListener('click',function(){
     document.body.style.backgroundColor = 
     'rgb(' + Math.round(Math.random() * 255)+
     ','+ Math.round(Math.random() * 255) +
     ','+ Math.round(Math.random() * 255) + ')'
})
