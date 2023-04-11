export interface IFormulaElement{
  name: string,
  description: string,
  value: string,
  type: 'operator' | 'function' | 'constant'
}
