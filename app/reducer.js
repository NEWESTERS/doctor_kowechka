export const ACTIONS = {
    SET_PATIENT_COMMENT: 'SET_PATIENT_COMMENT',
    SET_MEDICAL_DATA: 'SET_MEDICAL_DATA',
    SET_KOWECHUB_CONNECTION: 'SET_KOWECHUB_CONNECTION'
}

const initialState = {
    "patientComment":  "",

    "medicalData": {
        "pulse": 0,
        "picfluometry": 0,
        "upperPressure": 0,
        "lowerPressure": 0
    },

    "kowechubConnected": undefined
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

    case ACTIONS.SET_KOWECHUB_CONNECTION:
        const { isConnected } = action.payload

        return { ...state, kowechubConnected: isConnected }
    
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

export const setKowechubConnectionAction = (isConnected) => (
    {
        type: ACTIONS.SET_KOWECHUB_CONNECTION,
        payload: {
            isConnected: isConnected
        }
    }
)