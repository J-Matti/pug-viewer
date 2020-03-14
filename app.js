const getPugs = function() {
  fetch('https://dog.ceo/api/breed/pug/images/random/3')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const pugContainer = document.querySelector('.pug-container')
    data.message.forEach(img => {
      pugContainer.innerHTML += `<img src='${img}'>` 
    });
  });
}

document.addEventListener('DOMContentLoaded', getPugs)
document.getElementById('pug-refresh').addEventListener('click', getPugs)