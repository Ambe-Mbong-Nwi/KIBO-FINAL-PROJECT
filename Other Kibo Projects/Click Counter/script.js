button1 = document.querySelector(".button1");
button2 = document.querySelector(".button2");
/* this will track the count */
var count1 = 1;
var count2 = 100;

/* add your event listener here */
button1.addEventListener("click", function(){
  document.querySelector(".h21").textContent = count1
  count1 = count1 + 1;
});

button2.addEventListener("click", function(){
  document.querySelector(".h22").textContent = count2
  count2 = count2 - 2;
});