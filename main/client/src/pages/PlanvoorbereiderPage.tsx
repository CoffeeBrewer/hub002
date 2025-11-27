import BemalingsForm from '../components/BemalingsForm';
import ScenarioGrid from '../components/ScenarioGrid';

const PlanvoorbereiderPage = () => {
  return (
    <div className="grid" style={{ gap: '20px' }}>
      <section className="card card--glass" style={{ display: 'grid', gap: '12px' }}>
        <div className="section-header">
          <div>
            <p className="text-muted">Stap 1 • Scenario selectie</p>
            <h2 className="h2">Kies een scenario template</h2>
          </div>
          <div className="badge">8 actieve templates</div>
        </div>
        <ScenarioGrid />
      </section>

      <section className="dashboard-two-col">
        <BemalingsForm />
        <aside className="card" style={{ display: 'grid', gap: '14px' }}>
          <div className="section-header">
            <h3 className="h3">Live samenvatting</h3>
            <div className="badge badge--success">Real-time</div>
          </div>
          <div className="summary-panel">
            <div className="summary-stat">
              <span>Verwachte piek</span>
              <strong>+12 cm</strong>
            </div>
            <div className="summary-stat">
              <span>Pompbelasting</span>
              <strong>72%</strong>
            </div>
            <div className="summary-stat">
              <span>CO₂ footprint</span>
              <strong className="text-muted">2.1 ton</strong>
            </div>
          </div>

          <div>
            <p className="text-muted">Filterprofiel</p>
            <div className="map-preview">
              <div className="map-preview__grid" />
              <div className="map-preview__pin" style={{ left: '32%', top: '40%' }} />
              <div className="map-preview__pin" style={{ left: '65%', top: '55%' }} />
              <div className="map-preview__pin" style={{ left: '48%', top: '30%' }} />
            </div>
          </div>

          <div>
            <p className="text-muted">Historische suggesties</p>
            <div className="timeline">
              <div className="timeline__item">
                <div className="timeline__bar" />
                <div className="timeline__content">
                  <div className="h3">Delta 2023</div>
                  <p className="body-sm text-muted">Gelijksoortige neerslag, fasering 3 stappen</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__bar" />
                <div className="timeline__content">
                  <div className="h3">Polder Zuid</div>
                  <p className="body-sm text-muted">Succesvolle reductie van 18 cm binnen 36 uur</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default PlanvoorbereiderPage;
