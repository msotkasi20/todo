// Controller: sovelluslogiikka: käsittelee HTTP-pyynnöt, datan validoinnin ja virheenhallinnan, eli ojelman logiikan
import { ApiError } from "../helper/ApiError.js"
import { selectAllTasks, insertTask, deleteTask as deleteTaskModel } from "../models/Task.js"

const getTasks = async (req,res,next) => {
    try {
        const result = await selectAllTasks() //ja kutsuu sitä palauttaakseen datan statuksen laittamiseen
        return res.status(200).json(result.rows || []) //ja arvon palauttamiseen JSONINA
    } catch (error) {
        return next(error) //jos error, forwardoidaan middlewarelle index.js:ssään virheenkäsittelyyn
    }
}

const postTask = async (req,res,next) => { //funktio, jolla käsitellään post pyyntö uuden tehtävän lisäämisestä
    const { task } = req.body
    try {
        if (!task || !task.description || task.description.trim().length === 0) { //error palauttaa status coden ja messagen
            return next(new ApiError('Task description is required', 400)) //tehdään uusi objekti ja välitetään se nextille
            /*const error = new Error('Task description is required')
            error.status = 400
            return next(error)*/
        }
        const result = await insertTask(task.description)
        return res.status(201).json({id: result.rows[0].id, description: result.rows[0].description})
    } catch (error) {
        return next(error)
    }
}

const deleteTask = async (req,res,next) => {
    const { id } = req.params
    try {
        const result = await deleteTaskModel(id)
        if (result.rowCount === 0) {
            return next(new ApiError('Task not found', 404))
        }
        return res.status(200).json({ id })
    } catch (error) {
        return next(error)
    }
}

export { getTasks, postTask, deleteTask }