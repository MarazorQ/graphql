import { useEffect, useState } from 'react';
import './App.css';
import {useMutation, useQuery} from "@apollo/client"
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations/user';

function App() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_USERS, {pollInterval: 500})
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)
  const [newUser] = useMutation(CREATE_USER)
  console.log(data)

  useEffect(() => {
    if (!loading){
      setUsers(data.getAllUsers)
    }
  }, [data])

  const addUser = (e) =>{
    e.preventDefault()
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({data})=>{
      console.log(data)
      setAge('')
      setUsername('')
    })
  }

  const getUsers = (e) =>{
    e.preventDefault()
    refetch()
  }

  if (loading){
    <h1>LOADING....</h1>
  }

  return (
    <div className="App">
        <form>
            <input type="text" value={username} onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
            <input type="number" value={age} onChange={(e)=>{
              setAge(e.target.value)
            }}/>
            <div className="btns">
                <button onClick={(e)=> addUser(e)}>Created</button>
                <button onClick={e=> getUsers(e)}>Get</button>
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
