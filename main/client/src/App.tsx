import { NavLink, Route, Routes } from 'react-router-dom';
import HubHome from './pages/HubHome';
import PlanvoorbereiderPage from './pages/PlanvoorbereiderPage';
import ProjectenPage from './pages/ProjectenPage';

const App = () => {
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo__mark">T</div>
          <div>
            <div className="h3">Tjaden</div>
            <div className="text-muted body-sm">Engineering Hub</div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} end>
            <span className="status-dot" />
            Dashboard
          </NavLink>
          <NavLink
            to="/planvoorbereider"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="status-dot" />
            Planvoorbereider
          </NavLink>
          <NavLink to="/projecten" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <span className="status-dot" />
            Projecten & Historie
          </NavLink>
        </nav>
      </aside>

      <main className="app-main">
        <header className="app-header">
          <div className="app-header__title">
            <span className="text-muted">Tjaden • Innovatie & Waterbeheer</span>
            <h1 className="h1">Engineering Control Tower</h1>
          </div>
          <div className="app-header__actions">
            <button className="btn btn--ghost">Status export</button>
            <button className="btn btn--primary btn--pill">Nieuwe sessie</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/planvoorbereider" element={<PlanvoorbereiderPage />} />
          <Route path="/projecten" element={<ProjectenPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
