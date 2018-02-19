// const increment = {
//   type: 'INCREMENT',
// };
// const decrement = {
//   type: 'DECREMENT',
// };
// module.exports = { increment, decrement };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
