import restify from 'restify'
import fs from 'fs'
import _ from 'underscore'
const execSync = require('child_process').execSync;


const save_odt = (fields, dest_fname) => {
  const as_str = _.map(fields, (v, k) => `${k}: ${v}`).join('\n') + '\n'

  fs.writeFileSync('tmp.txt', as_str)
  execSync(`pandoc -o ${dest_fname} tmp.txt`)
  fs.unlink('tmp.txt')
}


const respond = (req, res, next) => {

  req.accepts('application/json')

  const timestamp = (new Date()).toISOString()
  console.log(`+[${timestamp}]: received request`)
  const dest_fname = `${__dirname}/data/${timestamp.replace(/[:\/]/g, '-')}.odt`

  save_odt(req.body, dest_fname)

  res.json(200, {
    message: 'received submission',
    submission: req.body
  })

  next()
}

const corsHandler = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
}

const server = restify.createServer()
server.use(restify.bodyParser())
server.use(corsHandler)
server.post('/intake', respond)

server.listen(3001, () => {
  console.log(`${server.name} listening at ${server.url}`)
})
