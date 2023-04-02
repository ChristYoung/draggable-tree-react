import { CSSProperties, HTMLAttributes } from 'react';
import styles from './style.module.css'
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  animationDelay?: CSSProperties['animationDelay'];
  direction?: 'left' | 'right';
  grandientColor?: string;
  grandientWidth?: CSSProperties['width'];
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<Props> = (props: Props) => {
    const {
      direction = 'left',
      grandientColor, grandientWidth, pauseOnHover,
      animationDelay, children, className, ...restProps } = props;
    const contentStyles: CSSProperties = {
      animationDelay,
      animationDirection: direction === 'right' ? 'reverse' : undefined
    };
    return (
       <div className={classNames(styles.marquee, className, { [styles.pauseOnHover]: pauseOnHover})} {...restProps}>
         <div className={styles.content} style={contentStyles}>{children}</div>
         <div className={styles.content} style={contentStyles}>{children}</div>
         
         {
          grandientColor && (
            <>
        <div className={classNames(
          styles.overlay,
          styles.leftOverLay,
         )} style={{ background: `linear-gradient(90deg, ${grandientColor} 0%, rgba(255, 255, 255, 0) 100%);`, width: grandientWidth }}
         ></div>
         <div className={classNames(
          styles.overlay,
          styles.rightOverLay,
         )} style={{ background: `linear-gradient(270deg, ${grandientColor} 0%, rgba(255, 255, 255, 0) 100%);`, width: grandientWidth }}></div>
            </>
          )
         }
       </div>
    )
}