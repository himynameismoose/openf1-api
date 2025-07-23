//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const search = document.querySelector('input').value;
  const fullName = encodeURIComponent(getFullName(search));
  const url = `https://api.openf1.org/v1/drivers?full_name=${fullName}&session_key=latest`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = data[0].first_name + " " + data[0].last_name;
        document.querySelector('img').src = data[0].headshot_url;
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