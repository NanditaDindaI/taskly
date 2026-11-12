import {
  UserRound,
  GraduationCap,
  IdCard,
  Users,
  Mail,
  BookOpen,
  CalendarDays,
} from "lucide-react";

function Profile() {
  // Ganti data berikut sesuai identitasmu
  const student = {
    name: "Nandita Dinda Indraswari",
    nim: "21120124120015",
    group: "Kelompok 22",
    major: "Teknik Komputer",
    university: "Universitas Diponegoro",
    year: "2024",
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <p className="eyebrow">GET TO KNOW YOU</p>
          <h1>My Profile</h1>
          <p className="page-subtitle">
            Your personal academic information.
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="profile-main-card">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img
              src="/images/profile.jpg"
              alt="Profile"
            />
          </div>
        </div>

        <div className="profile-identity">
          <h2>{student.name}</h2>
          <p>{student.major} Student</p>

          <div className="profile-tags">
            <span>
              <GraduationCap size={14} />
              {student.university}
            </span>

            <span>
              <CalendarDays size={14} />
              Class of {student.year}
            </span>
          </div>
        </div>
      </div>

      {/* Student Information */}
      <div className="profile-information">
        <div className="section-heading">
          <h2>Student Information</h2>
          <p>Your academic identity and details.</p>
        </div>

        <div className="profile-info-grid">
          <div className="profile-info-item">
            <div className="profile-info-icon lavender-icon">
              <UserRound size={20} />
            </div>

            <div>
              <span>Full Name</span>
              <h3>{student.name}</h3>
            </div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-icon pink-icon">
              <IdCard size={20} />
            </div>

            <div>
              <span>Student ID (NIM)</span>
              <h3>{student.nim}</h3>
            </div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-icon cream-icon">
              <Users size={20} />
            </div>

            <div>
              <span>Group</span>
              <h3>{student.group}</h3>
            </div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-icon sage-icon">
              <BookOpen size={20} />
            </div>

            <div>
              <span>Study Program</span>
              <h3>{student.major}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* About Application */}
      <div className="profile-about">
        <div className="about-icon">
          <GraduationCap size={25} />
        </div>

        <div>
          <h3>About Taskly</h3>
          <p>
            Taskly is a personal academic planner designed to
            help students organize assignments, manage deadlines,
            and track their academic progress.
          </p>
          <span>Taskly PWA · Version 1.0.0</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;