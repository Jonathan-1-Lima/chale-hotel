// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', function () {

  // ==========================
  // FORMULÁRIO DE CONTATO
  // ==========================
  const formContato = document.querySelector('#form-contato');

  if (formContato) {
    formContato.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.querySelector('#nome').value.trim();
      const email = document.querySelector('#email').value.trim();
      const mensagem = document.querySelector('#mensagem').value.trim();

      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      alert('Mensagem enviada com sucesso!');
      formContato.reset();
    });
  }

  // ==========================
  // FORMULÁRIO DE RESERVA
  // ==========================
  const formReserva = document.querySelector('#form-reserva');

  if (formReserva) {
    formReserva.addEventListener('submit', function (e) {
      e.preventDefault();

      const checkin = document.querySelector('#checkin').value;
      const checkout = document.querySelector('#checkout').value;

      if (checkin === '' || checkout === '') {
        alert('Selecione as datas de check-in e check-out.');
        return;
      }

      if (checkin >= checkout) {
        alert('A data de check-out deve ser maior que o check-in.');
        return;
      }

      alert('Reserva realizada com sucesso!');
      formReserva.reset();
    });
  }

  // ==========================
  // MODAL DE IMAGEM (CORRIGIDO)
  // ==========================
  const imagens = document.querySelectorAll('.abrir-imagem img');
  const modal = document.getElementById('modal-imagem');
  const imagemModal = document.getElementById('imagem-modal');
  const fechar = document.getElementById('fechar-modal');

  imagens.forEach(imagem => {
    imagem.addEventListener('click', function (e) {
      e.preventDefault();
      imagemModal.src = this.src;
      modal.style.display = 'flex';
    });
  });

  fechar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

});
