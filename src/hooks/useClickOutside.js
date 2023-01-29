import { useEffect } from 'react';

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref, callback]);
}

export default useClickOutside;
