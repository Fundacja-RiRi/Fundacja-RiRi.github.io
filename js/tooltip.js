function adjustTooltip(btn) {
  const tooltip = btn.querySelector('.tooltip-text');
  tooltip.style.transform = 'translateX(-50%)'; // reset
  const rect = tooltip.getBoundingClientRect();
  const margin = 20;
  let shift = 0;

  if (rect.left < margin) {
    shift = margin - rect.left;
  } else if (rect.right > window.innerWidth - margin) {
    shift = (window.innerWidth - margin) - rect.right;
  }

  tooltip.style.transform = `translateX(calc(-50% + ${shift}px))`;
}

document.querySelectorAll('.tooltip-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => adjustTooltip(btn));
  btn.addEventListener('focus', () => adjustTooltip(btn));
  btn.addEventListener('click', () => adjustTooltip(btn));
});