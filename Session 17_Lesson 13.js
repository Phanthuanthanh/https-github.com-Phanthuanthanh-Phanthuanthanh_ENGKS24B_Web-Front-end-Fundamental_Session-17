let money = Number(prompt("Mời bạn nhập số tiền cần gửi"));

let month = Number(prompt("Mời bạn nhập số tháng cần gửi:"));

let yearInterest = 4.3 / 100;

let monthlyInterest = yearInterest/12;

let interest = money * monthlyInterest * month;

alert(`Số tiền lãi nhận được trong ${month} tháng là ${interest}`);