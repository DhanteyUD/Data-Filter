/** @format */

import React from 'react';
import './Theme.css';

function Theme() {
  const [backgroundColor, setBackgroundColor] = React.useState('#d9d9d9');

  React.useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor]);

  function onButtonClick() {
    setBackgroundColor(backgroundColor === '#d9d9d9' ? '#242526' : '#d9d9d9');
  }

  return (
    <>
      {backgroundColor === '#d9d9d9' ? (
        <span className="smiley">Yaay! 🌝</span>
      ) : (
        <span className="smiley-dark">Oops! 🌚</span>
      )}

      {backgroundColor === '#d9d9d9' ? (
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            onClick={onButtonClick}
          />
          <span className="slider round"></span>
          <h3 className="sun">Light</h3>
          <h3 className="sun-moon">Dark</h3>
        </label>
      ) : (
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            onClick={onButtonClick}
          />
          <span className="slider round"></span>
          <h3 className="moon-sun">Light</h3>
          <div className="half-moon"></div>
          <h3 className="moon">Dark</h3>
        </label>
      )}
    </>
  );
}

export default Theme;
