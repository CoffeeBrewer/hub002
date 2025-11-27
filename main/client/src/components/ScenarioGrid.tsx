interface Scenario {
  title: string;
  context: string;
  risk: 'Laag' | 'Midden' | 'Hoog';
  status: string;
}

const scenarios: Scenario[] = [
  { title: 'Polder Oost – Nacht', context: 'Laag peil, pompcap. 70%', risk: 'Laag', status: 'Stand-by' },
  { title: 'Polder Oost – Zwaar', context: 'Verzadigde bodem, piekbuien', risk: 'Hoog', status: 'Actief' },
  { title: 'Ringdijk Noord', context: 'Onderhoud bypass', risk: 'Midden', status: 'Analyse' },
  { title: 'Kade West', context: 'Hoge scheepvaartdruk', risk: 'Midden', status: 'Monitoring' },
  { title: 'Zuid – Industrie', context: 'Afvoer industriële lozing', risk: 'Hoog', status: 'Alert' },
  { title: 'Reservoir Delta', context: 'Vulling 52%, veiligheidsmarge', risk: 'Laag', status: 'OK' },
  { title: 'Binnenstad', context: 'Riool overstort risico', risk: 'Hoog', status: 'Focus' },
  { title: 'Natuurgebied', context: 'Ecologisch peilbeheer', risk: 'Laag', status: 'Stabiel' },
];

const riskBadgeClass = (risk: Scenario['risk']) => {
  if (risk === 'Hoog') return 'badge badge--warning';
  if (risk === 'Midden') return 'badge';
  return 'badge badge--success';
};

const ScenarioGrid = () => {
  return (
    <div className="scenario-grid">
      {scenarios.map((scenario) => (
        <div className="scenario-card" key={scenario.title}>
          <div className="scenario-card__title">{scenario.title}</div>
          <div className="scenario-card__meta">{scenario.context}</div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className={riskBadgeClass(scenario.risk)}>{scenario.risk}</span>
            <span className="text-muted">{scenario.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScenarioGrid;
