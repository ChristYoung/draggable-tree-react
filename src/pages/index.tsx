import { message } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
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
