function aboutDiv() {
  const div = document.createElement('div');
  div.classList.add('about');

  let el;

  el = document.createElement('h2');
  el.textContent = "About";
  div.appendChild(el);

  el = document.createElement('div');

  {
    let p = document.createElement('p');
    p.innerHTML = `We've been trading for a coupla days now.<br>Joe says, "What they could never kill went on to organise."`;
    el.appendChild(p);

    let d = document.createElement('div');
    el.appendChild(d);
  }

  div.appendChild(el);

  return div;
}

export { aboutDiv };