
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  UserRound,
  BookOpen,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "My Tasks",
      path: "/tasks",
      icon: ClipboardList,
    },
    {
      title: "My Profile",
      path: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <BookOpen size={23} />
        </div>
        <div>
          <h2>Taskly</h2>
          <p>Student Planner</p>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="menu-label">MENU</p>

        <nav className="nav-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Icon size={19} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="footer-decoration">✿</div>
        <p>Make every day count!</p>
        <span>Small steps, big progress.</span>
      </div>
    </aside>
  );
}

export default Sidebar;
