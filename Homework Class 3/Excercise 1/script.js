let apiUrl = 'https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json';
let fetchButton = document.getElementById('fetchButton');
let academyNameElement = document.getElementById('academyName');
let studentListElement = document.getElementById('studentList');

fetchButton.addEventListener('click', fetchAcademyData);

function fetchAcademyData() {
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayAcademyData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayAcademyData(data) {
    academyNameElement.textContent = data.academy;


    studentListElement.innerHTML = '';

  
    data.students.forEach(student => {
        let listItem = document.createElement('li');
        listItem.textContent = student;
        studentListElement.appendChild(listItem);
    });
}