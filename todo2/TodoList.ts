const TodoList = ({ item, setItem }) => {
  const handleRemoveItem = (id) => {
    const filterItem = item.filter((i) => i.id !== id);
    setItem(filterItem);
  };
  return (
    <div>
      {item.map((itm) => {
        return (
          <div className="item">
            <li key={itm.id}>{itm.text}</li>
            <button onClick={() => handleRemoveItem(itm.id)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
