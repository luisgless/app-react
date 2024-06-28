import { useState } from 'react';

export function TwiterFollowCard({ children, userName }) {

  const [isFollowing, setIsFollowing] = useState(false)
  // =
// const state = useState(false)
// const isFollowing = state[0]
// const setIsFollowing = state[1]

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={"src/assets/img/Mar1el4.JPEG"}
          alt="Mar1el4"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
