const ProjectenPage = () => {
  const cards = [
    {
      title: 'Asset portfolio',
      text: 'Overzicht van lopende projecten met fase-indicatie en risicoprofiel.',
    },
    {
      title: 'Rapportage sprint',
      text: 'Directe export naar PDF/PowerPoint met Tjaden-huisstijl.',
    },
    {
      title: 'Kennisbank',
      text: 'Templates, best-practices en lessons learned uit eerdere trajecten.',
    },
  ];

  return (
    <div className="grid" style={{ gap: '16px' }}>
      <div className="card card--glass" style={{ display: 'grid', gap: '12px' }}>
        <div className="section-header">
          <div>
            <p className="text-muted">Projecten & Historie</p>
            <h2 className="h2">Portfolio overzicht</h2>
          </div>
          <div className="badge">Beta</div>
        </div>
        <p className="body-sm text-muted" style={{ maxWidth: 640 }}>
          Professionele projecthub met nadruk op traceerbaarheid, risico-inschatting en snelle rapportage.
          Dit is een placeholder sectie die eenvoudig kan worden uitgebreid met echte data of API-koppelingen.
        </p>
        <div className="grid grid--tiles">
          {cards.map((card) => (
            <div key={card.title} className="card" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="h3">{card.title}</div>
              <p className="text-muted body-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectenPage;
