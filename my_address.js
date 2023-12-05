$(document).ready(function() {
    // 加載標頭內容
    $("#headerContainer").load("./header.html");

    // 加載頁腳內容
    $("#footerContainer").load("./footer.html");
});

$('.bt1').click(function(){
    window.location.href = './login.html'; 
})

