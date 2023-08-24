const telegramUser = document.getElementById('telegram-text');
const emailAddress = document.getElementById('email-text');

function notification(element: HTMLElement) {
  let timeout = setTimeout(() => {
    element.classList.remove('show');
    clearTimeout(timeout);
  }, 1300);
}

telegramUser?.addEventListener('click', (e) => {
  let element = e.target as HTMLSpanElement;
  let popup = document.getElementById('popuptext2') as HTMLSpanElement;
  popup.classList.toggle('show');

  notification(popup);

  navigator.clipboard.writeText(
    (element.textContent || '').trim().toString().replace('Copied!', '')
  );
});

emailAddress?.addEventListener('click', (e) => {
  let element = e.target as HTMLSpanElement;
  let popup = document.getElementById('popuptext1') as HTMLSpanElement;
  popup.classList.toggle('show');

  notification(popup);

  navigator.clipboard.writeText(
    (element.textContent || '').trim().toString().replace('Copied!', '')
  );
});
