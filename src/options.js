export default function Options({ hide, setHide, setHideFlash, setHideGame }) {
  let classes = `miniProjects ${hide ? "hide" : ""}`;
  function hideFlash() {
    setHide(true);
    setHideFlash(false);
  }
  function hideGame() {
    setHide(true);
    setHideGame(false);
  }
  return (
    <div className={classes}>
      <div className="project flashlight" onClick={hideFlash}>
        Find the <br /> <br />
        affirmation
      </div>
      <div className="project game" onClick={hideGame}>
        Game
      </div>
    </div>
  );
}
