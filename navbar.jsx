import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/dashboard">Dashboard</Link>
    <ThemeToggle />
  </nav>
);
