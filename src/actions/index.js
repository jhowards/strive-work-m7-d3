export const addToFavouritesAction = (companyToAdd) => ({
    type: 'ADD_COMPANY_TO_FAV',
    payload: companyToAdd,
  })

  export const removeFromFavouritesAction = (index) => ({
    type: 'REMOVE_COMPANY_FROM_FAVOURITES',
    payload: index,
  })