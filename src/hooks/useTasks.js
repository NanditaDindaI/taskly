
import { useState, useEffect } from "react";
import { getTasks, saveTasks } from "../utils/taskStorage";

function useTasks() {
  // Menyimpan daftar tugas
  const [tasks, setTasks] = useState(() => getTasks());

  // Menyimpan data setiap kali daftar tugas berubah
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // CREATE: Menambahkan tugas baru
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      createdAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // UPDATE: Mengubah data tugas
  const updateTask = (id, updatedData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedData }
          : task
      )
    );
  };

  // DELETE: Menghapus tugas
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}

export default useTasks;
