document.addEventListener('DOMContentLoaded', () => {
  const dateDisplay = document.getElementById('todayDate');

  if (dateDisplay) {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    dateDisplay.textContent = formatted;
  }

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuItems.forEach((card) => card.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
});
