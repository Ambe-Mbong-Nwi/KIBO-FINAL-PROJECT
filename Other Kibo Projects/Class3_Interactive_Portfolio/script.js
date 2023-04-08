// Add your code here

button = document.querySelector("button");

button.addEventListener('click', () => {

  alert("WOW! Thank you for hiring me");
  document.querySelector('button').disabled = true;
  document.querySelector('button').innerText = "Hired"
});

