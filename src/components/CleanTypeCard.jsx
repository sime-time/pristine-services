function CleanTypeCard({ title, btnLabel, btnHref, description }) {
  return (
    <div className="card specific-h-lg-200 h-100 p-2 px-4 w-100 shadow mb-4">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between gap-3 mh-100">

        <div className="d-flex flex-column justify-content-between gap-2 mb-2">
          <h2 className="card-title">{title}</h2>
          <div><a href={btnHref} className="btn btn-outline-primary btn-lg px-4 py-2 fs-5 fw-bold">{btnLabel}</a></div>
        </div>

        <div className="d-flex flex-column text-wrap fs-5 lh-lg specific-w-md-600">
          {description}
        </div>

      </div>
    </div>
  );
}
export default CleanTypeCard;