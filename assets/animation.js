// JavaScript source code
$(document).ready(function () {
    $('#mrglasslogo').hide().fadeIn(1000);
    $('#headTitle').hide().slideDown(400);
    $('#FL_Product').hide().slideDown(600);
    $('#contForm').hide().fadeIn(800).slideDown(900);

    $('#Reinforcement').prop("disabled", true);
      ////////// CHANGE COLOR OF ADJACENT BOOTSTRAP ICON //////////
      $('input, select').focus(function() {
          $( this ).next( "span" ).css( "color", "#2196F3" );
      });


      $('input, select').blur(function() {
          $( this ).next( "span" ).css( "color", "darkgray" );
      });


/////////////// IF VALUE OF VERTICAL LITES <= 1 DISABLE REINF OPTION
      $('#vertiLitesInput, #heightInput').change(function() { //WHEN heightInput OR vertiLitesInput CHANGE CHECK WHETHER REINF CAN BE CHOSEN.
        if ((document.getElementById("vertiLitesInput").value > 1) || (document.getElementById("heightInput").value > 119)) {
            $('#Reinforcement').prop("disabled", false); /// ENABLE ELEMENT
        }
        else if ((document.getElementById("vertiLitesInput").value < 2) || (document.getElementById("heightInput").value < 119)) {
            $('#Reinforcement').prop("disabled", true); /// DISABLE ELEMENT
        }
    })
 });
