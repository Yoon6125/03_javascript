// var cat;
// cat= prompt("고양이 수를 입력하세요:");
var r=Math.floor(Math.random()*100)+1;
// var m=Math.floor(Math.random()*100)+1;

for(i=0 ; i<r; i++){
    // document.write("<hr>");
    if(i==6){
        document.write("<img src='cat.png' id=cat>");
    }else{
        document.write("<img src='cat.png'>");
    }
}

//올랜덤 황금고양이 뽑기(꽝 있음)
var r=Math.floor(Math.random()*100)+1;
var m=Math.floor(Math.random()*100)+1;

for(i=0 ; i<r; i++){
    // document.write("<hr>");
    if(i==m){
        document.write("<img src='cat.png' id=cat>");
    }else{
        document.write("<img src='cat.png'>");
    }
}


console.log(m);