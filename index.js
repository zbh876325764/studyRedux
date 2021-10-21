// library code
function createStore(reducer) {
  // 有四个部分
  // 1. 状态
  // 2.获取状态
  // 3.监听状态的改变
  // 4.更新状态
  let state;
  let listeners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  const dispatch = (action) => {
    // call todos
    // 循环调用listenners
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  return {
    getState,
    subscribe,
    dispatch,
  };
}
// app code
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
function addTodoAction(todo) {
  return { type: ADD_TODO, todo };
}
function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}
function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}
/**
 * 
 * 纯函数的特征
 1)如果传入相同的参数,他们总是返回相同的结果(getState)
 2)他们只依赖于传递给他们的参数(subscribe)
 3)不要产生任何副作用(dispatch)
 */
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}
function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
  }
}
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

const store = createStore(app);
// const unsubcribe = store.subscribe(() => {
//   console.log("new state", store.getState());
// });

