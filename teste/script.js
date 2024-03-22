const formContainer = document.getElementById('form-container');
const listContainer = document.getElementById('list-container');
const newProductBtn = document.getElementById('new-product-btn');

newProductBtn.addEventListener('click', () => {
  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
    formContainer.style.display = 'block';
    formContainer.style.opacity = '0';
    setTimeout(() => {
      formContainer.style.opacity = '1';
    }, 100);
    listContainer.style.display = 'none';
  } else {
    formContainer.style.opacity = '0';
    setTimeout(() => {
      formContainer.style.display = 'none';
      listContainer.style.display = 'block';
    }, 300);
  }
});