import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

      <ul>
        {Array.isArray(props.searchedTodos) && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };