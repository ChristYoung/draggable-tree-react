import { NodeItem } from '@/types';
import styles from '@/styles/Home.module.css'

export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, ...res } = props;
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