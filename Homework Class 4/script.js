let apiUrl = 'https://swapi.dev/api/planets/';
let fetchButton = document.getElementById('fetchButton');
let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');
let buttonContainer = document.getElementById('buttonContainer');
let planetTableBody = document.getElementById('planetTableBody');
let currentPage = 1;

fetchButton.addEventListener('click', fetchPlanets);

function fetchPlanets() {
    fetch(apiUrl + `?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            const planets = data.results.slice(0, 10);
            displayPlanets(planets);
            showNextButton(data.next);
            showPrevButton(data.previous);
        })
        .catch(error => console.error('Error fetching planets:', error));
}

function fetchNextPlanets() {
    currentPage++;
    fetchPlanets();
}

function fetchPreviousPlanets() {
    currentPage--;
    fetchPlanets();
}

function showNextButton(nextUrl) {
    nextButton.style.display = nextUrl ? 'block' : 'none';
}

function showPrevButton(prevUrl) {
    prevButton.style.display = prevUrl ? 'block' : 'none';
}

function displayPlanets(planets) {
    planetTableBody.innerHTML = '';

    planets.forEach(planet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        `;
        planetTableBody.appendChild(row);
    });
}
