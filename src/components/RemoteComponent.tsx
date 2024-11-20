import { Routes, Route, useNavigate } from "react-router-dom";

interface RemoteComponentProps {
  standalone?: boolean;
}

// Nested routes components
const Dashboard = () => (
  <div className="p-4 bg-gray-100 rounded">
    <h3>Remote Dashboard</h3>
    <p>This is the dashboard view of the remote app</p>
  </div>
);

const Settings = () => (
  <div className="p-4 bg-gray-100 rounded">
    <h3>Remote Settings</h3>
    <p>This is the settings view of the remote app</p>
  </div>
);

const Profile = () => (
  <div className="p-4 bg-gray-100 rounded">
    <h3>Remote Profile</h3>
    <p>This is the profile view of the remote app</p>
  </div>
);

function RemoteComponent({
  standalone = false,
}: RemoteComponentProps): JSX.Element {
  const navigate = useNavigate();
  const basePath = standalone ? "" : "/remote";

  // Helper function to handle navigation
  const handleNavigation = (path: string) => {
    if (standalone) {
      navigate(path);
    } else {
      navigate(`${basePath}${path}`);
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid blue", margin: "10px" }}>
      <h2>Remote Application</h2>

      <nav style={{ marginBottom: "20px" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <button onClick={() => handleNavigation("/dashboard")}>
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/settings")}>
              Settings
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/profile")}>
              Profile
            </button>
          </li>
        </ul>
      </nav>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <Routes>
          <Route path={`${basePath}/dashboard`} element={<Dashboard />} />
          <Route path={`${basePath}/settings`} element={<Settings />} />
          <Route path={`${basePath}/profile`} element={<Profile />} />
          <Route path={`${basePath}/`} element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default RemoteComponent;
