function toggleContent(index) {
  const contents = document.querySelectorAll('.timeline-content');

  contents.forEach((content, i) => {
    if (i === index) {
      content.classList.toggle('show');
    } else {
      content.classList.remove('show');
    }
  });
}

function toggleStep(index) {
  const steps = document.querySelectorAll('.step-content');

  steps.forEach((step, i) => {
    if (i === index) {
      step.classList.toggle('show');
    } else {
      step.classList.remove('show');
    }
  });
}
