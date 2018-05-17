var pos = 100;
var step = 4;
var incr = step;
var skip = false;
var screwIt = false;
var nodes = document.querySelectorAll(".item");
var raf = null;
var seti = null;

function rafon() {
  reset();
  function anim() {
    if (pos > 200 && incr>0) {
      incr = -step;
    } else if (pos < 1 && incr<0) {
      incr = step;
    }
    pos += incr;

    if (!skip) {
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.left=""+pos+"px";
      };
      skip = screwIt;
    } else {
      skip = false;
    }
    raf = requestAnimationFrame(anim);
  }
  raf = requestAnimationFrame(anim);
}

function toggle(item) {
  screwIt = !screwIt;
  if (screwIt) {
    item.innerHTML = "Switch to 60 FPS"
  } else {
    item.innerHTML = "Switch to 30 FPS"
  }
}

function switchClass(ele) {

  var item = document.querySelector("div.item");
  item.classList.toggle("ball");
  item.classList.toggle("simple");

  if (item.classList.contains("ball")) {
    ele.innerHTML = "Keep it simple"
  } else {
    ele.innerHTML = "Make it fancy"
  }
}

var arrHeavy = [];

function upit(e) {
  for (var i = 0; i < 5000000; i++) {
    arrHeavy.push({a:"randomText",b:"randomText"});
  };
  console.log(arrHeavy.length);
}

function clearit(e) {
  arrHeavy = [];
  console.log(arrHeavy.length);
}

function explodeDom(e) {
  for (var i = 0; i < 5000000; i++) {
    // add child elements to ball
  };
  console.log(arrHeavy.length);
}

function reset() {
  screwIt=false;
  if (raf) cancelAnimationFrame(raf);
  if (seti) clearInterval(seti);
  document.querySelector(".header").classList.remove("show");
  document.querySelector("body").classList.remove("tall");
  document.querySelector(".header").classList.remove("hint");
  arrHeavy = [];
  nodes[0].classList.remove("wc");
}

function setion(e) {
  reset();
  seti = setInterval(function(){
    if (pos > 200 && incr>0) {
      incr = -step;
    } else if (pos < 10 && incr<0) {
      incr = step;
    }
    pos += incr;

    if (!skip) {
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.left=""+pos+"px";
      };
      skip = screwIt;
    } else {
      skip = false;
    }
  },16);
}

function trashDom() {
  reset();
  seti = setInterval(function(){
    nodes = document.querySelectorAll(".item");
    for (var i = 0; i < nodes.length; i++) {
      pos = parseInt(nodes[i].offsetLeft);
      pos = nodes[i].offsetLeft;
      if (pos > 200 && incr>0) {
        incr = -step;
      } else if (pos <= 0 && incr<0) {
        incr = step;
      }
      pos += incr/2;
      nodes[i].style.left=""+pos+"px";
      pos = parseInt(nodes[i].offsetLeft)
      pos += incr/2;
      nodes[i].style.left=""+pos+"px";
    };
  },16);
}

function layerit() {
  reset();
  nodes = document.querySelectorAll(".item");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.left = "0px";
    nodes[i].classList.add("keya");
  };
}

function layeroff() {
  reset();
  nodes = document.querySelectorAll(".item");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].classList.remove("keya");
  };
  rafon();
}

function addBar() {
  document.querySelector(".header").classList.add("show");
  document.querySelector("body").classList.add("tall");
}

function layerBar(ele) {
  if (document.querySelector(".header"))
    document.querySelector(".header").classList.toggle("hint");
  nodes[0].classList.toggle("wc");
  if (nodes[0].classList.contains("wc")) {
    ele.innerHTML="rm Hint"
  } else {
    ele.innerHTML="Add Hint"
  }
}
