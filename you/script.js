
var like = document.querySelector(".like");


$('.like').click(function() {
  var val = parseInt($(this).text(), 10);
  $(this).toggleClass('is-liked');
  
  if ($(this).hasClass('is-liked')) {
    val++
    // User has liked (insert userId, itemId into Likes table)
  } else {
    val--
    // User removed his like (delete from table Likes where userId and itemId)
  }
  
  $(this).text(val);
});

$('.button').click(function() {
  $(this).toggleClass('button-selected');

});
