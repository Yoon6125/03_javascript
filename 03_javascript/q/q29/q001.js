var user=prompt("가위, 바위, 보 (택 1):");
var com=Math.floor(Math.random()*3+1);

var com_diss;

if(com==1){
    com_diss="가위";
}else if(com==2){
    com_diss="바위";
}else{
    com_diss="보";
}

dw("user의 선택: "),dw(user);
br();
dw("com의 선택: "),dw(com_diss);

hr();

if(user=="가위"){
    if(com_diss=="가위"){
        dw("비김");
    }
    else if(com_diss=="바위"){
        dw("user의 패배");
    }
    else{
        dw("com 의 패배");
    }
}else if(user=="바위"){
    if(com_diss=="가위"){
        dw("com 의 패배");
    }
    else if(com_diss=="바위"){
        dw("비김");
    }
    else{
        dw("user 의 패배");
    }
}else{
    if(com_diss=="가위"){
        dw("user의 패배");
    }
    else if(com_diss=="바위"){
        dw("com 의 패배");
    }
    else{
        dw("비김");
    }
}