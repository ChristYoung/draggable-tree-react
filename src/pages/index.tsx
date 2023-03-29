import { TreeList } from '@/components/tree';
import { MockData } from '@/mock';
import { NodeItem } from '@/types';

export default function Home() {
  const eles = MockData as NodeItem[];

  return (
    <div>
      <h1 className=''>Home</h1>
      <TreeList nodes={eles}></TreeList>
    </div>
  );
}