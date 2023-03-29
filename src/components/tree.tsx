import { NodeItem } from '@/types';
import { TreeItem } from './tree-item';

export const TreeList: React.FC<{ nodes: NodeItem[] }> = ({ nodes }) => {
    // 必须要加{}, FunctionComponent 接口的返回类型是 ReactElement 或 null。这意味着我们只能返回一个 React 元素或一个空值
    return <>{
        nodes.map((item: NodeItem) => (
            <div key={item.id}>
                <TreeItem {...item} />
            </div>
        ))
    }</>;
};
