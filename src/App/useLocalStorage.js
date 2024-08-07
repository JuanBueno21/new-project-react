import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setsincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setsincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setsincronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };

// localStorage.removeItem("TODOS_V1");
// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'tomar el curso de react.js', completed: false },
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'BLA bla bla', completed: false },
//   { text: 'usar estados derivados', completed: true },
// ]

// localStorage.setItem("TODOS_V1" , JSON.stringify(defaultTodos));