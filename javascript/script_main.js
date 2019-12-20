function mobileMenuShow() {
    var x = document.getElementsByClassName("mobile-menu")[0]
    var navbar = document.getElementsByClassName("navbar")[0]
    var hamburger = document.getElementsByClassName("hamburger")[0].children
    var logo = document.getElementsByClassName("navbar-logo")[0].firstElementChild
    var offsetY = window.pageYOffset
    if (x.classList.contains("mobile-menu-show")) {
        x.classList.remove("mobile-menu-show")
        navbar.classList.add("navbar-white")
        if (offsetY <= 20) {
            navbar.classList.remove("navbar-white")
        }
        document.body.style.overflow = 'visible'
    }
    else {
        navbar.classList.remove("navbar-white")
        x.classList.add("mobile-menu-show")
        document.body.style.overflow = 'hidden'
    }
}

document.addEventListener("scroll", checkAddWhite)

function checkAddWhite() {
    var offsetY = window.pageYOffset;
    var navbar = document.getElementsByClassName("navbar")[0]
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0]
    var hamburger = document.getElementsByClassName("hamburger")[0].children
    var logo = document.getElementsByClassName("navbar-logo")[0].firstElementChild
    if (offsetY > 20 & (!mobileMenu.classList.contains("mobile-menu-show"))) {
        navbar.classList.add("navbar-white")
    }
    else if (offsetY <= 20 & navbar.classList.contains("navbar-white")) {
        navbar.classList.remove("navbar-white")
    }
}

function hamburgerOnClickAnimation() {
    var x = document.getElementsByClassName("mobile-menu")[0]
    var hamburger = document.getElementsByClassName("hamburger")[0]
    if (x.classList.contains("mobile-menu-show")) {
        hamburger.classList.add("navbar-hamburger-opened")
    }
    else {
        hamburger.classList.remove("navbar-hamburger-opened")
    }
}

window.addEventListener("resize", checkMobileMenuShowed)

function checkMobileMenuShowed() {
    if (document.body.clientWidth > 980) {
        var x = document.getElementsByClassName("mobile-menu")[0]
        x.classList.remove("mobile-menu-show")
        hamburgerOnClickAnimation();
        document.body.style.overflow = 'visible';
    }
}

window.addEventListener('load', function () {
    fadeOutEffect()
    // document.getElementsByClassName("loader-wrapper")[0].classList.add("hide")
});

function fadeOutEffect() {
    var fadeTarget = document.getElementsByClassName("loader-wrapper")[0]
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
            setInterval(() => { fadeTarget.style.display = "none" }, 600)
        } else {
            clearInterval(fadeEffect);
        }
    }, 30)
}