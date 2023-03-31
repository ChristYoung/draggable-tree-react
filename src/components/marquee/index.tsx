import { HTMLAttributes } from 'react';
import styles from './style.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Marquee: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (
       <div className={styles.marquee}>
         <div className={styles.content}>{children}</div>
         <div className={styles.content}>{children}</div>
       </div>
    )
}