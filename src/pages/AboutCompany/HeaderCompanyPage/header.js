import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import billBoard from "../../../assets/img/imgCompanyPage/company-billBoard.webp"
export default function Header() {
    return (
        <Container fluid className={clsx(styles.container)}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <div className={clsx(styles.header, "row")}>
                        <div className="col-lg-8 col-md-12">
                            <div className={clsx(styles.body)}>
                                <div>
                                    <p>Danh sách công ty</p>
                                    <p>Top công ty</p>
                                </div>
                                <div>
                                    <h4>Khám phá 100.000+ công ty nổi bật </h4>
                                    <p>Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất cho bạn </p>
                                </div>
                                <div>
                                    <div>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <input placeholder="Nhập tên công ty" />
                                    </div>
                                    <Button className={clsx(styles.button)} variant="success">Tìm Kiếm</Button>{' '}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12" style={{ textAlign: "center" }}>
                            <img className={clsx(styles.img)} src={billBoard} />
                        </div>
                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}