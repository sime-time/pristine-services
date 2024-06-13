function HowItWorksCard({ card }) {
  return (
    <div className="card border-0 rounded-4 shadow p-2 w-100 h-100">
      <div className="card-body d-flex flex-column text-center align-items-center">
        <div className="display-2 mb-4 text-primary">{card.icon}</div>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-text text-wrap fs-5">{card.content}</p>
      </div>
    </div>
  );
}

export default HowItWorksCard;