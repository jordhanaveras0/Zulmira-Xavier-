const modalEventos = document.querySelector('#btnEventos');
const modalCursos = document.querySelector('#btnCursos');
const modalHistoria = document.querySelector('#btnHistoria');

const modalEventosContainer = document.querySelector('#modal-container-eventos');
const modalCursosContainer = document.querySelector('#modal-container-cursos');
const modalHistoriaContainer = document.querySelector('#modal-container-historia');

// Adiciona eventos de clique para abrir ou fechar o modal correspondente
modalEventos.addEventListener('click', () => {
    toggleModal(modalEventosContainer);
});
modalCursos.addEventListener('click', () => {
    toggleModal(modalCursosContainer);
});
modalHistoria.addEventListener('click', () => {
    toggleModal(modalHistoriaContainer);
});

// Função que abre ou fecha o modal
function toggleModal(modal) {
    // Verifica se o modal já está visível
    if (modal.classList.contains('esconder')) {
        // Se o modal estiver escondido, exibe
        modal.classList.remove('esconder');
    } else {
        // Se o modal já estiver visível, esconde
        modal.classList.add('esconder');
    }
}

// Evento para fechar o modal quando clicar fora dele ou no botão fechar
[modalEventosContainer, modalCursosContainer, modalHistoriaContainer].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.id === modal.id || e.target.id === "fechar") {
            modal.classList.add('esconder');
            localStorage.fechaModal = modal.id;
        }
    });
});