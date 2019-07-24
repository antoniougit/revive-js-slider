const config = [ // πίνακας με τις διαφάνειες
  { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1544132532-54a91735687a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 1,
    title: {
      text: 'Checkerboard Mesa, Zion National Park, UT',
      color: '#000',
      bgcolor: '#fff',
      halign: 'center', // ή right ή center
      valign: 'bottom', // ή bottom ή center
      fontsize: '14px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1555089439-9edb4b4b8dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 2,
    title: {
      text: 'Gullfoss, Iceland',
      color: '#ff0000',
      bgcolor: '#fff',
      halign: 'left', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '16px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1556924784-f02bd5b5b094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 3,
    title: {
      text: 'Rainforest, Hawaii, USA',
      color: '#FFF',
      bgcolor: '#ff0000',
      halign: 'right', // ή right ή center
      valign: 'center', // ή bottom ή center
      fontsize: '18px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1558429121-3943585e2206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 2,
    title: {
      text: 'Osaka ferris wheel, Osaka, Japan',
      color: '#000',
      bgcolor: '#00ff00',
      halign: 'center', // ή right ή center
      valign: 'center', // ή bottom ή center
      fontsize: '15px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1557067175-db3159d938ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 1,
    title: {
      text: 'Neuschwanstein Castle, Bavaria, Germany',
      color: '#0000ff',
      bgcolor: '#ff22aa',
      halign: 'left', // ή right ή center
      valign: 'bottom', // ή bottom ή center
      fontsize: '14px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }
]

function slider(elementId, config) {
  const sliderEl = document.getElementById(elementId);

  for (let i = 0; i < config.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('slide', `slide${i}`);
    sliderEl.appendChild(newDiv);
    if (i === 0) {
      newDiv.classList.add('active');
    }
    newDiv.style.backgroundImage = `url(${config[i].img_url})`;
    newDiv.innerHTML = `<div class="textBox" style="text-align:${config[i].title.halign};"><span style="color:${config[i].title.color};background-color:${config[i].title.bgcolor};font-size:${config[i].title.fontsize}">${config[i].title.text}</span></div>`;
    if (config[i].title.valign === 'top') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'center') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'bottom') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    }
  }
 playNext(elementId);
}

function playNext(elementId) {
  setInterval(function () {
    const activeElement = document.querySelector(`#${elementId} .active`);
    let nextElement = activeElement.nextElementSibling;
    if (!nextElement) {
      nextElement = document.querySelector(`#${elementId} div:first-of-type`);
    }
    activeElement.classList.remove('active');
    nextElement.classList.add('active');
  }, 3000);
}

slider('sliderA', config);