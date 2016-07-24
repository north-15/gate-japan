$(function(){

  // クリックでサイドバー表示
  $('#bars').click(function(){
    $('#sidebar').show();
  });

  // クリックでサイドバー非表示
  $('#cancel').click(function(){
    $('#sidebar').hide();
  });

  // クリックでサイドバーの中身表示/非表示
  $('.sidebar-introduce').click(function(){
    $('.sidebar-child').toggle();
  });


});