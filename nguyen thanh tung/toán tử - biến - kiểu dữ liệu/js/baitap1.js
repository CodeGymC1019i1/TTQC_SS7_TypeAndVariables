function bai1() {
    let a = parseInt(prompt('nhập điểm Vật lý'));
    let b = parseInt(prompt('Nhập điểm Hoá Học'));
    let c = parseInt(prompt('Nhập điểm sinh học'));
    r = (a + b + c) / 3;
    document.write('điểm trung bình của 3 môn này là :' + r);
    document.write('<br>');
    document.write('Điểm vật lý: ' + a);
    document.write('<br>');
    document.write('Điểm hoá học: ' + b);
    document.write('<br>');
    document.write('Điểm sinh học: ' + c);
}

function bai2(){
    let a = parseInt(prompt('nhập độ F'));
    f = a * 1.8000 + 32;
    document.write( a + ' độ C đổi thành ' + f + ' độ F' );
}

function bai3() {
    let r = parseInt(prompt('Nhập bán kính hình tròn'));
    s = r * r * 3.14;
    document.write('diện tích hình tròn là ' + s); 
}

function bai4() {
    let r = parseInt(prompt('Nhập bán kính hình tròn'));
    c = r * 2 * 3.14;
    document.write('chu vi hình tròn là ' + c);
}