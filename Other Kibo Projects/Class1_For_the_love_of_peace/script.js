button = document.querySelector('button'); 

button.addEventListener('click', () => {
   /* Add your code here */
  document.querySelector('img#war').classList.add('hidden')
  document.querySelector('img#peace').classList.remove('hidden')
  document.querySelector('button').innerText = "PEACE REIGNS"
});
