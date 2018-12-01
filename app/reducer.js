export const ACTIONS = {
    SET_ANSWER: 'SET_ANSWER',
    SET_PULSE: 'SET_PULSE',
    SET_UPPER_PRESSURE: 'SET_UPPER_PRESSURE',
    SET_LOWER_PRESSURE: 'SET_LOWER_PRESSURE',
    SET_PICFLUOMETRY: 'SET_PICFLUOMETRY',
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
  const medicalData = { ...state.medicalData }

  switch (action.type) {
    case ACTIONS.SET_ANSWER:
        const { text } = action.payload

        return { ...state, patientComment: text };

    case ACTIONS.SET_PULSE:
        const { value: pulseValue } = action.payload
        
        if(!medicalData.pulse) {
            medicalData.pulse = pulseValue
        }

        return { ...state, medicalData: medicalData };
    
    case ACTIONS.SET_UPPER_PRESSURE:
        const { value: upperPressureValue } = action.payload   

        if(!medicalData.upperPressure) {
            medicalData.upperPressure = upperPressureValue
        }

        return { ...state, medicalData: medicalData };

    case ACTIONS.SET_LOWER_PRESSURE:
        const { value: lowerPressureValue } = action.payload
            
        if(!medicalData.lowerPressure) {
            medicalData.lowerPressure = lowerPressureValue
        }

        return { ...state, medicalData: medicalData };

    case ACTIONS.SET_PICFLUOMETRY:
        const { value: picfluometryValue } = action.payload

        if(!medicalData.picfluometry) {
            medicalData.picfluometry = picfluometryValue
        }

        return { ...state, medicalData: medicalData };
    
    default:
      return state;
  }
}

export function setAnswerAction(text) {
  return {
    type: ACTIONS.SET_ANSWER,
    payload: {
      text: text
    }
  };
}

export function setPulseAction(value) {
    return {
        type: ACTIONS.SET_PULSE,
        payload: {
            value: value
        }
    };
}

export function setUpperPressureAction(value) {
    return {
        type: ACTIONS.SET_UPPER_PRESSURE,
        payload: {
            value: value
        }
    };
}

export function setLowerPressureAction(value) {
    return {
        type: ACTIONS.SET_LOWER_PRESSURE,
        payload: {
            value: value
        }
    };
}

export function setPicfluometryAction(value) {
    return {
        type: ACTIONS.SET_PICFLUOMETRY,
        payload: {
            value: value
        }
    };
}