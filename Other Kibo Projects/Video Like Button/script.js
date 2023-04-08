/* Write your solution here */

button = document.querySelector("button")

button.addEventListener("click", function() {
  console.log("clicked")
  document.querySelector("span.like-count").innerText = "1024"
  document.querySelector('button').disabled = true;
})