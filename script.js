function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function homePageAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            markers: false,
            scrub: .3
        }
    })

    tl.to(".videodiv", {
        "--clip": "0%",
        ease: Power2,
    }, "a")

    gsap.set(".slidetext", { scale: 5 })

    tl.to(".slidetext", {
        scale: 1,
        ease: Power2,
    }, "a")

    tl.to(".lft", {
        xPercent: -5,
        stagger: .02,
        ease: Power4
    }, "b")

    tl.to(".rgt", {
        xPercent: 5,
        stagger: .02,
        ease: Power4
    }, "b")
}

function realPageAnimation() {
    gsap.to(".slide", {
        xPercent: -318,
        ease: Power4,
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })
}

function teamPageAnimation() {
    let listElem = document.querySelectorAll(".listelem");

    listElem.forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                x: gsap.utils.mapRange(0, window.innerWidth, -120, 120, dets.clientX),
                opacity: 1,
                ease: Power4,
                duration: .5
            })
        })
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: .5
            })
        })
    })

    gsap.from(listElem, {
        y: "15%",
        duration: 2,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".team",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 2
        }
    })
}

function paraPageAnimation() {
    function textPara1() {
        let clutter = "";
        document.querySelector(".textpara1").textContent.split("")
            .forEach(function (e) {
                if (e === "") clutter += `<span>&nbsp;</span>`
                clutter += `<span>${e}</span>`
            })

        document.querySelector(".textpara1").innerHTML = clutter;

        gsap.set(".textpara1 span", { opacity: .1 })
        gsap.to(".textpara1 span", {
            color: "blue",
            opacity: 1,
            stagger: .01,
            ease: Power4,
            scrollTrigger: {
                trigger: ".text-container1",
                start: "top 70%",
                end: "bottom 80%",
                scrub: .2,
            }
        })
    }
    textPara1();
    function textPara2() {
        let clutter = "";
        document.querySelector(".textpara2").textContent.split("")
            .forEach(function (e) {
                if (e === "") clutter += `<span>&nbsp;</span>`
                clutter += `<span>${e}</span>`
            })

        document.querySelector(".textpara2").innerHTML = clutter;

        gsap.set(".textpara2 span", { opacity: .1 })
        gsap.to(".textpara2 span", {
            color: "purple",
            opacity: 1,
            stagger: .01,
            ease: Power4,
            scrollTrigger: {
                trigger: ".text-container2",
                start: "top 70%",
                end: "bottom 80%",
                scrub: .2,
            }
        })
    }
    textPara2();
}

function capsulePageAnmation() {
    gsap.to(".capsule2", {
        y: 0,
        ease: Power4,
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: .3
        },
    })
}

function changeInPageColor() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                }
            })
        })
}



loco();
homePageAnimation();
realPageAnimation();
teamPageAnimation();
paraPageAnimation();
capsulePageAnmation();
changeInPageColor();