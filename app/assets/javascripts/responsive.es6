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
  const p5_graph = new p5(graphGenerator, "graph");  // args: function for sketch, id of div to attach to
  // if (window.innerWidth > 640) {
   setTimeout(function(){   // had to put scrollTo inside 100ms timeout to work in recent Chrome
      // scrollTo( 0, window.innerHeight + 85 ); // TODO change magic number 85, fix for mobile
     scrollTo(document.body, anchor.offsetTop, 0);
     hidePreloader();
    }, 100);
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    const $rotateTech = $('#rotateTech');
    fadeLoop( $rotateTech, tech );
  // }
});




// ******* Component functions *********

const newLineBreakPoint = 800;

const resizeRotateContainer = function() {
  if (window.innerWidth < newLineBreakPoint) { //  breakpoint for text to new line
    const container = document.getElementById('rotate-container');
    container.innerHTML = `During a career in film, television and live entertainment tech, I experienced firsthand many technological transitions:<br /><span class="rotate" id="rotateTech">from cables to web GUIs.</span>`;
    const $rotateTech = $('#rotateTech');
    fadeLoop( $rotateTech, tech );
  } else {
    const container = document.getElementById('rotate-container');
    container.innerHTML = `During a career in film, television and live entertainment tech, I experienced firsthand many technological transitions: <span class="rotate" id="rotateTech">from cables to web GUIs.</span>`;
    const $rotateTech = $('#rotateTech');
    fadeLoop( $rotateTech, tech );
  }
};

// const resizeRotateContainerLive = function() {
//   if (window.innerWidth < newLineBreakPoint) { //  breakpoint for text to new line
//     const container = document.getElementById('rotate-container');
//     container.innerHTML = `During a career in film, television and live entertainment tech, I experienced firsthand many technological transitions: from hardware to apps.`;
//   }
// };


const resizeByline = function() {
  if (window.innerWidth < newLineBreakPoint) {
    const byline = document.getElementsByClassName('home-byline')[0];
    byline.innerHTML = "WEB DEVELOPER";
  }
};

const hidePreloader = function() {
  const $preloader = $('#preloader');
  // preloader.style.display = "none";
  $preloader.fadeOut(300);
};
