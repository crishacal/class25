import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <span className="id">{u.id} - </span>
            <span className="name">{u.name} - </span>
            <span className="email">{u.email} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
