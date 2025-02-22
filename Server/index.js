const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000
app.use(express.json());

app.use(cors(
  {
    origin : ["https://abhaykevat.vercel.app/"],
    methods : ["GET","POST"],
    credentials : true
  }
));


//routes
app.use("/email", require("./routes/emailRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})