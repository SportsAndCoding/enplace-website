// src/components/videoModal.js
import '../styles/components/videoModal.scss';

export default function VideoModal() {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.id = 'video-modal';

    modal.innerHTML = `
    <div class="video-modal__backdrop"></div>
    <div class="video-modal__container">
      <button class="video-modal__close" aria-label="Close video">&times;</button>
      <div class="video-modal__player" id="video-modal-player">
        <!-- Vimeo embed injected here -->
      </div>
    </div>
  `;

    return modal;
}

// Open modal with specific Vimeo video ID
export function openVideoModal(vimeoId) {
    const modal = document.getElementById('video-modal');
    const playerContainer = document.getElementById('video-modal-player');

    if (!modal || !playerContainer) return;

    // Inject Vimeo embed
    playerContainer.innerHTML = `
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe 
        src="https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        referrerpolicy="strict-origin-when-cross-origin" 
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        title="En Place Video">
      </iframe>
    </div>
  `;

    modal.classList.add('video-modal--open');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Close modal and stop video
export function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const playerContainer = document.getElementById('video-modal-player');

    if (!modal) return;

    modal.classList.remove('video-modal--open');
    document.body.style.overflow = ''; // Restore scroll

    // Clear iframe to stop video
    if (playerContainer) {
        playerContainer.innerHTML = '';
    }
}

// Initialize event listeners (call once after mounting)
export function initVideoModal() {
    const modal = document.getElementById('video-modal');
    if (!modal) return;

    const backdrop = modal.querySelector('.video-modal__backdrop');
    const closeBtn = modal.querySelector('.video-modal__close');

    // Close on backdrop click
    backdrop?.addEventListener('click', closeVideoModal);

    // Close on X button
    closeBtn?.addEventListener('click', closeVideoModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideoModal();
    });
}