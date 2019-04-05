//Animate Smooth Scroll

$('#view-work').on('click', function() {  // grab on to id.  added an event that when something is clicked
  const images = $('#images').position().top;  //variable called images.  We want the position and top

  $('html, body').animate(  //to animate we use jquery
  {
    scrollTop: images
  },
  900
  );
});
