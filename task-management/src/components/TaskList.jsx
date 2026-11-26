import { Link } from "react-router";
import tasks from "./tasks.json"

export default function TaskList () {

    return (
        <div>
            <h2> Task List </h2>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>
                            {task.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}