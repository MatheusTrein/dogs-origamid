import React from 'react';

const useLocal = (key, data) => {
  const [local, setLocal] = React.useState(
    window.localStorage.getItem(key) || null,
  );

  React.useEffect(() => {
    if (data) {
      window.localStorage.setItem(key, data);
      setLocal(data);
    }
  }, [data]);

  return local;
};

export default useLocal;
