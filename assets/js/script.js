$(document).ready(function () {

    // Navbar menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Close navbar when scrolling + active nav link
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        let target = $(this).attr('href');

        if (target === "#" || target === "") {
            return;
        }

        if ($(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top,
            }, 500, 'linear');
        }
    });

    // Contact form - open Gmail compose
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        let name = $("input[name='name']").val();
        let email = $("input[name='email']").val();
        let phone = $("input[name='phone']").val();
        let message = $("textarea[name='message']").val();

        let subject = "Portfolio Contact Message from " + name;

        let body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message;

        let gmailLink =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=cagaangeljenefer@gmail.com" +
            "&su=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.open(gmailLink, "_blank");
    });

});

// Browser tab title
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Angel Caga";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// Smooth changing hero text, no shaky backspace
const typingText = document.querySelector(".typing-text");

const services = [
    "Research & Academic Services",
    "Documentation Services",
    "UI/UX Designer"
];

let serviceIndex = 0;

function changeTypingText() {
    if (!typingText) return;

    typingText.style.opacity = "0";

    setTimeout(function () {
        typingText.textContent = services[serviceIndex];
        typingText.style.opacity = "1";
        serviceIndex = (serviceIndex + 1) % services.length;
    }, 300);
}

changeTypingText();
setInterval(changeTypingText, 2500);

// Tilt effect
if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
}

// Scroll reveal animation
if (typeof ScrollReveal !== "undefined") {
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    srtop.reveal('.home .content h2', { delay: 200 });
    srtop.reveal('.home .content p', { delay: 200 });
    srtop.reveal('.home .content .btn', { delay: 200 });
    srtop.reveal('.home .image', { delay: 400 });

    srtop.reveal('.home .linkedin', { interval: 200 });
    srtop.reveal('.home .github', { interval: 200 });
    srtop.reveal('.home .facebook', { interval: 200 });
    srtop.reveal('.home .dev', { interval: 200 });
    srtop.reveal('.home .instagram', { interval: 200 }
        srtop.reveal('.services-card', { interval: 200 });
    );

    srtop.reveal('.about .content h3', { delay: 200 });
    srtop.reveal('.about .content .tag', { delay: 200 });
    srtop.reveal('.about .content p', { delay: 200 });
    srtop.reveal('.about .content .box-container', { delay: 200 });
    srtop.reveal('.about .content .resumebtn', { delay: 200 });

    srtop.reveal('.skills-card', { interval: 200 });
    srtop.reveal('.education .box', { interval: 200 });
    srtop.reveal('.cert-card', { interval: 200 });
    srtop.reveal('.achievement-card', { interval: 200 });
    srtop.reveal('#projects', { delay: 200 });
    srtop.reveal('.experience .timeline .container', { interval: 300 });
    srtop.reveal('.contact .container', { delay: 300 });
}

// Back to top button
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        scrollToTop();
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Certificate preview modal
function openCertificate(imagePath) {
    const modal = document.getElementById("certificateModal");
    const certificateImage = document.getElementById("certificateImage");

    if (!modal || !certificateImage) return;

    certificateImage.src = imagePath;
    modal.style.display = "flex";
}

function closeCertificate() {
    const modal = document.getElementById("certificateModal");

    if (!modal) return;

    modal.style.display = "none";
}
srtop.reveal('.pricing-card', { interval: 200 });