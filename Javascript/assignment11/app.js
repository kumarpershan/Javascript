
// QUESTION NO # 1


document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('signupData').innerHTML =
      `<h3>Submitted Data:</h3>Name: ${name}<br>Email: ${email}`;
  });





// QUESTION NO # 2

function toggleDetails(button) {
    const parent = button.parentElement;
    const short = parent.querySelector('.short');
    const full = parent.querySelector('.full');

    if (full.style.display === 'none') {
      full.style.display = 'inline';
      short.style.display = 'none';
      button.innerText = 'Read less';
    } else {
      full.style.display = 'none';
      short.style.display = 'inline';
      button.innerText = 'Read more';
    }
  }




// QUESTION NO 3

var studentForm = document.getElementById('studentForm');
var studentTable = document.getElementById('studentTable').querySelector('tbody');
var editSection = document.getElementById('editSection');
var students = [];

  studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('studentGrade').value;
    students.push({ name, age, grade });
    renderTable();
    studentForm.reset();
  });

  function renderTable() {
    studentTable.innerHTML = '';
    students.forEach((student, index) => {
      studentTable.innerHTML += `
        <tr>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.grade}</td>
          <td>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
  }

  function editStudent(index) {
    const student = students[index];
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGrade').value = student.grade;
    document.getElementById('editIndex').value = index;
    editSection.style.display = 'block';
  }

  document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const index = document.getElementById('editIndex').value;
    students[index] = {
      name: document.getElementById('editName').value,
      age: document.getElementById('editAge').value,
      grade: document.getElementById('editGrade').value
    };
    editSection.style.display = 'none';
    renderTable();
  });