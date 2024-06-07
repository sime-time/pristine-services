function AssuranceCard({ card }) {
  return (
    <div className="card border-0 rounded-4 shadow py-3 px-2 w-100 h-100">
      <div className="card-body d-flex flex-column ">
        <div className="display-2 mb-4 text-primary">{card.icon}</div>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-text text-wrap fs-5 ">{card.content}</p>
      </div>
    </div>
  );
}

export default AssuranceCard;