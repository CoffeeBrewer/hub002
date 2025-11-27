import { Link } from 'react-router-dom';

const tiles = [
  { label: 'PlanVoorbereider', description: 'Stel scenario’s op en bewaak ontwerpkeuzes', to: '/planvoorbereider' },
  { label: 'Projecten & Historie', description: 'Overzicht van lopende trajecten en dossierarchief', to: '/projecten' },
  { label: 'Monitoring & Rapportage', description: 'Live sensordata, rapportages en KPI dashboards', to: '/projecten' },
  { label: 'Bibliotheek & Templates', description: 'Standaard templates, checklists en documentatie', to: '/projecten' },
];

const HubHome = () => {
  return (
    <div className="grid" style={{ gap: '24px' }}>
      <section className="card card--glass helper-striping" style={{ padding: '32px', position: 'relative' }}>
        <div className="section-header">
          <div>
            <p className="text-muted">Tjaden Hub</p>
            <h2 className="h1">Welkom terug, engineer</h2>
            <p className="body-sm" style={{ maxWidth: 640 }}>
              Een centrale cockpit voor planvoorbereiding, monitoring en kennisdeling. Gebruik de tegels
              hieronder om direct een traject te starten of informatie terug te vinden.
            </p>
          </div>
          <div className="badge badge--success">Live status: stabiel</div>
        </div>
      </section>

      <section className="grid grid--tiles">
        {tiles.map((tile) => (
          <Link to={tile.to} key={tile.label} className="tile">
            <div className="tile__label">{tile.label}</div>
            <div className="tile__meta">{tile.description}</div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HubHome;
