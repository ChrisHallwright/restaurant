function reservationsDiv() {
  const div = document.createElement('div');
  div.classList.add('reservations');

  let el;

  el = document.createElement('h2');
  el.textContent = "Reservations";
  div.appendChild(el);

  el = document.createElement('div');

  let lbl;
  let inp;
  {
    lbl = document.createElement('label');
    lbl.setAttribute('for', 'where')
    lbl.textContent = 'Pick a spot';
    el.appendChild(lbl);

    inp = document.createElement('input');
    inp.setAttribute('id', 'where')
    inp.setAttribute('type', 'text')
    el.appendChild(inp);

    lbl = document.createElement('label');
    lbl.setAttribute('for', 'qty')
    lbl.textContent = 'How many?';
    el.appendChild(lbl);

    inp = document.createElement('input');
    inp.setAttribute('id', 'qty')
    inp.setAttribute('type', 'number')
    el.appendChild(inp);

    lbl = document.createElement('label');
    lbl.setAttribute('for', 'when')
    lbl.textContent = 'When?';
    el.appendChild(lbl);

    inp = document.createElement('input');
    inp.setAttribute('id', 'when')
    inp.setAttribute('type', 'datetime-local')
    el.appendChild(inp);
  }

  div.appendChild(el);

  return div;
}

export { reservationsDiv };