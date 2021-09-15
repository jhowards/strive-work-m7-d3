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
      case 'REMOVE_COMPANY_FROM_FAVOURITES':
        return {
          ...state,
          companies: {
            ...state.companies,
            company: state.companies.company.filter((company, i) => i !== action.payload),
          },
        }
    default:
      return state
  }
}

export default mainReducer