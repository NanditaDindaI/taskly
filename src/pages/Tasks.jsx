
import { useState } from "react";
import {
  Plus,
  Search,
  ClipboardList,
  ListFilter,
} from "lucide-react";

import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Tasks() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  // Mengatur modal form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Mengatur pencarian dan filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Membuka form tambah tugas
  const handleAdd = () => {
    setSelectedTask(null);
    setIsFormOpen(true);
  };

  // Membuka form edit tugas
  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsFormOpen(true);
  };

  // Menyimpan tugas baru atau hasil edit
  const handleSubmit = (formData) => {
    if (selectedTask) {
      updateTask(selectedTask.id, formData);
    } else {
      addTask(formData);
    }

    setSelectedTask(null);
  };

  // Menghapus tugas
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(id);
    }
  };

  // Pencarian dan filter tugas
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.course.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <p className="eyebrow">STAY ORGANIZED</p>
          <h1>My Tasks</h1>
          <p className="page-subtitle">
            Manage your assignments and keep track of your progress.
          </p>
        </div>

        <button className="add-task-button" onClick={handleAdd}>
          <Plus size={18} />
          Add New Task
        </button>
      </div>

      {/* Search dan Filter */}
      <div className="task-toolbar">
        <div className="task-search">
          <Search size={17} />
          <input
            type="text"
            placeholder="Search your tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="task-filter">
          <ListFilter size={17} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Tasks</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Informasi jumlah tugas */}
      <div className="task-list-heading">
        <div>
          <h2>
            <ClipboardList size={19} />
            Task List
          </h2>
          <p>{filteredTasks.length} task(s) found</p>
        </div>
      </div>

      {/* Daftar tugas */}
      {filteredTasks.length > 0 ? (
        <div className="task-grid">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="empty-tasks">
          <div className="empty-icon">
            <ClipboardList size={30} />
          </div>

          <h3>
            {tasks.length === 0
              ? "No tasks yet!"
              : "No matching tasks found"}
          </h3>

          <p>
            {tasks.length === 0
              ? "Start organizing your academic life by adding your first task."
              : "Try changing your search keyword or filter."}
          </p>

          {tasks.length === 0 && (
            <button className="add-task-button" onClick={handleAdd}>
              <Plus size={17} />
              Create Your First Task
            </button>
          )}
        </div>
      )}

      {/* Modal form */}
      {isFormOpen && (
        <TaskForm
          onSubmit={handleSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedTask(null);
          }}
          initialData={selectedTask}
        />
      )}
    </div>
  );
}

export default Tasks;
