import { HTMLAttributes } from 'react';
import styles from './style.module.css'
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Marquee: React.FC<Props> = (props: Props) => {
    const { children, className, ...restProps } = props;
    return (
       <div className={classNames(styles.marquee, className)} {...restProps}>
         <div className={styles.content}>{children}</div>
         <div className={styles.content}>{children}</div>
       </div>
    )
}