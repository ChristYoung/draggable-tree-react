import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'
import { useState } from 'react';
import { RightOutlined, DownOutlined, FolderFilled, HolderOutlined } from '@ant-design/icons';
import { useDraggable } from '@dnd-kit/core';


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, children, level, expanded, type, id } = props;
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const [expand, setExpand] = useState(expanded);
    return (
        <>
            <div className={styles.tree_line}
             {...listeners} {...attributes} ref={setNodeRef}
             style={{ paddingLeft: `${level * 26}px` }} onClick={() => setExpand(!expand)}>
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
