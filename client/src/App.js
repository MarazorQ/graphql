import { useEffect, useState } from 'react';
import './App.css';
import {useQuery} from "@apollo/client"
import { GET_ALL_USERS } from './query/user';

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([])
  console.log(data)
  useEffect(() => {
    if (!loading){
      setUsers(data.getAllUsers)
    }
  }, [data])

  if (loading){
    <h1>LOADING....</h1>
  }

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
