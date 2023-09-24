import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const SongItem = props => {
  const {song, deleteFunction} = props
  const {id, imageUrl, name, genre, duration} = song

  const onClickDelete = () => {
    deleteFunction(id)
  }

  return (
    <li className="song-item">
      <div className="image-heading-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="name">{duration}</p>
        <button data-testid="delete" onClick={onClickDelete} type="button">
          <AiOutlineDelete className="name" />
        </button>
      </div>
    </li>
  )
}

export default SongItem
