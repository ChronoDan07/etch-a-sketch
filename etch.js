let gridvalue = document.getElementsByClassName('grid-val');

function updateGrid(){
    gridvalue[0].textContent = `${getInputValue()} x ${getInputValue()}`;
}


function getInputValue(){
    let gridranges = document.getElementById("gridrange").value;
    return Math.floor(gridranges);
}

function getColor(){
    let cp = document.getElementById('color-pick').value;
    // console.log(cp)
    return cp;
}

function createDivs() {
  const size = 700 / getInputValue();
  // gridOn = false
  if (getInputValue() <= 0 || getInputValue() > 100 || isNaN(getInputValue()) ){
      alert("Number must be an integer greater than 0 and less or equal than 100")
  }
  else {
  const secont = document.getElementById('sec-container');
  while (secont.firstChild) {
      secont.removeChild(secont.firstChild);
  }

  for (let i = 0; i < getInputValue()*getInputValue(); i++) {
    const divs = document.createElement('div');
    divs.classList.add('divses')
    divs.style.width = size + 'px';
    divs.style.height = size + 'px';
    divs.style.backgroundColor = '#ffffff';
    secont.appendChild(divs);

  }}


  const alldivs = document.querySelectorAll('.divses');
  let mouseDown;

  function dodge(col) {
  let r = letTonum(col[1]) * 16 + letTonum(col[2]) * 1;
  let g = letTonum(col[3]) * 16 + letTonum(col[4]) * 1;
  let b = letTonum(col[5]) * 16 + letTonum(col[6]) * 1;
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  l += 10;

  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r1, g1, b1;
  if (h >= 0 && h < 60) {
    r1 = c;
    g1 = x;
    b1 = 0;
  } else if (h >= 60 && h < 120) {
    r1 = x;
    g1 = c;
    b1 = 0;
  } else if (h >= 120 && h < 180) {
    r1 = 0;
    g1 = c;
    b1 = x;
  } else if (h >= 180 && h < 240) {
    r1 = 0;
    g1 = x;
    b1 = c;
  } else if (h >= 240 && h < 300) {
    r1 = x;
    g1 = 0;
    b1 = c;
  } else {
    r1 = c;
    g1 = 0;
    b1 = x;
  }
  r1 = Math.round((r1 + m) * 255);
  g1 = Math.round((g1 + m) * 255);
  b1 = Math.round((b1 + m) * 255);

  return `rgb(${r1}, ${g1}, ${b1})`;
}
function burn(col) {
  let r = letTonum(col[1]) * 16 + letTonum(col[2]) * 1;
  let g = letTonum(col[3]) * 16 + letTonum(col[4]) * 1;
  let b = letTonum(col[5]) * 16 + letTonum(col[6]) * 1;
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  l -= 10;

  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r1, g1, b1;
  if (h >= 0 && h < 60) {
    r1 = c;
    g1 = x;
    b1 = 0;
  } else if (h >= 60 && h < 120) {
    r1 = x;
    g1 = c;
    b1 = 0;
  } else if (h >= 120 && h < 180) {
    r1 = 0;
    g1 = c;
    b1 = x;
  } else if (h >= 180 && h < 240) {
    r1 = 0;
    g1 = x;
    b1 = c;
  } else if (h >= 240 && h < 300) {
    r1 = x;
    g1 = 0;
    b1 = c;
  } else {
    r1 = c;
    g1 = 0;
    b1 = x;
  }
  r1 = Math.round((r1 + m) * 255);
  g1 = Math.round((g1 + m) * 255);
  b1 = Math.round((b1 + m) * 255);

  return `rgb(${r1}, ${g1}, ${b1})`;
}


  const rgbToHex = (rgb) => {
    const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (hex) {
      return "#" + 
        ("0" + parseInt(hex[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(hex[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(hex[3],10).toString(16)).slice(-2);
    }
    return rgb;
  };
  
  
  alldivs.forEach(div => {
  div.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const hexColor = rgbToHex(e.target.style.backgroundColor);
    if(rngOn){
      div.style.backgroundColor = getRandomColor();
  }
    else if(dodgeOn){
      div.style.backgroundColor = dodge(hexColor);
    }
    else if(burnOn){
      div.style.backgroundColor = burn(hexColor);
    }
    else if(eraseOn){
      div.style.backgroundColor = eraser();
    }
    else div.style.backgroundColor = Finalrgb();
    mouseDown = true;
  });
  div.addEventListener('mouseup', () => {
    mouseDown = false;
  });
  div.addEventListener('mouseover', (e) => {
    
    if (mouseDown) {
      const hexColor = rgbToHex(e.target.style.backgroundColor);
      if(rngOn){
        div.style.backgroundColor = getRandomColor();
    }
      else if(dodgeOn){
        div.style.backgroundColor = dodge(hexColor);
      }
      else if(burnOn){
        div.style.backgroundColor = burn(hexColor);
      }
      else if(eraseOn){
        div.style.backgroundColor = eraser();
      }
      else div.style.backgroundColor = Finalrgb();
    }
  });
});}

function initialize() {
  const size = 700 / getInputValue();
  // gridOn = false
  if (getInputValue() <= 0 || getInputValue() > 100 || isNaN(getInputValue()) ){
      alert("Number must be an integer greater than 0 and less or equal than 100")
  }
  else {
  const secont = document.getElementById('sec-container');
  while (secont.firstChild) {
      secont.removeChild(secont.firstChild);
  }

  for (let i = 0; i < getInputValue()*getInputValue(); i++) {
    const divs = document.createElement('div');
    divs.classList.add('divses')
    divs.style.width = size + 'px';
    divs.style.height = size + 'px';
    divs.style.backgroundColor = '#ffffff';
    secont.appendChild(divs);

  }}


  const alldivs = document.querySelectorAll('.divses');
  let mouseDown;

  function dodge(col) {
    let r = letTonum(col[1]) * 16 + letTonum(col[2]) * 1;
    let g = letTonum(col[3]) * 16 + letTonum(col[4]) * 1;
    let b = letTonum(col[5]) * 16 + letTonum(col[6]) * 1;
    r /= 255;
    g /= 255;
    b /= 255;
  
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  
    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0) h += 360;
  
    l = (cmax + cmin) / 2;
  
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    l += 10;
  
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r1, g1, b1;
    if (h >= 0 && h < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (h >= 60 && h < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (h >= 120 && h < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (h >= 180 && h < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (h >= 240 && h < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }
    r1 = Math.round((r1 + m) * 255);
    g1 = Math.round((g1 + m) * 255);
    b1 = Math.round((b1 + m) * 255);
  
    return `rgb(${r1}, ${g1}, ${b1})`;
  }
  function burn(col) {
    let r = letTonum(col[1]) * 16 + letTonum(col[2]) * 1;
    let g = letTonum(col[3]) * 16 + letTonum(col[4]) * 1;
    let b = letTonum(col[5]) * 16 + letTonum(col[6]) * 1;
    r /= 255;
    g /= 255;
    b /= 255;
  
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  
    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0) h += 360;
  
    l = (cmax + cmin) / 2;
  
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    l -= 10;
  
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r1, g1, b1;
    if (h >= 0 && h < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (h >= 60 && h < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (h >= 120 && h < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (h >= 180 && h < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (h >= 240 && h < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }
    r1 = Math.round((r1 + m) * 255);
    g1 = Math.round((g1 + m) * 255);
    b1 = Math.round((b1 + m) * 255);
  
    return `rgb(${r1}, ${g1}, ${b1})`;
  }
  
  const rgbToHex = (rgb) => {
    const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (hex) {
      return "#" + 
        ("0" + parseInt(hex[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(hex[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(hex[3],10).toString(16)).slice(-2);
    }
    return rgb;
  };
  
  alldivs.forEach(div => {
  div.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const hexColor = rgbToHex(e.target.style.backgroundColor);
    if(rngOn){
      div.style.backgroundColor = getRandomColor();
  }
    else if(dodgeOn){
      div.style.backgroundColor = dodge(hexColor);
    }
    else if(burnOn){
      div.style.backgroundColor = burn(hexColor);
    }
    else if(eraseOn){
      div.style.backgroundColor = eraser();
    }
    else div.style.backgroundColor = Finalrgb();
    mouseDown = true;
  });
  div.addEventListener('mouseup', () => {
    mouseDown = false;
  });
  div.addEventListener('mouseover', (e) => {
    const hexColor = rgbToHex(e.target.style.backgroundColor);
    if (mouseDown) {
      if(rngOn){
        div.style.backgroundColor = getRandomColor();
    }
      else if(dodgeOn){
        div.style.backgroundColor = dodge(hexColor);
      }
      else if(burnOn){
        div.style.backgroundColor = burn(hexColor);
      }
      else if(eraseOn){
        div.style.backgroundColor = eraser();
      }
      else div.style.backgroundColor = Finalrgb();
    }
});
});}

/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
const btn = document.getElementById('grid-togg');
const divs = document.getElementsByClassName('divses');
let gridOn = false;

btn.addEventListener('click', () => {
  if (gridOn) {
    btn.style.backgroundColor = "white";
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.border = 'none';
    }
    gridOn = false;
  } else {
    btn.style.backgroundColor = "#1F2937";
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.border = '1px solid gray';
    }
    gridOn = true;
  }
});
/////////////////////////////////////////////////////////////////
// RNG BUTTON

let rngOn = false;
const rnd = document.getElementById('random');
document.getElementById('random').addEventListener('click', () => {
  rngOn = !rngOn;
  if(rngOn){
    rnd.style.backgroundColor = "#1F2937";
  }
  else rnd.style.backgroundColor = "white";
});

//BURN BUTTON

let burnOn = false;
const brn = document.getElementById('burn');
document.getElementById('burn').addEventListener('click', () => {
  burnOn = !burnOn;
  if(burnOn){
    brn.style.backgroundColor = "#1F2937";
  }
  else brn.style.backgroundColor = "white";
});

// DODGE BUTTON

let dodgeOn = false;
const dog = document.getElementById('dodge');
document.getElementById('dodge').addEventListener('click', () => {
  dodgeOn = !dodgeOn;
  if(dodgeOn){
    dog.style.backgroundColor = "#1F2937";
  }
  else dog.style.backgroundColor = "white";
});

// ERASER BUTTON

let eraseOn = false;
const ers = document.getElementById('delete');
document.getElementById('delete').addEventListener('click', () => {
  eraseOn = !eraseOn;
  if(eraseOn){
    ers.style.backgroundColor = "#1F2937";
  }
  else ers.style.backgroundColor = "white";
});
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
  function hexTorgb(){
    let r = letTonum(getColor()[1])*16 + letTonum(getColor()[2])*1;
    let g = letTonum(getColor()[3])*16 + letTonum(getColor()[4])*1;
    let b = letTonum(getColor()[5])*16 + letTonum(getColor()[6])*1;
  
    return [r, g, b];
  }
  //////////////////////////////////////////////
  function Finalrgb(){
    let value = hexTorgb();
    let r = value[0];
    let g = value[1];
    let b = value[2];
    return "rgb(" + r +"," + g +"," + b + ")";
  }
  //////////////////////////////////////////////
  
  


  //////////////////////////////////////////////
  function letTonum(index){
    if(index == 'a' || index == 'A'){
      return 10;
    }
    else if(index == 'b' || index == 'B'){
      return 11;
    }
    else if(index == 'c' || index == 'C'){
      return 12;
    }
    else if(index == 'd' || index == 'D'){
      return 13;
    }
    else if(index == 'e' || index == 'E'){
      return 14;
    }
    else if(index == 'f' || index == 'F'){
      return 15;
    }
    else return index
  }

  function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
  
      return `rgb(${r}, ${g}, ${b})`;
  }


  function eraser(){
    return "rgb(255,255,255)";
  }

  window.onload = () => {
    initialize();
  };
