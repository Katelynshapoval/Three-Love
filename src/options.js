export default function Options({ hide, setHide, hideFlash, setHideFlash }) {
  let classes = `miniProjects ${hide ? "hide" : ""}`;
  function hi() {
    setHide(true);
    setHideFlash(false);
    console.log(classes);
  }
  return (
    <div className={classes}>
      <div className="project flashlight" onClick={hi}>
        Find the affirmation
      </div>
      <div className="project game">Game</div>
      <div className="project robots">Chat</div>
    </div>
  );
}
