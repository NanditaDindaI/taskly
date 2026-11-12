
const STORAGE_KEY = "taskly_tasks";

// Mengambil seluruh data tugas
export function getTasks() {
  try {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error("Gagal mengambil data tugas:", error);
    return [];
  }
}

// Menyimpan data tugas
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
