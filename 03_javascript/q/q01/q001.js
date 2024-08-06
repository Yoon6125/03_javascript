/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);


/* 표현 2 */
// var random;
// random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");


/* 표현 3 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");

/* 표현 4 */
// document.write("주사위를 굴려 ( " + (Math.floor(Math.random() * 6) + 1) + " ) 이 나왔습니다.");



/* 6면체 */
var random;
random = Math.floor(Math.random() * 256) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var s = "1번 주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);

/* 4면체 */
var random2;
random2 = Math.floor(Math.random() * 256) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var s2 = "2번 주사위를 굴려 ( " + random2 + " ) 이 나왔습니다";
// document.write(s2);

// 주사위 두개 값을 비교하여 이긴 주사위만 출력

if(random>random2){
    document.write(s+"1번 주사위가 이겼습니다."+"나온 숫자는"+random+"입니다.")
}
else{
    document.write(s2+"2번 주사위가 이겼습니다."+"나온 숫자는"+random2+"입니다.")
}