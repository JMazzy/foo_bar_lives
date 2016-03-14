// Your Code Here!
$( document ).ready( function() {

  $( "#add-button" ).on("click", function(event) {
    event.preventDefault();
    $( "#empty-message" ).remove();
    var $item = $("#grocery-input").val();
    $("#grocery-input").val("");
    console.log($item);
    $( ".groceries" ).append("<li " + "class='item" + 1 + "'>" + $item + "</li>");
  });

});
