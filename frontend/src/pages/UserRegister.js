import { useState } from 'react';

export default function UserRegister() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    if (res.status === 201) {
      setResult('登録成功ですわ✨');
      setName('');
    } else {
      setResult('登録に失敗しましたわ…😠');
    }
  };

  return (
    <div>
      <h2>ユーザー登録</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="名前を入力しなさい"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">登録する</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
