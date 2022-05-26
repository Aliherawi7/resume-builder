import { StateContext } from "./StateProvider"

export const initialState = {
    contactInformation: {},
    experience: {},
    experiences: [],
    education: {},
    educations: [],
    skills: [],
    summery: []
}

export const actions = {
    ADD_CONTACT_INFROMATION: 'ADD_CONTACT_INFROMATION',
    ADD_EXPERIENCE: 'ADD_EXPERIENCE',
    ADD_EXPERIENCES: 'ADD_EXPERIENCES',
    ADD_EDUCATION: 'ADD_EDUCATION',
    ADD_EDUCATIONS: 'ADD_EDUCATIONS',
    REMOVE_FROM_EXPERIENCES: 'REMOVE_FROM_EXPERIENCES',
    REMOVE_FROM_EDUCATIONS: 'REMOVE_FROM_EDUCATIONS',
    ADD_SKILLS: 'ADD_SKILLS',
    ADD_SUMMERY: 'ADD_SUMMERY',
    EDIT_EXPERIENCE: 'EDIT_EXPERIENCE',
    EDIT_EDUCATION: 'EDIT_EDUCATION',
}
const reducer = (state, action) => {
    switch (action.type) {

        // its posipple to use it as add or edit
        case actions.ADD_CONTACT_INFROMATION:
            return {
                ...state,
                contactInformation: action.item
            }
        case actions.ADD_EXPERIENCE:{
            return {
                ...state,
                experience: action.item
            }
        }
            
        case actions.ADD_EXPERIENCES: {
            return {
                ...state,
                experiences: [...state.experiences, action.item]
            }
        }
        case actions.ADD_EDUCATION:
            return {
                ...state,
                education: action.item
            }
        case actions.ADD_EDUCATIONS:
            return {
                ...state,
                educations: [...state.educations, action.item]
            }
        case actions.ADD_SKILLS:
            return {
                ...state,
                skills: action.item
            }
        case actions.ADD_SUMMERY:
            return {
                ...state,
                summery: action.item
            }
        case actions.REMOVE_FROM_EXPERIENCES: {
            const itemIndex = state.experiences.findIndex((el) => {
                return el === action.item
            })
            if (itemIndex >= 0) {
                return {
                    ...state,
                    experiences: [...state.experiences.splice(itemIndex, 1)]
                }
            }else{
                return state
            }
            
        }
        case actions.REMOVE_FROM_EDUCATIONS: {
            const itemIndex = state.educations.findIndex((el) => {
                return el === action.item
            })
            if (itemIndex >= 0) {
                return {
                    ...state,
                    educations: [...state.educations.splice(itemIndex, 1)]
                }
            }else{
                return state
            }
        }
        case actions.EDIT_EDUCATION: {
            const index = state.educations.findIndex((item) => {
                return item === action.item
            })
            return {
                ...state,
                education: {...state.educations[index]}
            }
        }
        case actions.EDIT_EXPERIENCE: {
            const index = state.experiences.findIndex((item) => {
                return item == action.item
            })
            return {
                ...state,
                experience: {...state.experiences[index]}
            }
        }
        default:
            return state

    }
}

export default reducer