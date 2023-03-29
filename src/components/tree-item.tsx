import { NodeItem } from '@/types';

export const TreeItem: React.FC<NodeItem> = (props) => {
    const { name, ...res } = props;
    return <><h3>{name}</h3></>
}