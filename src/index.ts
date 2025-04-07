import app from "./app"

const PORT = process.env.PORT || 8080;
const timestamp = new Date();

app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
console.log(
    `server started at \u001b[34m ${timestamp} \u001b[37m on PORT \u001b[34m ${PORT} \u001b[37m`,
      )
  
});