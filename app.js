/* app.js — Lebu Kale Heywet Bank Accounts */

function copyAccount(id, btn) {
  const number = document.getElementById(id).textContent.trim();
  const iconCopy  = btn.querySelector('.icon-copy');
  const iconCheck = btn.querySelector('.icon-check');
  const label     = btn.querySelector('.copy-label');

  navigator.clipboard.writeText(number).then(() => {
    btn.classList.add('copied');
    iconCopy.style.display  = 'none';
    iconCheck.style.display = 'block';
    label.textContent = 'Copied!';

    setTimeout(() => {
      btn.classList.remove('copied');
      iconCopy.style.display  = '';
      iconCheck.style.display = 'none';
      label.textContent = 'Copy';
    }, 2200);
  }).catch(() => {
    /* Fallback for older browsers */
    const ta = document.createElement('textarea');
    ta.value = number;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    btn.classList.add('copied');
    iconCopy.style.display  = 'none';
    iconCheck.style.display = 'block';
    label.textContent = 'Copied!';

    setTimeout(() => {
      btn.classList.remove('copied');
      iconCopy.style.display  = '';
      iconCheck.style.display = 'none';
      label.textContent = 'Copy';
    }, 2200);
  });
}
