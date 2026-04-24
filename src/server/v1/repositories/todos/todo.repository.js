import todoMemoryRepository from "./todo-memory.repository.js";
import todoMongoRepository from "./todo-mongo.repository.js";

const base = (process.env.BASE_EN_USO || "MEMORY").toUpperCase();

const todoRepository =
    base === "MONGO"
        ? todoMongoRepository
        : todoMemoryRepository;

export default todoRepository;