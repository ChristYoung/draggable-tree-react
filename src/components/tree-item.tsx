import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, children } = props;
    const mainleaf = <>
        <div className={styles.tree_line}>
            <span className={styles.leaf_name}>{name}</span>
        </div>
        { (children as NodeItem[]).length > 0 && <TreeItem /> }
    </>
    // const hasChild = (children as NodeItem[])?.length > 0 ?
    //     ;
    return (
        mainleaf
    );
}
