document.addEventListener('DOMContentLoaded', () => {
  const dateDisplay = document.getElementById('todayDate');
  if (dateDisplay) {
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
    });
  }

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    const chooseButton = item.querySelector('button');
    const selectItem = () => {
      menuItems.forEach((card) => {
        card.classList.remove('selected');
        card.querySelector('button')?.setAttribute('aria-pressed', 'false');
      });
      item.classList.add('selected');
      chooseButton?.setAttribute('aria-pressed', 'true');
    };
    item.addEventListener('click', selectItem);
    chooseButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      selectItem();
    });
  });

  const qrImage = document.getElementById('menuQr');
  const qrLoading = document.getElementById('qrLoading');
  const qrDownload = document.getElementById('qrDownload');
  if (qrImage && qrDownload) {
    const pageUrl = window.location.href.split('#')[0];
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&format=png&data=${encodeURIComponent(pageUrl)}`;
    qrImage.addEventListener('load', () => { if (qrLoading) qrLoading.hidden = true; });
    qrImage.addEventListener('error', () => {
      if (qrLoading) qrLoading.textContent = 'QR code could not load. Check your internet connection.';
    });
    qrImage.src = qrUrl;
    qrDownload.href = qrUrl;
  }
});
