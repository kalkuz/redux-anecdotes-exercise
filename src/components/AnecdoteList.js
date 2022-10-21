import _ from 'lodash';

function AnecdoteList({ anecdotes, onVote }) {
  return (
    <>
      {_.orderBy(anecdotes, 'votes', 'desc').map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => onVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
