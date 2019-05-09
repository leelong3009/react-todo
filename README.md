# Notes

1. Use object[key] to access values of this key. E.g: users = {1: {id: 1, name: "a"}, 2: {id: 2, name:"b"}} then users[1] -> {id: 1, name:"a"}
2. Use Destructuring to exact value from an array, object. E.g: const {id, name} = user;
3. Use spread syntax to clone/ combine array, object, pass to function. E.g: let arr = [...arr1, 5]

# Redux

1. connect()

- mapStateToProps is used to to map current store's values to the component's passed in arguments. The value returned by mapStateToProps must have the same name as the passed in argument.
- mapDispatchToProps is used to dispatch actions. We can directly call dispatch(action) or redux will help you bind the function to dispatch if you pass the action as an object. This mapped function is called via props.
