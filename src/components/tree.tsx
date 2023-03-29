// 在react中实现一个递归组件: https://juejin.cn/post/7206701761682505786
import { NodeItem } from '@/types';
import { TreeItem } from './tree-item';
import styles from '../styles/Tree.module.css';

export const TreeList: React.FC<{ nodes: NodeItem[]; }> = ({ nodes }) => {
    // 必须要加{}, FunctionComponent 接口的返回类型是 ReactElement 或 null。这意味着我们只能返回一个 React 元素或一个空值
    return (
        <div className={styles.tree_box}>
            {
                nodes.map((item: NodeItem) =>
                    <div className="line_container" key={item.id}>
                        <TreeItem {...item} />
                    </div>
                )
            }
        </div>
    );
};



// -----------------------------------------------------------
// 在tree-list中递归
// <div style={{ paddingLeft: "20px" }}>
//     {nodes.map((parent) => {
//         return (
//             <div key={parent.id}>
//                 <span>{parent.name}</span>
//                 <div>
//                     {(parent.children && parent.children.length > 0) && <TreeList nodes={parent.children} />}
//                 </div>
//             </div>
//         );
//     })}
// </div>


