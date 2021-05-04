import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
        <form>
            <input type="text"/>
            <input type="number"/>
            <div className="btns">
                <button>Created</button>
                <button>Get</button>
            </div>
            <div>
                {users.map(user =>
                  <div className="user">{user.id}. {user.username} {user.age}</div>  
                )}
            </div>
        </form>
    </div>
  );
}

export default App;
