
var l=prompt("수를 입력하세요:");

for(i=0; i<l; i++){
    for(t=0; t<i; t++){
        document.write("&nbsp;");
    }
    for(j=l; j>i; j--){
        document.write("☆");
        // i++;
    }
    // r=r-1;
    document.write("<br>");
}