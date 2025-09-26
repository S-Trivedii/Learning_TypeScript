import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import todoRouter from "./routes/todoRoute.js";
import bodyParser from "body-parser";

const app = express();

// global middleware - run for every request
app.use(bodyParser.json());

// route middleware - run for a particular route
app.use("/todos", todoRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
