// JavaScript source code
$(document).ready(function () {
    $('#mrglasslogo').hide().fadeIn(1000);
    $('#headTitle').hide().slideDown(400);
    $('#FL_Product').hide().slideDown(600);
    $('#contForm').hide().fadeIn(800).slideDown(900);

      $('input, select').focus(function() {
          $( this ).next( "span" ).css( "color", "#2196F3" );
      });


      $('input, select').blur(function() {
          $( this ).next( "span" ).css( "color", "darkgray" );
      });

 }
);
