/* eslint-disable no-param-reassign */
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

function App() {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const NewAnecdote = (content) => ({
    type: 'NEW_ANECDOTE',
    data: {
      content,
      votes: 0,
    },
  });

  const AddAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(NewAnecdote(content));
  };

  const vote = (id) => {
    console.log('vote', id);
    dispatch({
      type: 'VOTE',
      data: {
        id,
      },
    });
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} onVote={vote} />
      <h2>create new</h2>
      <AnecdoteForm onSubmit={AddAnecdote} />
    </div>
  );
}

export default App;
