# Getting Started

## Install create-react-app

    npx create-react-app my-app

or

    yarn global add create-react-app

## Create an App

    yarn create react-app react-demo




# React

A JavaScript library for building user interfaces.

## Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

## Component-Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

## Render

```
state => view
```

## State

```
[
  "Design App",
  "Something happens...",
  "Profit."
]
```

## View

```jsx
<ol>
  <li>Design App</ol>
  <li>Something happens...</ol>
  <li>Profit.</ol>
</ol>
```

## Virtual DOM

## Defining Components

## Rendering Components

## Class-Based Components

## Interactivity

## Prop-type Checking

# Rouing with React Router



# Redux

Redux is a state management tool. 

![flux architecture](https://image.slidesharecdn.com/reactredux-160310130354/95/react-redux-17-638.jpg)

## Store

    (state, action) => state

## Principbles 

- Single source of truth
- Read only state
- Changes are made with pure functions

## Actions 

```js
// Action type constant
const CREATE_POST = 'CREATE_POST';

// Action creator
function createPost(post) {
  return {
    type: CREATE_POST,
    paylaod: post
  }
}
// ...Or
const createPost = post => ({
  type: CREATE_POST,
  paylaod: post
})
```

## Store API/Interface

```js
store.dispatch(
  createPost({ name: 'Example Post' })
);
```

```js
const state = store.getState();
```

```js
store.subscribe((state) => {
  // Do something with state changes
});
```

## Redux Binding for React

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

```js
const mapStateToProps = (state) => {
  counter: state.counter
};

connect(mapStateToProps)(MyComponent);
```

## Async Actions

```js
function createPost(post) {
  return function(dispatch, getState) {
    dispatch({ type: 'CREATE_POST', payload: post });
    fetch('/api/posts').then((response) => {
      dispatch({ type: 'LOAD_POSTS', payload: response.json() })
    });
  }
}
```

_Requires redux-thunk middleware for Redux_


## Reducers

```js
function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_POST':
      return [...state, action.payload];
    default: 
      return state;
  }
}
```

## Guidelines

- Design your state carefully
- Use Flux Standard Actions (FSA's) for your action types
- Avoid side effects in your reducers




# Developer Tools

- React Developer Tools
  
  Elements-like panel for virtual dom.

- Redux Developer Tools

  Complete visibility over actions and state, time traveling. 

