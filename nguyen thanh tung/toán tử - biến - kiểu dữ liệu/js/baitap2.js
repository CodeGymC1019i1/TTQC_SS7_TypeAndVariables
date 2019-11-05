function convert() {
    let amount =  parseFloat(document.getElementById('amount').value);
    let from = parseFloat(document.getElementById('from').value);
    let to = parseFloat(document.getElementById('to').value);   

    let result = amount * to / from;

    document.getElementById('result').innerText = "giá tiền quy đổi là" + result;


}