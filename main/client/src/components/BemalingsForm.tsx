import { useState } from 'react';

const tabs = ['Parameters', 'Planning', 'Resources'] as const;

type Tab = (typeof tabs)[number];

const BemalingsForm = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Parameters');

  const renderTab = () => {
    switch (activeTab) {
      case 'Parameters':
        return (
          <div className="form-grid">
            <div className="input-group">
              <label>Locatie / cluster</label>
              <input placeholder="Bijv. Polder Oost cluster 3" />
            </div>
            <div className="input-group">
              <label>Doelpeil (m NAP)</label>
              <input type="number" step="0.01" placeholder="-1.20" />
            </div>
            <div className="input-group">
              <label>Hydraulische weerstand</label>
              <select>
                <option>Standaard klei-zand</option>
                <option>Hoge weerstand</option>
                <option>Lage weerstand</option>
              </select>
            </div>
            <div className="input-group">
              <label>Scenario toelichting</label>
              <textarea placeholder="Beschrijving van aannames en randvoorwaarden" />
            </div>
          </div>
        );
      case 'Planning':
        return (
          <div className="form-grid">
            <div className="input-group">
              <label>Startdatum</label>
              <input type="date" />
            </div>
            <div className="input-group">
              <label>Fasering</label>
              <select>
                <option>Gefaseerd - 3 stappen</option>
                <option>Gefaseerd - 5 stappen</option>
                <option>Direct maximaal</option>
              </select>
            </div>
            <div className="input-group">
              <label>Scenario duur (dagen)</label>
              <input type="number" placeholder="21" />
            </div>
            <div className="input-group">
              <label>Toelichting fasering</label>
              <textarea placeholder="Welke mitigatie en controles worden uitgevoerd?" />
            </div>
          </div>
        );
      case 'Resources':
        return (
          <div className="form-grid">
            <div className="input-group">
              <label>Bemalingscapaciteit</label>
              <input placeholder="Pomp 2x 450 m3/u" />
            </div>
            <div className="input-group">
              <label>Meetstrategie</label>
              <select>
                <option>Realtime sensoren</option>
                <option>Handmatige meting</option>
                <option>Combinatie</option>
              </select>
            </div>
            <div className="input-group">
              <label>Waarschuwingen</label>
              <input placeholder="SMS + E-mail, drempel 80%" />
            </div>
            <div className="input-group">
              <label>Opmerkingen</label>
              <textarea placeholder="Beschikbaarheid team, contractuele beperkingen" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="card card--glass" style={{ display: 'grid', gap: '16px' }}>
      <div className="section-header">
        <div>
          <p className="text-muted">Stap 2 • Profiel</p>
          <h3 className="h2">Parameterisatie & uitvoering</h3>
        </div>
        <div className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tabs__tab ${activeTab === tab ? 'tabs__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {renderTab()}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button className="btn btn--ghost">Opslaan concept</button>
        <button className="btn btn--primary">Bereken impact</button>
      </div>
    </div>
  );
};

export default BemalingsForm;
