document.querySelectorAll('.dropdown-toggle-btn').forEach(button => {
    const targetId = button.getAttribute('data-bs-target');
    const collapseElement = document.querySelector(targetId);
    const toggleIcon = button.querySelector('.toggle-icon');

    if (collapseElement && toggleIcon) {
      collapseElement.addEventListener('show.bs.collapse', () => {
        toggleIcon.classList.add('rotate');
      });

      collapseElement.addEventListener('hide.bs.collapse', () => {
        toggleIcon.classList.remove('rotate');
      });
    }
  });