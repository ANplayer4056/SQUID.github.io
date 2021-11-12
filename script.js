
window.addEventListener("scroll", function (evt) {
    if (window.scrollY > 0) {
        document.querySelector("#navbar").classList.remove("navbar-top")
    } else {
        document.querySelector("#navbar").classList.add("navbar-top")
    }
})

let s = skrollr.init();