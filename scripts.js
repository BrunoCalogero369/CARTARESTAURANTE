const viewButtons = document.querySelectorAll('.view-button');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const productsList = document.getElementById(`${targetId}-list`);
    
    productsList.classList.toggle('hidden');
    if (!productsList.classList.contains('hidden')) {
      productsList.style.opacity = 1;
      productsList.style.maxHeight = '1000px';
    } else {
      productsList.style.opacity = 0;
      productsList.style.maxHeight = '0';
    }
  });
});
