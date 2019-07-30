function james() {
    $(".name").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","flex");
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","none");
    });
}

function about() {
    $(".about").click(function(event) {
        event.preventDefault();
        $(".aboutModal").css("display","flex");
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".aboutModal").css("display","none");
    });
}

function project() {
    $(".project").click(function(event) {
        location.href = 'https://jahpe777.github.io/Quiz_App/';
    });
}

function projectTwo() {
    $(".projectTwo").click(function(event) {
        location.href = 'https://jahpe777.github.io/Climate_Change_App/';
    });
}

function code() {
    $(".code").click(function(event) {
        location.href = 'https://github.com/jahpe777/Quiz_App.git';
    });
}

function codeTwo() {
    $(".codeTwo").click(function(event) {
        location.href = 'https://github.com/jahpe777/Climate_Change_App.git';
    });
}

function email() {
    $("#email").click(function(event) {
        location.href = 'mailto:james@jamesyhiggs.com';
    });
}

function linkedin() {
    $("#linkedin").click(function(event) {
        location.href = 'https://www.linkedin.com/in/jameshiggs/';
    });
}

function github() {
    $("#github").click(function(event) {
        location.href = 'https://github.com/jahpe777';
    });
}

james();
about();
project();
code();
projectTwo();
codeTwo();
email();
linkedin();
github();