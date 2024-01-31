let apiUrl = 'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json';
let fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener('click', fetchAcademyData);

function fetchAcademyData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           
            const highAverageStudents = data.filter(student => student.averageGrade > 3);
            console.log('Students with an average grade higher than 3:');
            highAverageStudents.forEach(student => {
                console.log(student.firstName, student.lastName);
            });
            
            const femaleHighAverageStudents = data.filter(student => student.gender === 'Female' && student.averageGrade === 5);
            console.log('Female students with an average grade of 5:'), 
            femaleHighAverageStudents.forEach(student => {console.log(student.firstName, student.lastName);
            });

          
            const maleSkopjeStudents = data.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18);
            console.log('Male students in Skopje over 18 years old:');
            maleSkopjeStudents.forEach(student => {console.log(student.firstName, student.lastName);
            });

           
            const averageGradesFemaleOver24 = data.filter(student => student.gender === 'Female' && student.age > 24).map(student => student.averageGrade);
            console.log('Average grades of all female students over 24:', averageGradesFemaleOver24.reduce((acc, grade) => acc + grade, 0) / averageGradesFemaleOver24.length);

            

            const maleBStudents = data.filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
            console.log('Male students with name starting with B and average grade over 2:');
            maleBStudents.forEach(student => {
                console.log(student.firstName, student.lastName);
            });


        })
        .catch(error => console.error('Error fetching data:', error));
}


// let apiUrl = 'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json';
// let fetchButton = document.getElementById('fetchButton');

// fetchButton.addEventListener('click', fetchAcademyData);

// function fetchAcademyData() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
           
//             const highAverageStudents = data.filter(student => student.averageGrade > 3);
//             console.log('Students with an average grade higher than 3:', highAverageStudents.map(student => `${student.firstName} ${student.lastName}`));

          
//             const femaleHighAverageStudents = data.filter(student => student.gender === 'Female' && student.averageGrade === 5);
//             console.log('Female students with an average grade of 5:', femaleHighAverageStudents.map(student => `${student.firstName} ${student.lastName}`));

        
//             const maleSkopjeStudents = data.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18);
//             console.log('Male students in Skopje over 18 years old:', maleSkopjeStudents.map(student => `${student.firstName} ${student.lastName}`));

         
//             const averageGradesFemaleOver24 = data.filter(student => student.gender === 'Female' && student.age > 24).map(student => student.averageGrade);
//             console.log('Average grades of all female students over 24:', averageGradesFemaleOver24.reduce((acc, grade) => acc + grade, 0) / averageGradesFemaleOver24.length);

           
//             const maleBStudents = data.filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
//             console.log('Male students with name starting with B and average grade over 2:', maleBStudents.map(student => `${student.firstName} ${student.lastName}`));
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }
