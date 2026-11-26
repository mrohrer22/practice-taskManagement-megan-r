import { Link, useParams } from "react-router";
import tasks from "./tasks.json"

export default function TaskDetail () {
    const { id } = useParams();

    const task = tasks.find(
        (task) => task.id === Number(id)
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