import { App } from "./app"

const {PORT} = process.env;

const app = new App()

console.log(app)

app.app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})
