let number = parseInt(prompt("Mời bạn nhập số bất kỳ:"));

let localeNumber = number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'});

alert(`Và đó là số tiền của bạn ${localeNumber}`)