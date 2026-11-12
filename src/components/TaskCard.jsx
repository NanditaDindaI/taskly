
import {
  CalendarDays,
  BookOpen,
  Pencil,
  Trash2,
} from "lucide-react";

function TaskCard({ task, onEdit, onDelete }) {
  // Mengubah format tanggal
  const formattedDate = task.deadline
    ? new Date(`${task.deadline}T00:00:00`).toLocaleDateString(
        "id-ID",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      )
    : "-";

  // Menentukan warna status
  const statusClass = task.status
    .toLowerCase()
    .replace(" ", "-");

  return (
    <div className="task-card">
      <div className="task-card-top">
        <span className={`task-status ${statusClass}`}>
          {task.status}
        </span>

        <span className={`task-priority ${task.priority.toLowerCase()}`}>
          {task.priority} Priority
        </span>
      </div>

      <div className="task-card-content">
        <h3>{task.title}</h3>

        <p className="task-course">
          <BookOpen size={14} />
          {task.course}
        </p>

        {task.description && (
          <p className="task-description">
            {task.description}
          </p>
        )}
      </div>

      <div className="task-card-bottom">
        <div className="task-deadline">
          <CalendarDays size={15} />
          <span>{formattedDate}</span>
        </div>

        <div className="task-actions">
          <button
            className="edit-task-button"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            <Pencil size={15} />
          </button>

          <button
            className="delete-task-button"
            onClick={() => onDelete(task.id)}
            title="Delete task"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
