import { NodeItem } from '@/types';
import { TreeItem } from './tree-item';
import styles from '../styles/Tree.module.css';

export const TreeList: React.FC<{ nodes: NodeItem[] }> = ({ nodes }) => {
    // 必须要加{}, FunctionComponent 接口的返回类型是 ReactElement 或 null。这意味着我们只能返回一个 React 元素或一个空值
    return <>
        <div className={styles.tree_box}>
            {
                nodes.map((item: NodeItem) => (
                    <div className="line_container" key={item.id}>
                        <TreeItem {...item} />
                    </div>
                ))
            }
        </div>
    </>;
};
