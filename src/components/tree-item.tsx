import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'
import { useState } from 'react';


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, children, level, expanded } = props;
    const [expand, setExpand] = useState(expanded);
    return (
        <>
            <div className={styles.tree_line} style={{ paddingLeft: `${level * 26}px` }} onClick={() => setExpand(!expand)}>
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
