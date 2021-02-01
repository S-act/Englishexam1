
function func(){
    gazou1.src = "画像/JP" +gazousettei(1) +".jpg";
    end.classList.remove('on');
    end.classList.add('off');
    gazou1.classList.remove('off');
    gazou1.classList.add('on');
}
function func2(){
    gazou1.src = "画像/EN" +gazousettei(1) +".jpg";
    //tim.remove();
    clearInterval(kanri);
    gazou1.classList.remove('off');
    gazou1.classList.add('on');
        end.innerHTML = "終了！"
    end.classList.remove('off');
    end.classList.add('on');
    timer1 = 0;
    
}
function jikan(){
    const jik = jikk.value;
    if(jik <= 0 || jik === ""){
        jiktim=100;
    }else{
        jiktim=jik;
    }
    
    return jiktim;
}
function gazousettei(){
    const num = bangou.selectedIndex;
    const nb = num + 1;
    
    return nb;
}

var timer1;
var kanri = 0;
function cntStart()
{
    clearInterval(kanri);
    timer1=jikan(1);
    kanri = setInterval("countDown()",1000);
        tim.innerHTML = timer1;
    //setInterval("countDown()",1000);
    tim.classList.remove('off');
    tim.classList.add('on');
    func();
}
function countDown()
{
    timer1--;
        tim.innerHTML = timer1;
    if(timer1===0){
        tim.innerHTML = "終了！";
        tim.classList.remove('on');
        tim.classList.add('off');
        func2();
    }
}
function clean(){
        func2();
    end.classList.remove('on');
    end.classList.add('off');
    gazou1.classList.remove('on');
    gazou1.classList.add('off');
        tim.classList.remove('on');
        tim.classList.add('off');
}
