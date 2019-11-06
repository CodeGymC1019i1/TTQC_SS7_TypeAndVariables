// Bài Tập tính điểm trung bình
function diemTB() {
    let t = parseInt(document.getElementById('toan').value);
    let l = parseInt(document.getElementById('ly').value);
    let h = parseInt(document.getElementById('hoa').value);
    let tb = (t + l + h)/3;
    let tong = (t + l + h);
    alert('Điểm trung bình:' + tb);
    alert('Điểm tổng:' +tong);
}
// Đổi độ c sang độ F
function doido() {
    let c = parseFloat(document.getElementById('do').value);
    let f = 9*c/5-32;
    alert('Gia tri cua do F:' + f);
}
// Diện tích hình tròn
    function dienTich() {
        let r = parseFloat(document.getElementById('dt').value);
        let s = r * r * 3.14;
        let d = r * 2 * 3.14;
        alert('Diện tích hình tròn là:' + s);
        alert('Chu vi hình tròn là:' + d);
    }
// Đổi tiền 
function doiTien() {
    let st=document.getElementById('sotien').value;
    let form=document.getElementById('form').value;
    let to=document.getElementById('to').value;

    let cd=st*to/form;
    alert('Số tiền là:' +cd);
    
}
// Máy tính cơ bản
function cong(){
    let operand1=parseFloat(document.getElementById('operand1').value);
    let operand2=parseFloat(document.getElementById('operand2').value);
    let tong= operand1 + operand2;
    document.getElementById('tong').innerText="Kết quả là:" + tga;
}