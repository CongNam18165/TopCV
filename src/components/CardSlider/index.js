import clsx from "clsx"
import styles from "./styles.module.scss"
import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function CardSlider({ img, title, text }) {
    return (
        <div className={clsx(styles.container)}>
        <Card className={clsx(styles.boxCard)} >
            <Card.Img className={clsx(styles.img)} variant="top" src={img} />
            <Card.Body>
                <Card.Title className={clsx(styles.title)}>{title}</Card.Title>
                <Card.Text className={clsx(styles.text)}>
                    {text} việc làm
                </Card.Text>

            </Card.Body>
        </Card>

        </div>

    )
}
export default CardSlider