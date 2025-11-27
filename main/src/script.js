(function () {
  const steps = document.querySelectorAll('ol li');
  steps.forEach((step, index) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = index + 1;
    step.prepend(badge);
  });

  console.log('Workspace starter ready to build on.');
})();
