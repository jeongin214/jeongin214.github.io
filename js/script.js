document.addEventListener("DOMContentLoaded", function(){

    var sangyeon = {month: 11, day: 4, name: '상연'};
    var jacop = {month: 5, day: 30, name: '제이콥'};
    var younghoon = {month: 8, day: 8, name: '영훈'};
    var hyeonjae = {month: 9, day: 13, name: '현재'};
    var juyeon = {month: 1, day: 15, name: '주연'};
    var kevin = {month: 2, day: 23, name: '케빈'};
    var neww = {month: 4, day: 26, name: '뉴'};
    var que = {month: 11, day: 5, name: '큐'};
    var hakneon = {month: 3, day: 9, name: '주학년'};
    var sunwoo = {month: 4, day: 12, name: '선우'};
    var erik = {month: 12, day: 22, name: '에릭'};
    var jeongin = {month: 2, day: 14, name: '정인'};

    function showBirthDay() {
       var birthDays = [sangyeon, jacop, younghoon, hyeonjae, juyeon, kevin , neww, que, hakneon, sunwoo, erik, jeongin];
       var date = new Date();
       var month = date.getMonth() + 1;
       var day = date.getDate();
       document.getElementById("date").innerHTML = date.toLocaleString('ko-KR');

       for (var i = 0; i < birthDays.length; i++) {
           if (month == birthDays[i].month &&
               day == birthDays[i].day) {
               document.getElementById("date").innerHTML += ' 오늘은 ' + birthDays[i].name + '의 생일입니다.';
           }
       }
    }

    showBirthDay();


    /*
    //랜덤으로 인사와 사진 보이기 최적화하기
    var random = Math.floor(Math.random() * 5);

    var titles = ["안녕하세요", "가보자고ㅎ", "덥쭈고!", "환영합니다", "let's do this!"];
    document.getElementById("hi").innerHTML = titles[random];

    var images = ["images/a.jpg","images/b.jpg","images/c.jpg", "images/d.jpg", "images/e.jpg"];
    document.getElementById("titleImage").src = images[random];
    */

    /*
    //랜덤으로 인사와 사진 보이기
    var images = ["images/a.jpg","images/b.jpg","images/c.jpg", "images/d.jpg", "images/e.jpg"];
    document.getElementById("titleImage").src = images[Math.floor(Math.random() * 5)];

    var titles = ["안녕하세요", "가보자고", "덥쭈고", "환영합니다", "let's do this!"];
    document.getElementById("hi").innerHTML = titles[Math.floor(Math.random() * 5)];

    var random = Math.floor(Math.random() * 5);// 0 or 1 or 2 or 3 or 4
    if (random == 0) {
        document.getElementById("titleImage").src = "images/a.jpg";
    } else if (random == 1) {
        document.getElementById("titleImage").src = "images/b.jpg";
    } else if (random == 2) {
        document.getElementById("titleImage").src = "images/c.jpg";
    } else if (random == 3) {
        document.getElementById("titleImage").src = "images/d.jpg";
    } else if (random == 4) {
        document.getElementById("titleImage").src = "images/e.jpg";
    }
    */
});