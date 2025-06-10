import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Student({data}){
  return(
    <div className="Student">
      <p>{data.name} - {data.email} - {data.id}</p>
    </div>
  )
}
function App() {
  const [data, setData] = useState([]);
  async function getData(){
    try {
      axios.defaults.baseURL = process.env.REACT_APP_API_URL;
      const res = await axios.get("/students");
      setData(res.data);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      <h1>MIU Student List</h1>
      {
        data.map((item, index) => <Student data={item} key={item.id}/>)
      }
    </div>
  );
}

export default App;
