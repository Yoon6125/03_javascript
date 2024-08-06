
//window.onload => html body 가 인식되기 전에 js가 동작하므로 body에 속하는 속성이 있을시 인식 불가, 이 코드를 사용해 해결 
window.onload=function(){
    var d=document.getElementById("a");
    
    while(true){
        var input=prompt("값을 입력하세요:");
        if(input==100){
            break;
        }else{
            d.innerHTML=input+"입니다.";
        }
    }
};