import {useState,useEffect} from 'react' //useStatea tarvitaan tilamuuttujiin
import '../App.css'
import axios from 'axios' //axios-kirjasto yksinkertaistaa HTTP kutsuja
import Row  from '../components/Row.jsx'
import { useUser } from '../context/useUser.jsx'


const url = "http://localhost:3001"

function App() {

  const [task, setTask] = useState('') //yksittäinen tehtävä
  const [tasks, setTasks] = useState([]) //taulukko kaikille tehtäville
  const { user } = useUser() //luetaan käyttäjäobjekti muuttujaan

  useEffect( () => { //suoritetaan kerran ladattaessa, jos riippuvuustaulukko on tyhjä
    axios.get(url)
    .then(response => {
      setTasks(response.data)
    })
    .catch(error => {
      alert(error.response.data ? error.response.data.message : error)
    })
  }, [])

  const addTask = () => { //tehtävän lisäys tietokantaan, id luodaan automaattisesti tietokannassa
    const headers = { headers: { Authorization: user.token }} //lisätään autorisointi käyttäjätokenilla
    const newTask = { description: task } 

    axios.post(url + "/create", { task: newTask }, headers) //lisätään endpoint
    .then(response => {
      setTasks([...tasks,response.data])
      setTask('')
    })
    .catch(error => {
      alert(error.response ? error.response.data.error.message : error)
    })
  }

  const deleteTask = (deleted) => { //tehtävän poisto tietokannasta id:n perusteella
    const headers = { headers: { Authorization: user.token }}
    console.log(headers)

    axios.delete(url + "/delete/" + deleted, headers)
    .then(response => {
      setTasks(tasks.filter(item => item.id !== deleted))
    })
    .catch(error => {
      alert(error.response ? error.response.data.error.message : error)
    })
  }

  return (
   <div id="container">
    <h3>Todos</h3>
    <form>
      <input 
        placeholder='Add new task' 
        value={task} //talletetaan valueksi yksittäisen tehtävän tilamuuttuja
        onChange={e => setTask(e.target.value)} //syöttökentän muutos
        onKeyDown={e => {
          if (e.key === 'Enter') { //jos painetaan enteriä syöttökentässä
            e.preventDefault() //estää refreshingin
            addTask() //kutsutaan funktiota addTask
          }
        }}
      />
    </form>
    <ul>
      {
        tasks.map(item => ( //mapataan taulukko läpi, 
          <Row //kutsutaan importattua Row-funktioa, jossa nappi ja sen toiminto
            item={item} //yksittäinen tehtävä propsina, väliteään Row-funktiolle
            key={item.id} //Reactin vaatima avain (key) Row-komponentille, id on tehtävän id
            deleteTask={deleteTask} /> //funktion propsina, välitetään Row-funktiolle
        ))
      }
    </ul>
   </div>
  )
}

export default App