$(document).ready(function() {

  $('#about').on('click', function() {
    // window.scrollTo( 0, 0 );
    smoothScroll( 0 );
    // console.log( this );
  });

  $('#nav-return').on('click', function() {
     const anchor = document.getElementById('home'); // TODO could cache this, called twice
     scrollTo(document.body, anchor.offsetTop, 0);
  });

});




// smooth scroll eg

const smoothScroll = function( y ) {
  $('html, body').animate( { scrollTop: y }, 500);

};
//
//
// $('a[href*=\\#]').on('click', function(event){
//     event.preventDefault();
//     smoothScrollingTo(this.hash);
// });
// $(document).ready(function(){
//   smoothScrollingTo(location.hash);
// });
