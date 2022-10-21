/* eslint-disable no-param-reassign */
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { notifChange } from './reducers/notificationReducer';
import { filterChange } from './reducers/filterReducer';

function App() {
  const [notified, setNotified] = useState(false);
  const anecdotes = useSelector((state) => {
    if (state.filter) {
      return state.anecdotes.filter((a) => a.content?.toLowerCase().startsWith(state.filter.toLowerCase()));
    }
    return state.anecdotes;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(notifChange(''));
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [notified]);

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

  const Vote = (id, content) => {
    console.log('vote', id);
    dispatch({
      type: 'VOTE',
      data: {
        id,
      },
    });

    dispatch(notifChange(`You voted ${content.substring(0, 50)}`));
    setNotified(!notified);
  };

  const Filter = (filter) => {
    dispatch(filterChange(filter));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList anecdotes={anecdotes} onVote={Vote} onFilterChanged={Filter} />
      <h2>create new</h2>
      <AnecdoteForm onSubmit={AddAnecdote} />
    </div>
  );
}

export default App;
