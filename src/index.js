import express from "express";
import { APP_PORT } from "./config/app.config.js";
import routes from "./routes/index.js";
import { LogError, ErrorHandler } from "./middlewares/ErrorsHandler.js";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}));
routes(app);
app.use(LogError);
app.use(ErrorHandler);


app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});