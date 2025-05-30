import { useEffect, useState } from "preact/hooks";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "dailyTasks";
const DATE_KEY = "taskDate";

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}
type TodoProps = {
  path?: string;
};

export default function Todo(_props: TodoProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedDate = localStorage.getItem(DATE_KEY);
    const today = getTodayDate();

    if (savedDate !== today) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(DATE_KEY, today);
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  function addTask() {
    if (!input.trim()) return;
    const newTask: Task = {
      id: generateId(),
      text: input.trim(),
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-app mt-4">
      {/* <h2 className="mb-4 text-center">Dienos planas</h2> */}

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Įveskite užduotį"
          value={input}
          onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Pridėti
        </button>
      </div>

      <ul className="list-group mb-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex align-items-center justify-content-between task-item"
          >
            <div className="d-flex align-items-center flex-grow-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
            </div>
            <i
              className="bi bi-trash delete-icon ms-3"
              title="Ištrinti"
              onClick={() => deleteTask(task.id)}
              style={{ cursor: "pointer" }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
