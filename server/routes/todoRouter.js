import { Router } from 'express'
import { auth } from '../helper/auth.js'
import { getTasks, postTask, deleteTask } from '../controllers/TaskController.js'

const router = Router()

//Tehtäviin liittyvät reitit
router.get("/", getTasks) //router vain välittää GET requestin nyt kontrollerille
router.post('/create', auth, postTask) //uuden luonti, vaatii tokenin
router.delete('/delete/:id', auth, deleteTask) //poistaminen, vaatii tokenin

/*
router.get('/', (req,res,next) => { //haetaan kaikki tehtävät tietokannasta
    pool.query('SELECT * FROM task', (err, result) => {
        if(err) {
            return next (err)
        }
        return res.status(200).json(result.rows || [])
    })
})

router.post('/create', auth,(req,res,next) => { //lisätään uusi tehtävä tietokantaan, vain kirjautunut käyttäjä saa lisätä tai poistaa tehtäviä
    const { task } = req.body
    
    if (!task) {
        return res.status(400).json({error: 'Task is required'})
    }

    pool.query('insert into task (description) values ($1) returning *', [task.description],
        (err, result) => {
            if(err) {
                return next (err)
            }
            res.status(201).json({ id: result.rows[0].id, description: task.description })
        })
})

router.delete('/delete/:id', auth,(req,res,next) => { //poistetaan tehtävä tietokannasta id:n perusteella kirjautuneena käyttäjänä
    const { id } = req.params
    
    console.log(`Deleting task with id: ${id}`)
    pool.query('delete from task WHERE id = $1',
        [id], 
        (err, result) => {
            if(err) {
                console.error(err.message)
                return next (err)
            }
            if (result.rowCount === 0) {
                const error = new Error('Task not found')
                error.status = 404
                return next(error)
            }
            return res.status(200).json({id:id})
        })
})*/

export default router