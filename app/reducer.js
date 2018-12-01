export const ACTIONS = {
    SET_PATIENT_COMMENT: 'SET_PATIENT_COMMENT',
    SET_MEDICAL_DATA: 'SET_MEDICAL_DATA',
}

const initialState = {
    "patientComment":  "",

    "medicalData": {
        "pulse": 0,
        "picfluometry": 0,
        "upperPressure": 0,
        "lowerPressure": 0
    }
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.SET_PATIENT_COMMENT:
        const { text } = action.payload

        return { ...state, patientComment: text };

    case ACTIONS.SET_MEDICAL_DATA:
        const medicalData = { ...state.medicalData },
            { key, value } = action.payload

        !medicalData[key] && (medicalData[key] = value)
    
        return { ...state, medicalData: medicalData };
    
    default:
      return state;
  }
}

export const setPatientCommentAction = (text) => (
    {
        type: ACTIONS.SET_PATIENT_COMMENT,
        payload: {
            text: text
        }
    }
)

export const setMedicalDataAction = (key, value) => (
    {
        type: ACTIONS.SET_MEDICAL_DATA,
        payload: {
            key: key,
            value: value
        }
    }
)