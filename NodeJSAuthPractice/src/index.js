import { app } from "./app.js";
import { connectDB } from "./db/connection.js";

connectDB()
    .then(() => {
        app.listen(8080, () => {
            console.log("Server started at port 8080");
        });
    }).catch((error) => {
        console.log(`Error Connecting to Database ${error}`);
    });
