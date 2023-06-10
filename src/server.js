import 'express-async-errors';

import AppError from './utils/AppError';

import express, { json } from 'express';

import routes from './routes';

const app = express();
app.use(json())

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));