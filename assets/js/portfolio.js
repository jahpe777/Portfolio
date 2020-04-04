function james() {
  $('.name').click(function(event) {
    event.preventDefault();
    $('.jamesModal').css('display', 'flex');
  });
  $('.close').click(function(event) {
    event.preventDefault();
    $('.jamesModal').css('display', 'none');
  });
}

function about() {
  $('.about').click(function(event) {
    event.preventDefault();
    $('.aboutModal').css('display', 'flex');
  });
  $('.close').click(function(event) {
    event.preventDefault();
    $('.aboutModal').css('display', 'none');
  });
}

function project() {
  $('.project').click(function(event) {
    location.href = 'https://jahpe777.github.io/Quiz_App/';
  });
}

function projectTwo() {
  $('.projectTwo').click(function(event) {
    location.href = 'https://jahpe777.github.io/Climate_Change_App/';
  });
}

function projectThree() {
  $('.projectThree').click(function(event) {
    location.href = 'https://ghost-pavilion.now.sh/';
  });
}

function projectFour() {
  $('.projectFour').click(function(event) {
    location.href = 'https://crescendo.now.sh/';
  });
}

function code() {
  $('.code').click(function(event) {
    location.href = 'https://github.com/jahpe777/Quiz_App.git';
  });
}

function codeTwo() {
  $('.codeTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/Climate_Change_App.git';
  });
}

function client() {
  $('.client').click(function(event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion.git';
  });
}

function clientTwo() {
  $('.clientTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/crescendo.git';
  });
}

function server() {
  $('.server').click(function(event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion-server.git';
  });
}

function serverTwo() {
  $('.serverTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/crescendo-api.git';
  });
}

function email() {
  $('#email').click(function(event) {
    location.href = 'mailto:james@jamesyhiggs.com';
  });
}

function linkedin() {
  $('#linkedin').click(function(event) {
    location.href = 'https://www.linkedin.com/in/jameshiggs/';
  });
}

function github() {
  $('#github').click(function(event) {
    location.href = 'https://github.com/jahpe777';
  });
}

james();
about();
project();
code();
projectTwo();
codeTwo();
projectThree();
client();
server();
projectFour();
clientTwo();
serverTwo();
email();
linkedin();
github();
