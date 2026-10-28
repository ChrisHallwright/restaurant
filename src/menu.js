function menuDiv() {
  const div = document.createElement('div');
  div.classList.add('menu');

  let el;

  el = document.createElement('h2');
  el.textContent = "our menu";
  div.appendChild(el);

  el = document.createElement('p');
  el.textContent = 'We lean into fresh local produce in season.  Our inspiration is first mediterranean, and we have a periodic leaning to the poké genius of Hawaii.  Always happy to expand our repertoire so tell us what you love!';
  div.appendChild(el);

  el = document.createElement('div');
  div.appendChild(el);

  // Appetiser
  {
    let sub = document.createElement('h2');
    sub.textContent = 'amuse bouche'
    el.appendChild(sub);

    const tbl = document.createElement('table');

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Protein balls'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '8'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Calamari'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '12'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    el.appendChild(tbl);

  }

  // Entrée
  {
    let sub = document.createElement('h2');
    sub.textContent = 'entrée'
    el.appendChild(sub);

    const tbl = document.createElement('table');

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Focaccia'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '13'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Zuppa'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '11'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    el.appendChild(tbl);

  }

  // Main
  {
    let sub = document.createElement('h2');
    sub.textContent = 'primi piatti'
    el.appendChild(sub);

    const tbl = document.createElement('table');

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Roast of the day'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '27'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Fish FRESH FROM THE STRAIT'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '41'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Steak and Tatties'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '38'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Chicken Parma'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '35'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    el.appendChild(tbl);

  }

  // Dessert
  {
    let sub = document.createElement('h2');
    sub.textContent = 'dolci'
    el.appendChild(sub);

    const tbl = document.createElement('table');

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Bombe Alaska'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '18'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    {
      let tr = document.createElement('tr');

      {
        let td = document.createElement('td');
        td.textContent = 'Cheese platter'
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = '20'
        tr.appendChild(td);
      }
      tbl.appendChild(tr);
    }

    el.appendChild(tbl);

  }

  div.appendChild(el);

  return div;
}

export { menuDiv };