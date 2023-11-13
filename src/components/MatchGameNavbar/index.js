import './index.css'

const MatchGameNavbar = props => {
  const {score, timer} = props

  return (
    <nav className="upper-navbar">
      <li>
        <img
          className="match-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <div className="score-container">
        <li>
          <p className="score-paragraph">
            Score: <span className="Score">{score}</span>
          </p>
        </li>
        <li>
          <img
            className="timer"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
        </li>
        <li>
          <p className="Score">{timer} Sec</p>
        </li>
      </div>
    </nav>
  )
}
export default MatchGameNavbar
