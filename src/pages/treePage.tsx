import { TreeList } from '@/components/tree';
import { MockData } from '@/mock';
import { NodeItem } from '@/types';
import { ConfigProvider, DatePicker, message } from 'antd';
import styles from '../styles/Home.module.css';
import 'antd/dist/reset.css';

export default function TreePage() {
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
    )
}