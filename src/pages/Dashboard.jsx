import { CalendarDays, CheckCircle2, Clock3, ListTodo, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";

function Dashboard() {
  // 1. MENGAMBIL LOGIKA DARI KODE BARU
  const { tasks } = useTasks();

  // Memastikan data tasks tidak undefined sebelum diproses
  const safeTasks = tasks || [];

  const totalTasks = safeTasks.length;
  const todoTasks = safeTasks.filter((task) => task.status === "To Do").length;
  const progressTasks = safeTasks.filter((task) => task.status === "In Progress").length;
  const completedTasks = safeTasks.filter((task) => task.status === "Completed").length;

  const upcomingTasks = safeTasks
    .filter((task) => task.status !== "Completed")
    .sort((a, b) => a.deadline.localeCompare(b.deadline))
    .slice(0, 3);

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(`${date}T00:00:00`).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // 2. MENGGUNAKAN STRUKTUR UI DARI KODE LAMA
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR PERSONAL ACADEMIC PLANNER</p>
          <h1>Good day! 🌷</h1>
          <p className="page-description">
            Let's make today productive and meaningful.
          </p>
        </div>
      </div>

      <div className="welcome-card">
        <div>
          <p className="welcome-label">WELCOME TO TASKLY</p>
          <h2>Organize your tasks, <br />one step at a time.</h2>
          <p>Stay organized and keep track of your academic journey.</p>
        </div>
        <div className="welcome-decoration">✿</div>
      </div>

      <h3 className="section-title">Overview</h3>

      {/* Angka statis '0' diganti dengan variabel dinamis */}
      <div className="summary-grid">
        <div className="summary-card lavender">
          <div className="summary-icon"><ListTodo /></div>
          <p>Total Tasks</p>
          <h2>{totalTasks}</h2>
        </div>

        <div className="summary-card pink">
          <div className="summary-icon"><Clock3 /></div>
          <p>To Do</p>
          <h2>{todoTasks}</h2>
        </div>

        <div className="summary-card sage">
          <div className="summary-icon"><CalendarDays /></div>
          <p>In Progress</p>
          <h2>{progressTasks}</h2>
        </div>

        <div className="summary-card cream">
          <div className="summary-icon"><CheckCircle2 /></div>
          <p>Completed</p>
          <h2>{completedTasks}</h2>
        </div>
      </div>

      {/* Menampilkan Upcoming Tasks menggunakan pola class lama agar tidak berantakan */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", marginBottom: "1rem" }}>
        <h3 className="section-title" style={{ margin: 0 }}>Upcoming Tasks</h3>
        <Link to="/tasks" style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", fontWeight: "500" }}>
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {upcomingTasks.length > 0 ? (
        <div className="summary-grid">
          {upcomingTasks.map((task) => (
            <div className="summary-card" key={task.id} style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", padding: "20px" }}>
              <h4 style={{ margin: 0, fontSize: "16px", color: "inherit" }}>{task.title}</h4>
              <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>{task.course}</p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "auto", paddingTop: "10px", fontSize: "13px", fontWeight: "600" }}>
                <CalendarDays size={14} />
                <span>{formatDate(task.deadline)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-section">
          <h3>All caught up!</h3>
          <p>Your upcoming assignments and deadlines will appear here.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;