function anime(){
document.getElementById('body').style.opacity="1";
document.getElementById('text').style.padding="130px 0px 0px 50px";
}

window.addEventListener('scroll',function(){
    let y = scrollY;
    console.log(y)
    if(y > 900){
        this.document.getElementById('hospital').style.opacity="1";
    }
})


window.addEventListener('scroll' ,function(){
    let y2 = scrollY;
    if(y2 > 1300){
        this.document.getElementById('ab2').style.opacity="1";
    }
})

window.addEventListener('scroll',function(){
    let y3 = scrollY;
    if(y3 > 2000){
        this.document.getElementById('icons').style.opacity="1";
    }
})

// 2116

window.addEventListener('scroll' , function(){
    let y4 = scrollY;
    if(y4 > 2216){
        this.document.getElementById('footer').style.opacity="1";
    }
})