# Experiencing React and Redux

1. Use object[key] to access values of this key. E.g: users = {1: {id: 1, name: "a"}, 2: {id: 2, name:"b"}} then users[1] -> {id: 1, name:"a"}
2. Use Destructuring to exact value from an array, object. E.g: const {id, name} = user;
3. Use spread syntax to clone/ combine array, object, pass to function. E.g: let arr = [...arr1, 5]
4. Open parenthesis & curly bracket: arrow function syntax () => (expession) or () => ({id : 1}) to return an object/value, or if you want to use {}, you have to return a value. For stateless functional components, we use destructuring operator {} to pass arguments, e.g: ({ todos }) => {...}. When returning an JSX, we use ().

# Redux

1. connect()

- Flow to create a new feature e.g Filter: 1. Create an action type SET_FILTER ---> 2. Map this action to buttons by importing it, connecting it via mapDispatchToProps, passing it as an argument in the component's constructor function, then calling it directly. ---> 3. Create a reducer for it, return the filter type which will be merged to the store's state ---> 4. In the component, collect filter type value in state when calling mapStateToProps, then filtering values. At this step the component already has the updated store's state.
- mapStateToProps is used to to map current store's values to the component's passed in arguments. The value returned by mapStateToProps must have the same name as the passed in argument.
- mapDispatchToProps is used to dispatch actions. We can directly call dispatch(action) or redux will help you bind the function to dispatch if you pass the action as an object. This mapped function is called via props if the component is created by extending the Component class, or via parameter if it is created by a function.
- values returned by reducers are the values in store, so we use these keywords to fetch data in components.
