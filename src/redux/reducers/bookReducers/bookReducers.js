export default function (state, action) {
  const newState = {...state};

  console.log(action.type, action);

  return newState;
}
