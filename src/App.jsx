
import { useEffect, useState } from 'react';
import './App.css'
import User from './User/User';



function App() {

  const [click, setClick] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=> res.json())
    // .then (data=> setUser(data) )
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      };
    }
    fetchData();
  }, [])

  function Component1() {
    const component = `
    function Componentname(){\n
      all funcnality here ...\n
      return somethings\n
    }
    Componentname() //clall the function
    `
    return component;
  }

  const clickmehandle = () => {
    const newclick = click + 1;
    setClick(newclick);
  }

  return (<>
    <h3> React Core Concept</h3>
    {/* make components */}
    <h2>//Make component</h2>
    <Component1 ></Component1>

    <h2>// event handle using useState</h2>
    <p>You Click Button: {click}</p>
    <button onClick={clickmehandle}>Click ME</button>
    
    <h2>// Show Data using useEffect</h2>
    {
      user.map(user => <User user={user} key={user.id}></User>)
    }

  </>
  )

}


export default App
