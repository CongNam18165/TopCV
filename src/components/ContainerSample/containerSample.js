import clsx from "clsx"
import styles from "./styles.module.scss"
import { Card } from "react-bootstrap"
export default function ContainerSample({title,img}) {
    return (
        <Card className={clsx(styles.box)} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <p className={clsx(styles.hastag)}><i class="fa-solid fa-bolt"></i>Powered by CV Builder 2.0</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div className={clsx(styles.groupColor)}>
                        <div className={clsx(styles.red)}></div>
                        <div className={clsx(styles.blue)}></div>
                        <div className={clsx(styles.black)}></div>
                        <div className={clsx(styles.pink)}></div>
                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}