// Wait until DOM is parsed
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const box = document.getElementById('box');
  const toggleBtn = document.getElementById('toggle-btn');
  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modal = document.getElementById('modal');

  // --- Part 2: functions demonstrating params, return values, scope ---

  // changeColor: takes an element and a color, returns a message
  function changeColor(element, color) {
    if (!element) return 'changeColor failed: element not found';
    element.style.backgroundColor = color;
    return `Color changed to ${color}`;
  }

  // scaleBox: uses a local variable (local scope) and returns the transform string
  function scaleBox(factor) {
    if (!box) return null;
    const transformValue = `scale(${factor})`; // local variable
    box.style.transform = transformValue;
    return transformValue;
  }

  // quick test logs (safe because DOM is ready)
  console.log(changeColor(box, 'lightgreen'));
  console.log('scaleBox returned:', scaleBox(1.02));

  // --- Part 3: combine CSS & JS ---

  // Toggle box visible/hidden by class switching
  toggleBtn.addEventListener('click', () => {
    // ensure classes are present/consistent
    box.classList.toggle('visible');
    box.classList.toggle('hidden');
  });

  // Modal open/close
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  });

  // If user didn't include the close button for some reason, guard it
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  // click outside modal-content closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});
