import { post, put } from '../services/api';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => ({
  content: anecdote,
  id: getId(),
  votes: 0,
});

const initialState = anecdotesAtStart.map(asObject);

// eslint-disable-next-line default-param-last
const reducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'SET_ANECDOTES': {
      return action.data;
    }
    case 'VOTE': {
      const anecdote = state.find((a) => a.id === action.data.id);
      anecdote.votes += 1;
      put(`/anecdotes/${anecdote.id}`, { votes: anecdote.votes });
      return state.map((a) => (a.id === action.data.id ? anecdote : a));
    }
    case 'NEW_ANECDOTE': {
      const newAnecdote = { ...action.data, id: getId() };
      post('/anecdotes', newAnecdote);
      return [...state, newAnecdote];
    }
    default:
      break;
  }

  return state;
};

export default reducer;
