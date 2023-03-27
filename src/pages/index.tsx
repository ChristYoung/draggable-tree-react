import Link from 'next/link';
import style from 'Home.module.css';

export default function Home() {
  return (
    <div>
      <Link href='/tree'>
        <h1 className=''>Home</h1>
      </Link>
    </div>
  );
}