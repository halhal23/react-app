export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const DOUBLE = 'DOUBLE'

export const increment = () => ({ 
  type: INCREMENT 
})
export const decrement = () => ({
  type: DECREMENT
})
export const double = () => ({
  type: DOUBLE
})