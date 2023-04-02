import { Marquee } from '@/components/marquee';
import styles from '../styles/marqueePage.module.css'

export default function MarqueePage() {
    return (
        <>
            <Marquee className={styles.marquee}
                pauseOnHover
                animationDelay='1s'
                direction='right'
                grandientColor='#F8FBFD'
                grandientWidth='100px'>
                <div className={styles.list}>
                    {Array(10).fill(1).map((item, index) => 
                        <div key={index} className={styles.item}>{item}</div>
                    )}
                </div>
            </Marquee>
        </>
    )
}