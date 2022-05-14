/**
 * khối 1: điểm ưu tiên khu vực A:2 B:1 c:0.5
 *          ĐỐi tượng 1: 2.5, 2:1.5, 3:1
 * 
 * khối 2 : 
 * b1: đặt tên biến
 * b2: tạo hàm 
 * b3: 
 *  diemtong = (diemmon1 + diemmon2 + diemmon3)+ diemuutien
 * diemuutien = diemuutienkhuvuc + diemuutiendoituong
 * b4: onclick
 * 
 * khối 3:
 * viết chương trình nhập điểm chuẩn của hội đồng
 */
const khuvucA = 2;
const khuvucB = 1;
const khuvucC = 0.5;
const khuvuckhonguutien = 0;

const doituong1 = 2.5;
const doituong2 = 1.5;
const doituong3 = 1;
const doituongkhonguutien = 0;


function DiemChuan() {
    var diemmon1 = document.getElementById("diemmon1").value;
    var diemmon2 = document.getElementById('diemmon2').value;
    var diemmon3 = document.getElementById('diemmon3').value;
    var diemuutienkhuvuc = document.getElementById('author_id').value;
    var diemuutiendoituong = document.getElementById('object').value;
    var diemchuan = document.getElementById('diemchuan').value;

    var diemuutienkhuvuc = Number(diemuutienkhuvuc);
    var diemuutiendoituong = Number(diemuutiendoituong);
    var so1 = Number(diemmon1);
    var so2 = Number(diemmon2);
    var so3 = Number(diemmon3);


    var diemtongbamon = 0;
    if (diemmon1 == 0 || diemmon2 == 0 || diemmon3 == 0) {
        alert('thí sinh rớt');
    } else {
        diemtongbamon = (so1 + so2 + so3);
    }

    var diemuutien = 0;
    diemuutien = diemuutienkhuvuc + diemuutiendoituong;


    diemtong = diemtongbamon + diemuutien;
    switch (diemuutienkhuvuc) {
        case 2:
            if (khuvucA) {
                diemuutienkhuvuc = 2;
            }
            break;
        case 1:
            if (khuvucB) {
                diemuutienkhuvuc = 1;
            }
            break;
        case 0.5:
            if (khuvucC) {
                diemuutienkhuvuc = 0.5;
            }
            break;
        case 0:
            if (khuvuckhonguutien) {
                diemuutienkhuvuc = 0;
            }
            break;
    }

    switch (diemuutiendoituong) {
        case 2.5:
            if (doituong1) {
                diemuutiendoituong = 2.5;
            }
            break;
        case 1.5:
            if (doituong2) {
                diemuutiendoituong = 1.5;
            }
            break;
        case 1:
            if (doituong3) {
                diemuutiendoituong = 1;
            }
            break;
        case 0:
            if (doituongkhonguutien) {
                diemuutiendoituong = 0;
            }
            break;
    }


    var thongBao = "";
    if (diemchuan > diemtong) {
        thongBao = "thí sinh rớt";
    } else {
        thongBao = "thí sinh đậu";
    }

    document.getElementById("output").innerHTML = "Kết quả: " + diemtong + "<br>thí sinh : " + thongBao;
}
