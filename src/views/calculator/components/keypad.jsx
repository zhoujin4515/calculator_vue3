import { defineComponent } from 'vue'

const Keypad = defineComponent({
  name: 'keypad',

  props: {
    onKeypad: Function,
  },

  setup(props) {
    const renderKey = (keyProps) => {
      return <div 
        className={keyProps.text <= '9' && keyProps.text >= '0' ? 'number' : 'operator'} 
        onClick={() => props.onKeypad(keyProps.text)}>{keyProps.text}
      </div>
    }

    return () => (<div className="keypad-box">
        {renderKey({text: '7'})}
        {renderKey({text: '8'})}
        {renderKey({text: '9'})}
        {renderKey({text: '/'})}
        {renderKey({text: '4'})}
        {renderKey({text: '5'})}
        {renderKey({text: '6'})}
        {renderKey({text: '*'})}
        {renderKey({text: '1'})}
        {renderKey({text: '2'})}
        {renderKey({text: '3'})}
        {renderKey({text: '-'})}
        {renderKey({text: ''})}
        {renderKey({text: '0'})}
        {renderKey({text: '+'})}
        {renderKey({text: '='})}
      </div>)
  }
})

export default Keypad