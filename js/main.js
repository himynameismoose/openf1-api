//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const search = document.querySelector('input').value;
  const fullName = encodeURIComponent(getFullName(search));
  const driverName = document.querySelector('.driver-name');
  const driverImg = document.querySelector('img');
  const displayDriver = document.querySelector('.display-driver');
  const teamName = document.querySelector('.team-name');
  const url = `https://api.openf1.org/v1/drivers?full_name=${fullName}&session_key=latest`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        driverName.innerText = data[0].first_name + " " + data[0].last_name;
        driverImg.src = data[0].headshot_url;
        teamName.innerHTML = data[0].team_name;

        if (displayDriver.classList.contains('hide')) {
          displayDriver.classList.toggle('hide');
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getFullName(str) {
  str = str.toLowerCase();
  const name = str.split(' ');
  const formatName = [
    name[0].charAt(0).toUpperCase() + name[0].slice(1), 
    ...name.slice(1).map(n => n.toUpperCase())
  ];

  const outputName = formatName.join(' ');

  return outputName;
}