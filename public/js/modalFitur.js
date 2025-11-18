document.addEventListener('DOMContentLoaded', () => {
    // Masukkan struktur modal ke dalam div #modalFitur
    document.getElementById('modalFitur').innerHTML = `
      <div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content text-center p-3 border-0 rounded-4">
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>
            <img id="modalImg" src="" class="img-fluid rounded-3 my-3" alt="">
            <h5 id="modalTitle" class="fw-semibold"></h5>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.pop-up').forEach(card => {
      card.onclick = e => {
        e.preventDefault();
        document.getElementById('modalImg').src = card.dataset.img;
        document.getElementById('modalTitle').textContent = card.dataset.title;
        new bootstrap.Modal(document.getElementById('myModal')).show();
      };
    });
  });
  