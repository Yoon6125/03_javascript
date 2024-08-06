var cat_age, cat_sp, cat_name;

cat_age=prompt("입력(고양이 나이):");
cat_sp=prompt("입력(고양이 종):")
cat_name=prompt("입력(고양이 이름):");

// // var sum;
// // sum=cat_age+cat_sp+cat_name;

// // alert(sum);


function add_cat(){
    alert(cat_age+cat_sp+cat_name);

}

add_cat();

// function xx(x){
//     for(var i=0; i<x ; i++){
//         document.write("고양이");
//     }
// }

// xx(3);
// document.write("<hr>");
// xx(4);
// document.write("<hr>");
// xx(5);
// document.write("<hr>");
// xx(6);
// document.write("<hr>");

function cat(x,y,z){
    // document.write(x);
    // document.write(y);
    // document.write(z);

    document.write("<br>");
    document.write("당신의 고양이는"+x+" 살 이며 "+y+" 종 이고 이름은 "+z+" 이다");

}

cat(1,"길고양이", "길냥이");