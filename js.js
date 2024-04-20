
function processarInput() {
    // Obter o valor do input
    var valorInput = document.getElementById("meuInput").value;
    alert('Abrir nova guia?')
    // Abrir uma nova página com o valor do input na URL
    window.open("https://www.registrocom.com/isavail_result.jsf?radical=" + valorInput, "_blank");
}

function scrollParaSeccao(seccaoId) {
    var seccao = document.getElementById(seccaoId);
    if (seccao) {
        seccao.scrollIntoView({ behavior: "smooth" });
    }
}

// Adicionar event listeners para links de navegação
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-bar a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            var seccaoId = this.getAttribute("href").substring(1);
            scrollParaSeccao(seccaoId);
        });
    }
});