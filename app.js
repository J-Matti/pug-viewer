const getPugs = function() {
  fetch('https://dog.ceo/api/breed/pug/images/random/3')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const pugContainer = document.querySelector('.pug-container')
    data.message.forEach(img => {
      pugContainer.innerHTML += `<img class='pug-img' src='${img}'>` 
    });
  });
}

const refreshPugs = function() {
  fetch('https://dog.ceo/api/breed/pug/images/random/3')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const pugImg = document.querySelectorAll('.pug-img')
    pugImg.forEach((img, index) => {
      img.src = data.message[index]
    });
  });
}

document.addEventListener('DOMContentLoaded', getPugs)
document.getElementById('pug-refresh').addEventListener('click', refreshPugs)