// import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/js/all.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min';
import "./css/style.css";
$(function(){
    $('[data-toggle="tooltip"]').tooltip()

    $(".add-to-cart-btn").click(function(){
      alert("تم اضافة المنتج بنجاح لعربة التسوق");
    })
    // استدعاء السنة الحالية
    $('#copyright').text(" جميع الحقوق محفوظة للمتجر لسنة " + new Date().getFullYear());
    })