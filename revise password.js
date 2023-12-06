$(document).ready(function() {
    // 加載標頭內容
    $("#headerContainer").load("./header.html");

    // 加載頁腳內容
    $("#footerContainer").load("./footer.html");
});

$('.revise_p').click(function() {
    $('.completed_').css('display', 'block');
    var countdownElement = $(".countdown");
    var seconds = 3;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds -= 1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval);
            window.location.href = './revise password.html';
        }
    }, 1000);

    function updateCountdown() {
        countdownElement.text(seconds);
    }
});



