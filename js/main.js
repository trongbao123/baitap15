/**
 * khối 1: input
 * tên số kw
 * 
 * khối2
 * 
 *  b1 khai báo biến
 * b2 tạo hàm 
 *  
 const first__50kw = 500;
 const second__50kw = 650;
 const three__100Kw = 850;
 const four__150kw = 1100;
 const five = 1300;
 * 
 *     
     if(num == 50){
        num = first__50kw;
     }else if(50<num && num<100){
         num = second__50kw;
     }else if(100<=num && num<150){
         num = three__100Kw;
     }else if(150==num){
         num = four__150kw;
     }else if(num>150){
         num =five;
     }
 * 
 * b3 : onclick
 * 
 * khối 3 output tính và xuất tiền 
 * 
 */


 const first__50kw = 500;
 const second__50kw = 650;
 const three__100Kw = 850;
 const four__150kw = 1100;
 const five = 1300;

 function TinhTienTra(){
     var input = document.getElementById('add').value;
     var num = document.getElementById('num').value;
       
     if(num == 50){
        num = first__50kw;
     }else if(50<num && num<=100){
         num = second__50kw;
     }else if( num<150){
         num = three__100Kw;
     }else if(150==num){
         num = four__150kw;
     }else if(num>150){
         num =five;
     }

     document.getElementById('out').innerHTML = "Tên:" + input + "<br>Số tiền: "+num + "vnd/kw";
 }