import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'
import { useState } from 'react';
import { RightOutlined, DownOutlined, FolderFilled, HolderOutlined } from '@ant-design/icons';


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, children, level, expanded, type } = props;
    const [expand, setExpand] = useState(expanded);
    return (
        <>
            <div className={styles.tree_line} style={{ paddingLeft: `${level * 26}px` }} onClick={() => setExpand(!expand)}>
                {
                    // 箭头展示
                    (type === 'DIR' && children.length > 0) && <span className={styles.arrow}>{ expand ? <DownOutlined /> : <RightOutlined /> }</span>
                }
                {
                    <span className={styles.icon}>{ type === 'DIR' ? <FolderFilled /> : <HolderOutlined /> }</span>
                }
                <span className={styles.leaf_name}>{name}</span>
            </div>

            { ((children as NodeItem[])?.length > 0 && expand) && children.map(c => {
                return (
                    <TreeItem {...c} key={c.id} />
                )
            }) }
        </>
    );
}
