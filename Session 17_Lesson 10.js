let number = prompt("Mời bạn nhập một số bất kỳ để xem nó có phải là số chính phương hay không:");

let i = Math.floor(Math.sqrt(number));

if(i * i == number){
    alert(`Đây ${number} là số chính phương`);
}else{
    alert(`Đây ${number} không phải số chính phương`);
}