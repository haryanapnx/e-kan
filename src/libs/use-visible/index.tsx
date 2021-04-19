import { useState, useEffect, useRef } from 'react';

export const useVisible = (initialIsVisible: boolean) => {
  const [visible, setVisible] = useState(initialIsVisible);
  const ref = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, visible, setVisible };
}