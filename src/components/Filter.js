function Filter({ onFilterChanged }) {
  return (
    <div>
      Filter:
      {' '}
      <input onChange={(e) => onFilterChanged(e.target.value)} />
    </div>
  );
}

export default Filter;
