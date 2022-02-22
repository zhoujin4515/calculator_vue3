

const isDigit = character => {
  return character >= '0' && character <= '9'
}

const isOperator = character => {
  return !!OPERATORS[character]
}

const isEqualSign = character => {
  return character === '='
}

const addDigit = (calculatorState, character) => {
  if (calculatorState.initial) {
    return {
      ...calculatorState,
      display: character,
      previousOperand: parseInt(calculatorState.display),
      initial: false
    }
  } else {
    return {
      ...calculatorState,
      display: calculatorState.display + character,
    }
  }
}

const addOperator = (calculatorState, character) => {
  if (!calculatorState.operator || calculatorState.initial) {
    return {
      ...calculatorState,
      operator: character,
      initial: true
    } 
  } else {
    return {
      operator: character,
      ...compute(calculatorState)
    }
  }
}

const compute = (calculatorState) => {
  if (calculatorState.operator) {
    return {
      display: 
        String(OPERATORS[calculatorState.operator](calculatorState.previousOperand, parseInt(calculatorState.display))),
      initial: true
    }
  } else {
    return {
      ...calculatorState,
      initial: true
    }
  }
}

const initialState = {
  display: '0',
  initial: true
}

const nextState = (calculatorState, character) => {
  console.log('run nextState')
  if (isDigit(character)) {
    return addDigit(calculatorState, character)
  } else if(isOperator(character)) {
    return addOperator(calculatorState, character)
  } else if(isEqualSign(character)) {
    return compute(calculatorState)
  } else {
    return calculatorState
  }
}

export default {
  initialState,
  nextState
}

const OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}