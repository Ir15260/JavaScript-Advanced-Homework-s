let apiUrl = 'https://swapi.dev/api/people/1';
let fetchButton = document.getElementById('fetchButton');
let personNameElement = document.getElementById('personName');
let personTableBody = document.getElementById('personTableBody');

        fetchButton.addEventListener('click', fetchPerson);

        function fetchPerson() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    let personName = data.name;
                    let personStats = {
                        height: data.height,
                        weight: data.mass,
                        eyeColor: data.eye_color,
                        hairColor: data.hair_color
                    };

                    displayPerson(personName, personStats);
                })
                .catch(error => console.error('Error fetching person:', error));
        }

        function displayPerson(name, stats) {
            personNameElement.textContent = name;

            personTableBody.innerHTML = '';
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${stats.height}</td>
                <td>${stats.weight}</td>
                <td>${stats.eyeColor}</td>
                <td>${stats.hairColor}</td>
            `;
            personTableBody.appendChild(row);
        }