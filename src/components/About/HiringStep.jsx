import "../../styles/hiring.css";

function HiringStep({ icon, title = "Astro", content = "The internet is a big big place.", isLeft = true }) {
  return (
    <div className={`tl-container ${isLeft ? 'left-container' : 'right-container'}`}>
      <div className="tl-icon">{icon}</div>
      <div className="tl-textbox shadow">
        <h2>{title}</h2>
        <p>{content}</p>
        <span className={isLeft ? 'left-container-arrow' : 'right-container-arrow'}></span>
      </div>
    </div>
  );
}

export default HiringStep; 