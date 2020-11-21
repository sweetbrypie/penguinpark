var turns = 0;
var world = document.getElementById('world');
function rotateWorldRight() {
    turns += 1;
    world.style.transform = 'rotate(' + (40 * turns) + 'deg)';
    world.style.transition = 'transform 1s ease-in-out';
};
function rotateWorldLeft() {
    turns -= 1;
    world.style.transform = 'rotate(' + (40 * turns) + 'deg)';
    world.style.transition = 'transform 1s ease-in-out';
};

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

function homeExitForWorld() {
    animateCSS('.leaving-home', 'slideOutUp').then((message) => {
        window.location.assign('world.html');
        document.querySelector('.leaving-home').style.display = 'none';
    });
};
var tempWorld = !!document.getElementById('entering-world') && document.getElementById('entering-world');
if (!!tempWorld) {
    tempWorld.onclick = homeExitForWorld;
}

function homeExitForAbout() {
    animateCSS('.leaving-home', 'slideOutUp').then((message) => {
        window.location.assign('about.html');
        document.querySelector('.leaving-home').style.display = 'none';
    });
};
var tempAbout = !!document.getElementById('entering-about') && document.getElementById('entering-about');
if (!!tempAbout) {
    tempAbout.onclick = homeExitForAbout;
}

function exitForHome() {
    animateCSS('.coming-home', 'slideOutDown').then((message) => {
        window.location.assign('home.html');
        document.querySelector('.coming-home').style.display = 'none';
    });
};
var tempExit = !!document.getElementById('exit-button') && document.getElementById('exit-button');
if (!!tempExit) {
    tempExit.onclick = exitForHome;
};

function hide() {
    animateCSS('.tip', 'fadeOut').then((message) => {
        document.querySelector('.tip').style.display = 'none';
    });
};
var tempTip = !!document.getElementById('tip') && document.getElementById('tip');
if (!!tempTip) {
    tempTip.onclick = hide;
};

function exitForHomeOops() {
    animateCSS('.coming-home-oops', 'fadeOut').then((message) => {
        window.location.assign('home.html');
        document.querySelector('.coming-home-oops').style.display = 'none';
    });
};
var tempExitOops = !!document.getElementById('exit-button-oops') && document.getElementById('exit-button-oops');
if (!!tempExitOops) {
    tempExitOops.onclick = exitForHomeOops;
};
