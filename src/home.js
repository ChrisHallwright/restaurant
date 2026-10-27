const content = document.querySelector('#content');
import restaurantPic from './interior-design.jpeg';

function firstLoad() {
  let el;
  
  el = document.createElement('h1');
  el.textContent = "Sopocacci's";
  content.appendChild(el);

  el = document.createElement('img');
  el.src = restaurantPic;
  el.alt = 'Sample from Geometric Architect Interiors';
  content.appendChild(el);
  
  el = document.createElement('p');
  el.textContent = 'Come dine with us and soak in the view';
  content.appendChild(el);

}

export { firstLoad };