import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hola desde express')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
})
