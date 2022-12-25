require("dotenv").config()
const express = require("express")
const app = express()
require("express-async-errors")

//rest of the packages

const morgan = require("morgan") // asta e un pachet ce ne spune de fiecare data in consola ce pagina am vrut sa accesem cu ce status code si tot
const cookieParser = require("cookie-parser") //pachetul ca sa putem accesa datele dintr-un cookie

// Builtin express middleware
app.use(morgan("tiny"))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

// Basic Routes

app.get("/", (req, res) => {
  return res.send("Welcome")
})

const authRouter = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRoutes)

// Our middleware
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")
app.use(errorHandler)
app.use(notFound)

// Database
const connectDB = require("./db/connect")

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
