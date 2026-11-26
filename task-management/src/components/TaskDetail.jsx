import { Link, useParams } from "react-router-dom";
import tasks from "./tasks.json"

export default function TaskDetail () {
    const { id } = useParams();

    const task = tasks.find(
        (task) => task.id === parseInt(id)
    );

    return (
        <div>
            <h2>{task.title}</h2>

            <p>Description:
            {task.description}</p>

            <Link to="/">Back to Task List</Link>
        </div>
    );
}