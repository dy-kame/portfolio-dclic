// script.js

function validateForm() {
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  
  if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Tous les champs doivent être remplis !';
      formMessage.style.color = 'red';
      return false;
  } else {
      formMessage.textContent = 'Merci pour votre message, ' + name + '! Il a été envoyé avec succès.';
      formMessage.style.color = 'green';
      
      document.getElementById('contactForm').reset();
      return true;
  }
}