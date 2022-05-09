export const initialState = {
    contactInformation :{ },
    experience:{},
    experiences: [],
    education:{},
    educations: [],
    skills:[],
    summery:''
}

export const actions = {
        ADD_CONTACT_INFROMATION: 'ADD_CONTACT_INFROMATION',
        ADD_EXPERIENCE: 'ADD_EXPERIENCE',
        ADD_EXPERIENCES: 'ADD_EXPERIENCES',
        ADD_EDUCATION: 'ADD_EDUCATION',
        ADD_EDUCATIONS: 'ADD_EDUCATIONS',
        ADD_SKILLS: 'ADD_SKILLS',
        ADD_SUMMERY: 'ADD_SUMMERY'
}
const reducer = (state, action) =>{
    switch(action.type){
        case actions.ADD_CONTACT_INFROMATION:
            return{
                ...state,
                contactInformation: action.item
            }
        case actions.ADD_EXPERIENCE:
            return{
                ...state,
                experience:action.item
            }
        case actions.ADD_EXPERIENCES:
            return{
                ...state,
                experiences: [...state.experiences, action.item]
            }
        case actions.ADD_EDUCATION:
            return{
                ...state,
                education: action.item
            }
        case actions.ADD_EDUCATIONS:
            return{
                ...state,
                education: [...state.educations, action.item]
            }
        case actions.ADD_SKILLS:
            return{
                ...state,
                skills: action.item
            }
        case actions.ADD_SUMMERY:
            return{
                ...state,
                summery: action.item
            }
        default :
            return state
  
    }
}

export default reducer