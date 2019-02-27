import React, { useState } from "react";

import PlayIcon from "../../assets/media/play_icon.png";
import PauseIcon from "../../assets/media/pause_icon.png";

export default ({ poster, video }) => {
  const [playing, setPlaying] = useState(false);
  const [controls, setControls] = useState(true);

  const handleClick = e => {
    e.preventDefault();
    if (playing) {
      e.currentTarget.previousElementSibling.pause();
      setPlaying(false);
    } else {
      e.currentTarget.previousElementSibling.play();
      setPlaying(true);
      setControls(false);
    }
  };

  const showPoster = e => {
    e.target.load();
    setPlaying(false);
    setControls(true);
  };

  return (
    <div
      className="player"
      onMouseMove={() => playing && setControls(true)}
      onMouseLeave={() => playing && setControls(false)}
      onMouseEnter={() => playing && setControls(true)}
    >
      <video
        preload="true"
        onEnded={showPoster}
        src={video}
        poster={poster}
        className="player__video"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="/about">download it</a>
        and watch it with your favorite video player!
      </video>
      <button
        className="player__ctrl"
        onFocus={e => e.target.classList.add("player--focused")}
        onBlur={e => e.target.classList.remove("player--focused")}
        onClick={handleClick}
        style={controls ? { display: "initial" } : { display: "none" }}
      >
        <img
          src={playing ? PauseIcon : PlayIcon}
          alt="Play Icon"
          className="player__icon"
        />
      </button>
    </div>
  );
};
