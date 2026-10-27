function aboutDiv() {
  const div = document.createElement('div');
  div.classList.add('menu');

  let el;
  
  el = document.createElement('h1');
  el.textContent = "About";
  div.appendChild(el);
  
  el = document.createElement('p');
  el.textContent = `We've been trading for, ooh, several seconds now.`;
  div.appendChild(el);

  return div;
}

export { aboutDiv };