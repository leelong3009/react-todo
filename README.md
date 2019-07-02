# Experiencing React and Redux

1. Use object[key] to access values of this key. E.g: 
    - users = {1: {id: 1, name: "a"}, 2: {id: 2, name:"b"}} then users[1] -> {id: 1, name:"a"}
2. Use Destructuring to exact values from an array, object. E.g: const {id, name} = user;
3. Use spread syntax to clone/ combine array, object, pass to function. E.g: let arr = [...arr1, 5]
4. Open parenthesis & curly bracket: 
    - arrow function syntax () => (expession) or () => ({id : 1}) to return an object/value, or if you want to use {}, you have to return a value. 
    - For stateless functional components, we use destructuring operator {} to pass arguments, e.g: ({ todos }) => {...}. 
    - When returning an JSX, we use ().

# Redux

### Redux is a predictable state container for JavaScript apps.

<img src="redux.png" style="align:center"/>

1. connect()

- Flow to create a new feature e.g Filter: 
    - Create an action type SET_FILTER 
    - Map this action to buttons by importing it, connecting it via mapDispatchToProps, passing it as an argument in the component's constructor function, then calling it directly. 
    - Create a reducer for it, return the filter type which will be merged to the store's state 
    - In the component, collect filter type value in state when calling mapStateToProps, then filtering values. At this step the component already has the updated store's state.
- **mapStateToProps(state, ownProps?) => Object**:
    - Used to to map current store's values to the component's passed in arguments.
    - Each field in the object returned by mapStateToProps will become a prop for your actual component. We must use the same field's name in the props.
- **mapDispatchToProps: Object | (dispatch, ownProps?) => Object**
    - Used to dispatch actions to the store.
    - *dispatch* is a function of the Redux store.
    - 2 ways to *dispatch* actions:
        - We can directly call props.dispatch(action)
        - Redux will help you bind the function to dispatch if you pass the mapDispatchToProps. This mapped function is called via props. Hence, instead of calling () => props.dispatch(() => action()), we can call props.action() directly.
- Values returned by reducers are the values in store, so we use these keywords to fetch data in components.
2. Redux thunk
- https://github.com/reduxjs/redux-thunk
- Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
