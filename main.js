function jsIsHard(pain, callback) {
  // I want a piece of code to run, and once its run, then our callback
  // function runs afterwards
  // scope
  console.log(`brain is ${pain}`);
  callback();
}

function whatever() {
  console.log("Whatvr");
}

jsIsHard("melting", whatever);

// state, actions, reducer
class Store {
  constructor() {
    if (Store.instance) return Store.instance;
    this.state = {};
  }
  getIt() {
    return this.state;
  }
  dispatch(action) {
    const newIt = reducer(this.state, action);
    this.state = newIt;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// create it
const store = new Store();
// dispatch an action etc...
// store.dispatch( {type: })
