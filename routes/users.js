import express from 'express'
const router = express.Router()
const users = [{
        first_name: "Niyonkuru",
        last_name: "Marie Chantal",
        age: 29,
        country: "Rwanda"
    },
    {
        first_name: "Uwimana",
        last_name: "Emma Marie",
        age: 29,
        country: "Rwanda"
    },
    {
        first_name: "Bayizere",
        last_name: "Marie Jeanne",
        age: 29,
        country: "Kenya "
    },
    {
        first_name: "Iyabikoze ",
        last_name: "Marie ",
        age: 29,
        countr: "Rwanda "
    },
    {
        first_name: "Niyonkuru ",
        last_name: "Marie Chantal ",
        age: 29,
        country: "Rwanda "
    },
]
router.get('/users', (req, res) => {
    console.log(users)
    res.send("Hello")
})
export default router