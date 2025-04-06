import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('エラー:', err));
  }, []);

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            🧑 {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
