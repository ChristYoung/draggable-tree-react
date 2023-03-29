import { TreeList } from '@/components/tree';
import { MockData } from '@/mock';
import { NodeItem } from '@/types';
import styles from '../styles/Home.module.css';

export default function Home() {
  const nodes = MockData as NodeItem[];
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <TreeList nodes={nodes}></TreeList>
      </div>
      <div className={styles.right_side}>
        <div className={styles.card_container}>
            <div className='seg_wrapper'>

            </div>
        </div>
      </div>
    </div>
  );
}
