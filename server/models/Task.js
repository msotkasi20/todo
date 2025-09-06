// Modelissa sijaitsee tietokantalogiikka (SQL-pyynnöt)
import { pool } from '../helper/db.js' //Importtaa poolin db.js:stä ja käyttää sitä SQL-lauseiden suorittamiseen tietokannan suuntaan

const selectAllTasks = async () => { //hakee kaikki tiedot task taulusta
    return await pool.query('SELECT * FROM task')
}

const insertTask = async (description) => { //lisää tehtävän task tauluun
    return await pool.query('INSERT INTO task (description) VALUES ($1) RETURNING *', [description])
}

const deleteTask = async (id) => { //poistaa tehtävän taulusta
    return await pool.query('DELETE FROM task WHERE ID = $1', [id])
}

export { selectAllTasks, insertTask, deleteTask }