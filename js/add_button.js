console.log('button추가')

var menu = document.createElement('ul');

var item1 = document.createElement('li');
var item2 = document.createElement('li');

var btn1 = document.getElementById('btn1')
item1.innerHTML= "치킨";
item2.innerHTML= "피자";
menu.appendChild(item1);
menu.appendChild(item2);

test.appendChild(menu);

function readInput(){
    var input = document.getElementById('input1');
    console.log(input.value);
    //value inpt태그안에 들어있는것을 가져옴

}

// btn1.addEventListener('onclick',readInput());

// btn1.onclick = readInput;
// 함수지만 ()를 쓰지않고 onclick을 함수로 만든다. 

btn1.onclick = function() {
    console.log("click");
    var input = document.getElementById('input1');
    console.log(input.value);
}
//이런식으로 그냥 function 을 써서 가능하다. 

// var btn2 = document.createElement('button');
// btn2.onclick = readInput;
// var test2 = document.getElementById('test')