import express from 'express'
import bodyparser from 'body-parser'
import {indexRouter} from './routes'

const app = express()
app.use(bodyparser.json({type:"*/*"}))

app.get('/api/ping',(req,res) =>{
    res.status(200).send({pong:true})
})
app.use(indexRouter)

app.get('*',(req,res) =>{
    res.status(400).send({error:'Not found '})
})

export{app}