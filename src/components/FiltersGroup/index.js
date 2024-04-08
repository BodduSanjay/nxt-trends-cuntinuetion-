import {FiSearch} from 'react-icons/fi'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, onSearch, onClickClear} = props

  const onChangeSearch = event => {
    const valueEntered = event.target.value
    const keyEntered = event.key
    if (valueEntered.trim() !== '' && keyEntered === 'Enter') {
      onSearch(valueEntered)
    }
  }

  const clearfiter = () => {
    onClickClear()
  }

  return (
    <div className="filters-group-container">
      <div>
        <input type="search" placeholder="Search" onChange={onChangeSearch} />
        <FiSearch />
      </div>
      <ul>
        <h1>Category</h1>
        {categoryOptions.map(each => {
          const {onClickCategory} = props

          const onCategoryOptionClicked = () => {
            onClickCategory(each.categoryId)
          }

          return (
            <li key={each.categoryId}>
              <button onClick={onCategoryOptionClicked} type="button">
                <p>{each.name}</p>
              </button>
            </li>
          )
        })}
      </ul>
      <ul>
        <h1>Rating</h1>
        {ratingsList.map(each => {
          const {onClickRating} = props

          const onRatingOptionClicked = () => {
            onClickRating(each.ratingId)
          }

          return (
            <li key={each.ratingId}>
              <button onClick={onRatingOptionClicked} type="button">
                <img src={each.imageUrl} alt={`rating ${each.ratingId}`} />
              </button>
            </li>
          )
        })}
      </ul>

      <button onClick={clearfiter} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
