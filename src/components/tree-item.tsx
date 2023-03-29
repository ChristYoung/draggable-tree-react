import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, children, level } = props;
    return (
        <>
            <div className={styles.tree_line} style={{ paddingLeft: `${level * 26}px` }}>
                <span className={styles.leaf_name}>{name}</span>
            </div>

            { (children as NodeItem[])?.length > 0 && children.map(c => {
                return (
                    <TreeItem {...c} />
                )
            }) }
        </>
    );
}
