import './index.css'

const MatchGamePhotos = props => {
  const {appDetails, setActivePhotoId} = props
  const {thumbnailUrl, id} = appDetails

  const activePhoto = () => {
    setActivePhotoId(id)
  }

  return (
    <li className="app-item">
      <button className="image-button" type="button" onClick={activePhoto}>
        <img className="app-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGamePhotos
