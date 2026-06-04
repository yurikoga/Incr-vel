const items = document.querySelectorAll('.pagination li.numb');

items.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' de todos
        items.forEach(i => i.classList.remove('active'));
        
        // Adiciona ao clicado
        this.classList.add('active');
        
        console.log("Página selecionada: " + this.innerText);
    });
});
