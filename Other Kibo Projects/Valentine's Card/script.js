/* 

This is the JavaScript that makes the card animation work!

Be careful if you decide to edit it, because you can break the card animation.

*/

function open_card() {
    document.getElementById('outside').classList.add('open-card');
  }
  
  function close_card() {
    document.getElementById('outside').classList.remove('open-card');
  }