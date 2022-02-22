
import { defineComponent, onMounted } from 'vue'
import Keypad from './components/keypad.jsx'
import calculator from '@/utils/calculator'

export default defineComponent({
  components: {
    Keypad
  },
  data() {
    return {
      calculatorState: calculator.initialState
    }
  },
  setup() {
    onMounted(() => {
    })
  },
  render() {
    return (<div>
      <div className="display">{this.calculatorState.display}</div>
      <Keypad
        onKeypad={(key) => {
          this.calculatorState = calculator.nextState(this.calculatorState, key)
        }} 
      />
    </div>
  )}
})