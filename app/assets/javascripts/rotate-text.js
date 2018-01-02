// *** 'from' text options
const from = ['film', 'tape', 'hardware'];

// counter to rotate through options
let counter = 1;



// *** component functions ***

const fadeOut = function(elem) {
  elem.addClass('no-opacity');
};

const changeText = function(elem, a) {
  console.log(counter);
  elem.text( a[counter] );
  counter++;
  if (counter > from.length - 1) counter = 0 ;
};

const fadeIn = function(elem) {
  elem.removeClass('no-opacity');
};



const fadeLoop = function( $elem, a ) {
  setTimeout(() => { fadeOut( $elem ) }, 2000 );
  setTimeout(() => { changeText( $elem, a ) }, 3000 );
  setTimeout(() => { fadeIn( $elem ) }, 3000 );
  setTimeout(() => { fadeLoop( $elem, a ) }, 3500);
};












$(document).ready(function() {
  const $rotateFrom = $('#rotateFrom');
  fadeLoop( $rotateFrom, from );



});