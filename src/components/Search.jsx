import {AiOutlineSearch} from 'react-icons/ai'


const Search = ({place}) => {
  return (
    <div className="search">
    <form >
      <div className="form-input">
        <div className='flex'>
          <AiOutlineSearch />
          <input type="email" placeholder={place} required />
        </div>
        <button className='button'>
          search
        </button>
        </div>
    </form>
  </div>
  )
}

export default Search