let a = prompt("Mời bạn nhập vào giá trị a một số: ");

let b = prompt("Mời bạn nhập vào giá trị b một số: ");

let c = prompt("Mời bạn nhập vào giá trị c một số: ");

let delta = ((b*b)-4*a*c);

let x1 = ((-b)+Math.sqrt(delta))/(2*a);

let x2 = ((-b)-Math.sqrt(delta))/(2*a);

alert(x1);

alert(x2);