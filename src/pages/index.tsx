import { MockData } from '@/mock';
import { NodeItem } from '@/types';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h5>React组件学习</h5>
      <ul>
        <li>
          <Link href="/treePage">递归树形组件</Link>
        </li>
        <li>
          <Link href="/marqueePage">跑马灯组件</Link>
        </li>
      </ul>
    </>
  );
}
