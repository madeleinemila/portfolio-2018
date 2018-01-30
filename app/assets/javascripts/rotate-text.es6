// // *** 'from' text options
// const from = ['film', 'tape', 'hardware'];
//
// // ** 'to' text options - keep same length as 'from' // TODO put in one 2d array then?
// const to = ['web delivery', 'web app', 'DMX over IP'];

const tech = ['from film to streaming.', 'from hardware to web apps.', 'from videotape to data.', 'from industry-specific protocols to IP.', 'from cables to web GUIs.', 'from meetings to borderless online collaboration.'];


// counter to rotate through options
let counter = 1;



// *** component functions ***

const fadeOut = function(elem) {
  elem.addClass('no-opacity');
};

const changeText = function(elem, a) {
  elem.text( a[counter] );
  counter++;
  if (counter > a.length - 1) counter = 0 ;
};

const fadeIn = function(elem) {
  elem.removeClass('no-opacity');
};

// ** MAIN FADE LOOP **
const fadeLoop = function( $elem, a ) {
  setTimeout(() => { fadeOut( $elem ) }, 1000 );
  setTimeout(() => { changeText( $elem, a ) }, 2300 );
  setTimeout(() => { fadeIn( $elem ) }, 2300 );
  setTimeout(() => { fadeLoop( $elem, a ) }, 3800);
};






$(document).ready(function() {

  const $rotateTech = $('#rotateTech');
  fadeLoop( $rotateTech, tech );

});
