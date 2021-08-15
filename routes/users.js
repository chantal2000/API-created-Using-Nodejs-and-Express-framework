import express from 'express'
import { v4 as uuidv4 } from 'uuid';
const router = express.Router()
let users = [{
        first_name: "Niyonkuru",
        last_name: "Marie Chantal",
        age: 29,
        country: "Rwanda",
    },
    {
        first_name: "Uwimana",
        last_name: "Emma Marie",
        age: 29,
        country: "Rwanda",

    },
    {
        first_name: "Bayizere",
        last_name: "Marie Jeanne",
        age: 29,
        country: "Kenya ",

    },
    {
        first_name: "Iyabikoze ",
        last_name: "Marie ",
        age: 29,
        country: "Rwanda "
    },
    {
        first_name: "Niyonkuru ",
        last_name: "Marie Chantal ",
        age: 29,
        country: "Rwanda "
    },
]
router.get('/', (req, res) => {
    console.log(users)
})
router.post('/', (req, res) => {
    const user = req.body
    uuidv4();
    const userWithId = {...user, id: uuidv4() }
    users.push(userWithId)
    res.send(`The usercalled ${first_name} was added to our database`)
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    const targetedUser = users.find(user => user.id == id)
    res.send(targetedUser)
})
router.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter(user => user.id !== id)
    res.send(`user with id ${id} was deleted from the database`)

})
router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { first_name, last_name, age } = req.body
    let userTobeUppdated = users.find(user => user.id == id);
    if (first_name) {
        user.first_name = first_name
    }
    if (last_name) {
        user.last_name = last_name
    }
    if (age) {
        user.age = age

    }
    res.send(`user with ${id} was updated `)

})
export default router