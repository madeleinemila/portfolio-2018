// adapted from https://publishing-project.rivendellweb.net/lazy-loading-youtube-embeds/




document.addEventListener("DOMContentLoaded", function() {
    // ******* youtube ***********
    let divYT;
    let vYT = document.getElementsByClassName("youtube-player");
    for (let i = 0; i < vYT.length; i++) {
        divYT = document.createElement("div");
        divYT.setAttribute("data-id", vYT[i].dataset.id);
        divYT.innerHTML = loadThumb(vYT[i].dataset.id);
        divYT.onclick = loadIframe;
        vYT[i].appendChild( divYT );
    }
    // ********* vimeo ************
    // let div;
    // let v = document.getElementsByClassName("vimeo-player")[0];
    // div = document.createElement("div");
    // div.setAttribute("data-id", v.dataset.id);
    // div.setAttribute("data-thumbid", v.dataset.thumbid);
    // div.innerHTML = loadThumbVimeo(v.dataset.thumbid);
    // v.appendChild(div);

    // function loadIframeVimeo() {
    //   let iframe = document.createElement("iframe");
    //   let embed = "https://player.vimeo.com/video/ID";
    //   iframe.setAttribute("src", embed.replace("ID", div.dataset.id));
    //   iframe.setAttribute("frameborder", "0");
    //   iframe.setAttribute("webkitallowfullscreen", "1");
    //   iframe.setAttribute("mozallowfullscreen", "1");
    //   iframe.setAttribute("allowfullscreen", "1");
    //   iframe.setAttribute("width", "640px");
    //   iframe.setAttribute("height", "360px");
    //   div.parentNode.replaceChild(iframe, div);
    // }

    // $('#thumb-dd').on('click', function() {
    //     loadIframeVimeo();
    // })
});


// ********* youtube heloers ************

function loadThumb( id ) {
  let thumb = '<img class="youtube-thumb" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">';
  let play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function loadIframe() {
  let iframe = document.createElement("iframe");
  let embed = "https://www.youtube.com/embed/ID?autoplay=1&rel=0&amp;showinfo=0";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  this.parentNode.replaceChild(iframe, this);
}


// ******* vimeo helpers ************
// function loadThumbVimeo( id ) {
//   let thumb = '<img class="vimeo-thumb" src="http://i.vimeocdn.com/video/ID.png">';
//   let play = '<div class="play"></div>';
//   return thumb.replace("ID", id) + play;
// }
