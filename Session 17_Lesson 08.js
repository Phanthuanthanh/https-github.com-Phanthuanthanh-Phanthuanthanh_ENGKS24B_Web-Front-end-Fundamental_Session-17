
let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");

let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let miliday = 1000 * 60 * 60 * 24;

let d1 = new Date(date1);

let d2 = new Date(date2);

let milid1d2 = Math.abs(d2 - d1); 

let dayd1d2 =(milid1d2 / miliday);

alert(`Độ lệch là ${dayd1d2} ngày`);
