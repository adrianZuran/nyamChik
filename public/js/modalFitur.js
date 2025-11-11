(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const modalContainer = document.getElementById('modalFitur');
  
      modalContainer.innerHTML = `
        <div class="modal fade" id="dynamicModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-4">
              <div class="d-flex justify-content-end p-2">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <img id="modalImg" src="" class="img-fluid rounded-3 mb-3" alt="">
                <h5 class="modal-title" id="modalTitle"></h5>
              </div>
            </div>
          </div>
        </div>
      `;
  
      const cards = document.querySelectorAll('.menu-card');
      cards.forEach(card => {
        card.addEventListener('click', e => {
          e.preventDefault();
          const title = card.dataset.title;
          const imgSrc = card.dataset.img;
          document.getElementById('modalTitle').textContent = title;
          document.getElementById('modalImg').src = imgSrc;
          const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
          modal.show();
        });
      });
    });
  })();
  