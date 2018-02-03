// adapted from https://publishing-project.rivendellweb.net/lazy-loading-youtube-embeds/

document.addEventListener("DOMContentLoaded",
  function() {
    let div;
    let n;
    let v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = loadThumb(v[n].dataset.id);
        div.onclick = loadIframe;
        v[n].appendChild(div);
    }
  });

function loadThumb(id) {
  let thumb = '<img class="youtube-thumb" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">';
  let play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
};

function loadIframe() {
  let iframe = document.createElement("iframe");
  let embed = "https://www.youtube.com/embed/ID?autoplay=1&rel=0&amp;showinfo=0"; // amended for showing no info
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("width", "100%"); // added
  iframe.setAttribute("height", "100%"); // added
  this.parentNode.replaceChild(iframe, this);
  }
