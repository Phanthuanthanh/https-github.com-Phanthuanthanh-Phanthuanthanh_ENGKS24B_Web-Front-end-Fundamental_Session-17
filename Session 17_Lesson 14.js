let r = Number(prompt("Mời bạn nhập bán kính hình trụ:"));

let h = Number(prompt("Mời bạn nhập chiều cao hình trụ:"));

let pi = Math.PI;

let Sxq = 2*pi*r*h;

let Sday = pi*(r*r);

let Stp = Sxq+2*Sday;

let V = pi*(r*r)*h;

let Cday = 2*pi*r;

document.write(`Diện tích xung quanh là: ${Sxq}
                <br>
                Diện tích toàn phần là: ${Stp}
                <br>
                Thể tích hình trụ là: ${V}
                <br>
                Chu vi đáy là: ${Cday}
`);
