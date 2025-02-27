let r = Number(prompt("Mời bạn nhập bán kính:"))

let pi = Math.PI;

let V = 4/3*pi*(r*r*r);

let S = 4*pi*(r*r);

let C = 2*pi*r;

document.write(`Thể tích hình cầu là ${V}
                <br>
                Diện tích bề mặt hình cầu là ${S}
                <br>
                Chu vi lớn nhất của hình cầu là ${C}          
 `)
