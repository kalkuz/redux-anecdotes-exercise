import _ from 'lodash';
import Filter from './Filter';

function AnecdoteList({ anecdotes, onVote, onFilterChanged }) {
  return (
    <>
      <Filter onFilterChanged={onFilterChanged} />
      {_.orderBy(anecdotes, 'votes', 'desc').map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => onVote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
