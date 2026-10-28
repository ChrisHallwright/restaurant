import restaurantPic from './interior-design.jpeg';

function homeDiv() {
  const div = document.createElement('div');
  div.classList.add('home');

  let el;
  
  el = document.createElement('div');
  {
    let sub = document.createElement('h2')
    sub.textContent = 'location';
    el.appendChild(sub);

    sub = document.createElement('p')
    sub.innerHTML = '123-125 Brunswick St.<br>Fitzroy North, Australia 3068';
    el.appendChild(sub);

    sub = document.createElement('h2')
    sub.textContent = 'opening hours';
    el.appendChild(sub);

    sub = document.createElement('p')
    sub.innerHTML = 'Wednesday to Saturday from 6pm<br>Sunday from noon to 10pm';
    el.appendChild(sub);

    sub = document.createElement('h2')
    sub.textContent = 'contact';
    el.appendChild(sub);

    sub = document.createElement('p')
    sub.innerHTML = '+61 3 9987 6543<br>info@chezcnj.com.au';
    el.appendChild(sub);
  }
  div.appendChild(el);

  el = document.createElement('img');
  el.src = restaurantPic;
  el.alt = 'Sample from Geometric Architect Interiors';
  div.appendChild(el);

  el = document.createElement('p');
  el.classList.add('pic-ref');
  el.textContent = 'picture borrowed with thanks from GeometricArchitectInteriors.com';
  div.appendChild(el);

  return div;
}

export { homeDiv };