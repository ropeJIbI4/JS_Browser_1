
const Table = document.getElementById('table');
const Data = JSON.parse(localStorage.getItem('Data')) || [
  {
    "id": 1,
    "name": "Йога",
    "time": "10:00 - 11:00",
    "maxParticipants": 15,
    "currentParticipants": 8,
    "isRegistered": false
  },
  {
    "id": 2,
    "name": "Пилатес",
    "time": "11:30 - 12:30",
    "maxParticipants": 10,
    "currentParticipants": 5,
    "isRegistered": false
  },
  {
    "id": 3,
    "name": "Кроссфит",
    "time": "13:00 - 14:00",
    "maxParticipants": 20,
    "currentParticipants": 15,
    "isRegistered": false
  },
  {
    "id": 4,
    "name": "Танцы",
    "time": "14:30 - 15:30",
    "maxParticipants": 12,
    "currentParticipants": 10,
    "isRegistered": false
  },
  {
    "id": 5,
    "name": "Бокс",
    "time": "16:00 - 17:00",
    "maxParticipants": 8,
    "currentParticipants": 6,
    "isRegistered": false
  },
  {
    "id": 6,
    "name": "Растяжка",
    "time": "16:00 - 16:30",
    "maxParticipants": 6,
    "currentParticipants": 6,
    "isRegistered": false
  }
];

function Render() {
  Table.innerHTML = `
    <tr>
      <th>Название занятия</th>
      <th>Время проведения</th>
      <th>Максимальное количество участников</th>
      <th>Текущее количество участников</th>
      <th>Действия</th>
    </tr>
  `;
  Data.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.time}</td>
      <td>${item.maxParticipants}</td>
      <td>${item.currentParticipants}</td>
      <td>
        <button ${item.isRegistered || item.currentParticipants >= item.maxParticipants? 'disabled' : ''} onclick="Register(${item.id})">Записаться</button>
        <button ${!item.isRegistered? 'disabled' : ''} onclick="Unregister(${item.id})">Отменить запись</button>
      </td>
    `;
    Table.appendChild(row);
  });
}

function Register(courseId) {
  const course = Data.find((item) => item.id === courseId);
  course.currentParticipants++;
  course.isRegistered = true;
  localStorage.setItem('Data', JSON.stringify(Data));
  Render();
}

function Unregister(courseId) {
  const course = Data.find((item) => item.id === courseId);
  course.currentParticipants--;
  course.isRegistered = false;
  localStorage.setItem('Data', JSON.stringify(Data));
  Render();
}

Render();