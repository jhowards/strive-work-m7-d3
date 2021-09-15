import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMPANY_TO_FAV':
      return {
        ...state,
        companies: {
          ...state.companies,
          company: [...state.companies.company, action.payload],
        },
      }
    default:
      return state
  }
}

export default mainReducer