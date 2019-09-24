const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  
  // Type Method
  TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
  
    // Check if deleting
    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
    let typeSpeed = 100;
  
    if(this.isDeleting) {
      typeSpeed /= 2;
    }
  
    if(!this.isDeleting && this.txt === fullTxt) {

      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 500;
    }
  
    setTimeout(() => this.type(), typeSpeed);
  }
    
    document.addEventListener('DOMContentLoaded', initTypewriter);
    
    function initTypewriter() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
     
      new TypeWriter(txtElement, words, wait);
    }

// FOOTER PARTE AND MADE BY EMOJIS

// const currentYear = document.querySelector('#current__year')
// const madeIcon = document.querySelector('#made__icon')
// const coolIcons = ['🍕','🍔','🍺','🍷','🥃','🎸','🎺','🎮','🎨','🥓','🐱','🐶','🤣','🍟','🍪','🍩','🍰','❤️','☕️']
// let myCoolIcon;

//set current year (arrow iifi)
(() => currentYear.innerText = new Date().getFullYear())();

function changeIcon(){
    myCoolIcon = coolIcons[Math.floor(Math.random()*coolIcons.length)]
    madeIcon.innerHTML = ` ${myCoolIcon} `;

}

changeIcon();madeIcon.addEventListener('click', changeIcon);

// setInterval(changeIcon, 3000)


// DOING TRANSFORMATIONS


// (function (){
//   const divs = document.querySelectorAll('.content')
//   const box = document.querySelector('#box')
//   let text = document.getElementById('myText')

//   divs.forEach(div => {
//     div.addEventListener('mousemove', (evt) => {
//       console.log(evt)
//       box.style.transform = `scale(${evt.offsetX / 1000}`;
//       box.style.transform = `rotateY${evt.offsetY}deg)`;
//     })
//   })

// })();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#roast-io-corner-ribbon').innerHTML = '';
})

  // copy text
  // box.style.transform = `rotate(${evt.offsetX}deg)`
  // text.innerText = `X ${evt.offsetX}, and Y ${evt.offsetY}`