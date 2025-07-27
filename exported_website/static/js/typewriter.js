var item = 0;
var texts = ['Let\'s go do something'];
texts.push('Let\'s go to the beach');
texts.push('Let\'s connect people offline');
texts.push('Let\'s play boardgames');
texts.push('Let\'s binge an entire series');
texts.push('Let\'s get off our phones');
texts.push('Let\'s play Mario Kart on energy drinks');
texts.push('Let\'s look at the stars and contemplate life');
var i = 0;
var speed = 75;
var reverse = false;
var isDeleting = false; // Indicates if the current operation is deleting

(function typeWriter() {
  if (i == 0 && !isDeleting) {
    // If starting a new text and not in deleting mode, get the next text
    txt = texts[item];
    document.getElementById('header-63-429221').getElementsByTagName('h1')[0].innerHTML = '';
    reverse = false;
  }

  if (!reverse) {
    // Typing forward
    document.getElementById('header-63-429221').getElementsByTagName('h1')[0].innerHTML += txt.charAt(i);
    i++;
    if (i == txt.length) {
      // Once the end of the text is reached, start deleting
      reverse = true;
      isDeleting = true;
      // Add a pause before starting to delete
      setTimeout(typeWriter, speed * 9);
      return;
    }
  } else {
    // Deleting characters
    var currentText = document.getElementById('header-63-429221').getElementsByTagName('h1')[0].innerHTML;
    document.getElementById('header-63-429221').getElementsByTagName('h1')[0].innerHTML = currentText.substring(0, currentText.length - 1);
    i--;
    if (i == 0) {
      // Once all characters are deleted
      reverse = false;
      isDeleting = false;
      // Move to the next text
      item = (item + 1) % texts.length;
      // Set to space
document.getElementById('header-63-429221').getElementsByTagName('h1')[0].innerHTML = '&nbsp;';
    }
  }
  setTimeout(typeWriter, isDeleting ? speed / 2 : speed); // Speed up the deletion for a more natural effect
})();
