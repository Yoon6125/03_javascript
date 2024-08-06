

var random=Math.floor(Math.random()*10)+1;


for(i=1; i<11; i++){
    
    if(i==random){
        continue;
    }else{
        document.write(i);
    }

}