import { App } from './app'
import { connect } from 'mongoose'
import { DB_URI, PORT } from './constants/envVariables'

connect(DB_URI, { useNewUrlParser: true })

const app = new App().app

app.listen(PORT, () => {
  console.log(`Server running of http://localhost:4000 🎉`)
})
