var btnslider1 = document.getElementById("btnslider1");
var slider1 = document.getElementById("slider1");
var btnslider2 = document.getElementById("btnslider2");
var slider2 = document.getElementById("slider2");

btnslider1.onblick = function () {
    slider1.style.display = "none";
    slider2.style.display = "block";
    window.alert("başarılı.");
}

btnslider2.onblick = function () {
    slider2.style.display = "none";
    slider1.style.display = "block";
    window.alert("başarılı.");
}