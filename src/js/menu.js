import $ from "jquery";

function dropdown() {

    $('#list2, #list3').hide();

    $(".accordion1").click(function menu1() {
        $('#list1').slideToggle(800);
        $('#title1').toggleClass('color-title');
        $('#sign1').toggleClass('sign-change');
      });
      $(".accordion2").click(function menu2() {
        $('#list2').slideToggle(800);
        $('#title2').toggleClass('color-title');
        $('#sign3').toggleClass('sign-change');
      });
      $(".accordion3").click(function menu3() {
        $('#list3').slideToggle(800);
        $('#title3').toggleClass('color-title');
        $('#sign3').toggleClass('sign-change');
      });

}

export default dropdown;