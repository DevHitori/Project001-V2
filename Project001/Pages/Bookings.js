window.onload = function() {
  document.getElementsByClassName("form")[0].onsubmit = function(e) {
    e.preventDefault();
    let fields = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      destination: document.getElementById('destination').value,
      time: document.getElementById('time').value,
      number: document.getElementById('number').value,
      airport: document.getElementById('airport').checked,
      cruiseship: document.getElementById('cruiseship').checked,
      tours: document.getElementById('tours').checked
    }

    fetch('./api/bookings', {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => window.location.replace(`./${response.redirect}`))
      .catch(error => console.error('Error:', error));

    return false;
  };
};
