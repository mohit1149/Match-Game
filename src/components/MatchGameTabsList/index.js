import './index.css'

const MatchGameTabsList = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default MatchGameTabsList
