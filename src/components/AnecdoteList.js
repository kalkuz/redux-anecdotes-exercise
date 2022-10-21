import _ from 'lodash';

function AnecdoteList({ anecdotes, onVote, onFilterChanged }) {
  return (
    <>
      <div>
        Filter:
        {' '}
        <input onChange={(e) => onFilterChanged(e.target.value)} />
      </div>
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
