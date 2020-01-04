window.$ = require('jquery')
window.JQuery = require('jquery')

$(window).ready(function(){

  $('.menu').click(function(){
    $('ul').toggleClass('active');
  })
})
