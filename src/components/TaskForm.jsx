
import { useState, useEffect } from "react";
import { X } from "lucide-react";

function TaskForm({ onSubmit, onClose, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    course: "",
    description: "",
    deadline: "",
    priority: "Medium",
    status: "To Do",
  });

  // Mengisi form dengan data lama ketika mode edit
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        course: initialData.course || "",
        description: initialData.description || "",
        deadline: initialData.deadline || "",
        priority: initialData.priority || "Medium",
        status: initialData.status || "To Do",
      });
    }
  }, [initialData]);

  // Mengatur perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mengirim data form
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="task-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">
              {initialData ? "UPDATE YOUR TASK" : "CREATE NEW TASK"}
            </p>

            <h2>
              {initialData ? "Edit Task" : "Add New Task"}
            </h2>
          </div>

          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Complete PPB Assignment"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course / Subject *</label>
            <input
              type="text"
              name="course"
              placeholder="e.g. Pemrograman Perangkat Bergerak"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Add some details about your task..."
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Deadline *</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="submit-button">
              {initialData ? "Save Changes" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
