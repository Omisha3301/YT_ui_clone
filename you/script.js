
var like = document.querySelector(".like");


$('.like').click(function() {
  var val = parseInt($(this).text(), 10);
  $(this).toggleClass('is-liked');
  
  if ($(this).hasClass('is-liked')) {
    val++
  } else {
    val--
  }
  
  $(this).text(val);
});

$('.dislike').click(function() {
  var val = parseInt($(this).text(), 10);
  $(this).toggleClass('is-disliked');
  
  if ($(this).hasClass('is-disliked')) {
    val++
  } else {
    val--
  }
  
  $(this).text(val);
});

$('.button').click(function() {
  $(this).toggleClass('button-selected');

});

$('.subscribe').click(function() {
  $(this).toggleClass('subscribed');
  
  if ($(this).hasClass('subscribed')) {
    $(this).text("Subscribed");
  } else {
    $(this).text("Subscribe");
  }
  
  
});
