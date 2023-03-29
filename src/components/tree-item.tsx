import { NodeItem } from '@/types';
import styles from  '../styles/TreeItem.module.css'


export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name } = props;
    return (
        <>
        <div className={styles.tree_line}>
            <span className="arrow"></span>
            <span>{name}</span>
            <span className="icon human_icon" ></span>
        </div>
        </>
    );
}
