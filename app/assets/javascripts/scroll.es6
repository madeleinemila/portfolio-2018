// $(document).ready(function(){
//
//  setTimeout(function(){   // had to put scrollTo inside 100ms timeout to work in recent Chrome
//     scrollTo( 0, window.innerHeight + 60 );
//   }, 100);
//
//
// });


$(document).ready(function() {
  resizeRotateContainer();
  resizeByline();
});

$(window).resize(function() {
  resizeRotateContainer();
  resizeByline();
});



$(window).load(function(){  // after images etc have loaded
  // JUMP TO 'HOME' PAGE IN MIDDLE OF SCREEN
  const anchor = document.getElementById('home');
  if (window.innerWidth > 640) {
   setTimeout(function(){   // had to put scrollTo inside 100ms timeout to work in recent Chrome
      // scrollTo( 0, window.innerHeight + 85 ); // TODO change magic number 85, fix for mobile
     scrollTo(document.body, anchor.offsetTop, 0);
    }, 100);
  }
});




const resizeRotateContainer = function() {
  if (window.innerWidth < 740) { // 740 breakpoint for text to new line
    const container = document.getElementById('rotate-container');
    container.innerHTML = `During a career in film, television and live entertainment tech, I saw firsthand many technological transitions:<br /><span class="rotate" id="rotateTech">from cables to web GUIs.</span>`;
  }
};


const resizeByline = function() {
  if (window.innerWidth < 740) {
    const byline = document.getElementsByClassName('home-byline')[0];
    byline.innerHTML = "WEB DEVELOPER";
  }
};
