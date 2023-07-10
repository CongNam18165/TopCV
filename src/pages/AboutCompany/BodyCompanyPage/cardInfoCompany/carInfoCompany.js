import clsx from "clsx"
import styles from "./styles.module.scss"
import { Card } from "react-bootstrap"
export default function CardInfoCompany({img,title,text}) {
    return (
        <Card className={clsx(styles.container)} style={{ width: '18rem' }}>
            <Card.Img className={clsx(styles.img1)} variant="top" src={img} />
            <img className={clsx(styles.img2)} src= "https://static.topcv.vn/company_logos/cong-ty-tnhh-mtv-vien-thong-quoc-te-fpt-5d898f99a34de.jpg"/>
            <Card.Body>
                <Card.Title style ={{marginTop: "24px"}}>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}