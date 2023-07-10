import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import hotline from "../../../../assets/img/imgJobs/hotline.png"
export default function JobTab1() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className={clsx(styles.container)}>
                        <div className="row" >
                            <div className = {clsx(styles.box,"col-lg-6 col-md-12")}>
                                <h2>Tìm việc khó <span>đã có TopCV</span></h2>
                                <div className={clsx(styles.groupTele)}>
                                    <p>(024)66805588 </p>
                                    <div>
                                        <i class="fa-solid fa-phone"></i>
                                        <p>GỌI NGAY</p>
                                    </div>
                                </div>
                                <div className={clsx(styles.groupInfo)}>
                                    <p>Email hỗ trợ Ứng viên: </p>
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>hotro@topcv.vn</p>
                                </div>
                            </div>
                            <div className={clsx(styles.img, "col-lg-6 col-md-12")}>
                                <div >
                                <img  src={hotline} />
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}