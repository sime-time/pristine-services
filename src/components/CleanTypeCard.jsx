function CleanTypeCard({ title, btnLabel, btnHref }) {
  return (
    <div className="card specific-h-md-200 p-2 px-4 w-100 shadow">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between gap-4">

        <div className="d-flex flex-column justify-content-between gap-2">
          <h2 className="card-title">{title}</h2>
          <div><a href={btnHref} className="btn btn-outline-primary btn-lg px-4 py-2 fs-5 fw-bold">{btnLabel}</a></div>
        </div>

        <div className="d-flex flex-column text-wrap ">
          <ul>
            <li>Designed for regular upkeep, our standard cleaning service covers all your essential tasks</li>
            <li><a href="/checklist">See our cleaning checklist</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
export default CleanTypeCard;