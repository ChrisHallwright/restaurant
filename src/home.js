import restaurantPic from './interior-design.jpeg';

function homeDiv() {
  const div = document.createElement('div');
  div.classList.add('home');

  let el;
  
  el = document.createElement('h1');
  el.textContent = "Sopocacci's";
  div.appendChild(el);

  el = document.createElement('img');
  el.src = restaurantPic;
  el.alt = 'Sample from Geometric Architect Interiors';
  div.appendChild(el);
  
  el = document.createElement('p');
  el.textContent = 'Come dine with us and soak in the view';
  div.appendChild(el);

  return div;
}

export { homeDiv };