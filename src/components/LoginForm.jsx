import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "c1e5b458-8c71-4947-af22-5c2163ec0b5b",'User-Name':username,'User-Secret': password};

    try {
      await axios.get('https://api.chatengine.io/chats',{headers:authObject});
    
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);

      window.location.reload();
    }catch(error){

    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">チャットアプリ（謎のエラー付き）</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="ユーザー名"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="パスワード"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;