// Função para baixar o CV (precisa estar no escopo global)
function downloadCV() {
    const link = document.createElement("a");
    link.href = "cv.docx"; // Certifique-se de que o arquivo está no local correto
    link.download = "CV.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress");

    // Menu responsivo
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Função para animar as barras de progresso
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // Detecta quando a seção de habilidades está visível na tela
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Scroll suave para a seção de habilidades
    const skillsLink = document.querySelector("a[href='#skills']");
    if (skillsLink) {
        skillsLink.addEventListener("click", function (event) {
            event.preventDefault();
            skillsSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
