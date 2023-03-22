let TotalItems = document.querySelectorAll('.item')

for (let ImageItem of TotalItems) {
  ImageItem.addEventListener('click', () => {
    let currentlySelected = document.querySelector('.selected')
    currentlySelected.classList.remove('selected')        // Hiding the clicked item
    ImageItem.classList.add('selected')        //// Update the selected-display to show the newly selected image info 
  
    let selectedDisplay = document.querySelector('#selected-display');
    
    let selectedDisplayImage = selectedDisplay.querySelector('img');
    selectedDisplayImage.src = ImageItem.querySelector('img').src
    
    let selectedDisplayH2 = selectedDisplay.querySelector('h2')
    selectedDisplayH2.innerText = ImageItem.querySelector('h2').innerText
  })
}