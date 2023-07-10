import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import banner1 from "../../../assets/img/imgJobs/banner1.jpg"
import banner2 from "../../../assets/img/imgJobs/banner2.jpg"
import banner3 from "../../../assets/img/imgJobs/banner3.jpg"

export default function Banner() {
    return (
        <Container fluid>
            <Row>
                <Col lg={1}>

                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <img className={clsx(styles.imgBanner)} src={banner1} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                        <img className={clsx(styles.imgBanner)} src={banner2} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                        <img className={clsx(styles.imgBanner)} src={banner3} />
                        </div>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}