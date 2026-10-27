function menuDiv() {
  const div = document.createElement('div');
  div.classList.add('menu');

  let el;
  
  el = document.createElement('h1');
  el.textContent = "Menu";
  div.appendChild(el);
  
  el = document.createElement('p');
  el.textContent = 'Good trucker';
  div.appendChild(el);
  
  el = document.createElement('p');
  el.textContent = 'Better tucker';
  div.appendChild(el);

  return div;
}

export { menuDiv };