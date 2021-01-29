console.log('button추가')

var menu = document.createElement('ul');

var item1 = document.createElement('li');
var item2 = document.createElement('li');

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
