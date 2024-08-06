
var l=prompt("수를 입력하세요:");

for(i=0; i<l; i++){
    for(t=l; t>i; t--){
        document.write("&nbsp;");
    }
    for(j=0; j<i+1; j++){
        document.write("☆");
        // i++;
    }
    // r=r-1;
    document.write("<br>");
}