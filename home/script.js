const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Mostra a página selecionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    } else {
        console.error(`Página com ID ${pageId} não encontrada.`);
    }
}
