import { CSSProperties, HTMLAttributes } from 'react';
import styles from './style.module.css'
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  animationDelay?: CSSProperties['animationDelay'];
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<Props> = (props: Props) => {
    const {
      direction = 'left',
      animationDelay, children, className, ...restProps } = props;
    const contentStyles: CSSProperties = {
      animationDelay,
      animationDirection: direction === 'right' ? 'reverse' : undefined
    };
    return (
       <div className={classNames(styles.marquee, className)} {...restProps}>
         <div className={styles.content} style={contentStyles}>{children}</div>
         <div className={styles.content} style={contentStyles}>{children}</div>
       </div>
    )
}