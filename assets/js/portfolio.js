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

function hideCrescendo() {
  $('.projectNameCrescendo').click(function(event) {
    var myDiv = document.getElementById('projectInfoCrescendo');
    myDiv.classList.toggle('hide');
  });
}

function hideGhost() {
  $('.projectNameGhost').click(function(event) {
    var myDiv = document.getElementById('projectInfoGhost');
    myDiv.classList.toggle('hide');
  });
}

function hideClimate() {
  $('.projectNameClimate').click(function(event) {
    var myDiv = document.getElementById('projectInfoClimate');
    myDiv.classList.toggle('hide');
  });
}

function hideQuiz() {
  $('.projectNameQuiz').click(function(event) {
    var myDiv = document.getElementById('projectInfoQuiz');
    myDiv.classList.toggle('hide');
  });
}

function quizAppImage() {
  $('#quizAppImage').click(function(event) {
    location.href = 'https://jahpe777.github.io/Quiz_App/';
  });
}

function climateChangeAppImage() {
  $('#climateChangeAppImage').click(function(event) {
    location.href = 'https://jahpe777.github.io/Climate_Change_App/';
  });
}

function ghostPavilionAppImage() {
  $('#ghostPavilionAppImage').click(function(event) {
    location.href = 'https://ghost-pavilion.now.sh/';
  });
}

function crescendoAppImage() {
  $('#crescendoAppImage').click(function(event) {
    location.href = 'https://crescendo.now.sh/';
  });
}

function projectOne() {
  $('#projectOne').click(function(event) {
    location.href = 'https://jahpe777.github.io/Quiz_App/';
  });
}

function projectTwo() {
  $('#projectTwo').click(function(event) {
    location.href = 'https://jahpe777.github.io/Climate_Change_App/';
  });
}

function projectThree() {
  $('#projectThree').click(function(event) {
    location.href = 'https://ghost-pavilion.now.sh/';
  });
}

function projectFour() {
  $('#projectFour').click(function(event) {
    location.href = 'https://crescendo.now.sh/';
  });
}

function codeOne() {
  $('#codeOne').click(function(event) {
    location.href = 'https://github.com/jahpe777/Quiz_App.git';
  });
}

function codeTwo() {
  $('#codeTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/Climate_Change_App.git';
  });
}

function clientOne() {
  $('#clientOne').click(function(event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion.git';
  });
}

function clientTwo() {
  $('#clientTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/crescendo.git';
  });
}

function serverOne() {
  $('#serverOne').click(function(event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion-server.git';
  });
}

function serverTwo() {
  $('#serverTwo').click(function(event) {
    location.href = 'https://github.com/jahpe777/crescendo-api.git';
  });
}

function email() {
  $('#email').click(function(event) {
    location.href = 'mailto:james.y.higgs@gmail.com';
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
hideCrescendo();
hideGhost();
hideClimate();
hideQuiz();
quizAppImage();
projectOne();
codeOne();
climateChangeAppImage();
projectTwo();
codeTwo();
ghostPavilionAppImage();
projectThree();
clientOne();
serverOne();
crescendoAppImage();
projectFour();
clientTwo();
serverTwo();
email();
linkedin();
github();
