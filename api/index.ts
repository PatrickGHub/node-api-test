import express from 'express'
import cors from 'cors'
import { postsData, commentsData } from './data.json'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/posts', (_, res: express.Response) => {
  res.json({ data: postsData })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})