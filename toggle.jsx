import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setDark(saved);
    document.documentElement.dataset.theme = saved ? 'dark' : 'light';
  }, []);
  const toggle = () => {
    const nxt = !dark;
    setDark(nxt);
    document.documentElement.dataset.theme = nxt ? 'dark' : 'light';
    localStorage.setItem('theme', nxt ? 'dark' : 'light');
  };
  return <button onClick={toggle}>{dark ? <FiSun /> : <FiMoon />}</button>;
};
