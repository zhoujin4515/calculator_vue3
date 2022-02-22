import { expect } from 'chai'
import calculator from '@/utils/calculator'
console.log(calculator, '-------')
// var stream = (characters, calculatorState = calculator.initalState) => {
//   return !characters
//             ? calculatorState
//             : stream(characters.slice(1),
//             calculator.nextState(calculatorState, characters[0]))
// }
// console.log(stream('4'), '----4')

describe('calculator', () => {
  var stream = (characters, calculatorState = calculator.initialState) => {
    return !characters
              ? calculatorState
              : stream(characters.slice(1),
              calculator.nextState(calculatorState, characters[0]))
  }
  it('初始化的显示应该为0', () => {
    expect(calculator.initialState.display).to.equal('0')
  })

  it('输入数字应该显示数字', ()=> {
    expect(stream('4').display).to.equal('4')
  })

  it('输入多个数字应该添加在尾部', ()=> {
    expect(stream('44').display).to.equal('44')
  })

  it('不改变计算器显示，当操作按钮首次出现', () => {
    expect(stream('4+').display).to.equal('4')
  })

  it('当数字出现在操作按钮之后，应该显示这个数字', () => {
    expect(stream('44+33').display).to.equal('33')
  })
  
  it('计算 37+42 = 79', () => {
    expect(stream('37+42=').display).to.equal('79')
  })

  it('应该计算新的一个表达式在点击”=“按钮之后', () => {
    expect(stream('1+2=4*5=').display).to.equal('20')
  })

  it('应该在下一个计算中使用上一个计算的结果', () => {
    expect(stream('1+2=*5=').display).to.equal('15')
  })

  it('第二个操作符也有等于作用', () => {
    expect(stream('1+2*').display).to.equal('3')
  })

  it('第二个操作符也有等于作用且可以继续计算', () => {
    expect(stream('1+2*11=').display).to.equal('33')
  })

  it('+42=42', () => {
    expect(stream('+42=').display).to.equal('42')
  })

  it('*42=0', () => {
    expect(stream('*42=').display).to.equal('0')
  })

  it('47-48=-1', () => {
    expect(stream('47-48=').display).to.equal('-1')
  })

  it('8/2=4', () => {
    expect(stream('8/2=').display).to.equal('4')
  })


})