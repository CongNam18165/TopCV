import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import InfoTele from "./infoTele/infoTele"
export default function JobTab2() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className={clsx(styles.container, "row")}>
                        <div className="col-lg-4 col-md-12">
                            <p style={{ margin: "0px" }}>CSKH & Khiếu nại dịch vụ </p>
                            <InfoTele phone={"(024)71079799"} name={"Hotline 1"} />
                            <InfoTele phone={"0862 69 19 29"} name={"Hotline 2"} />
                            <p>Email hỗ trợ Nhà tuyển dụng</p>
                            <p className={clsx(styles.email)}><i class="fa-solid fa-envelope"></i><span>cskh@topcv.vn</span></p>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <p style={{ margin: "0px" }}>Hotline Tư vấn Tuyển dụng miền Bắc</p>
                            <InfoTele phone={"0976 533 675"} name={"Tạ Thị Phương Anh"} />
                            <InfoTele phone={"0981 408 877"} name={"Nguyễn Thị Ngọc Châm"} />
                            <InfoTele phone={"0354 366 161"} name={"Đào Thị Lan Hương"} />
                            <InfoTele phone={"0353 714 399"} name={"Hà Thu Hương"} />
                            <InfoTele phone={"0337 702 509"} name={"Lê Thị Tâm"} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <p style={{ margin: "0px" }}>Hotline Tư vấn Tuyển dụng miền Nam</p>
                            <InfoTele phone={"0702 595 691"} name={"Đặng Thị Thùy Dung"} />
                            <InfoTele phone={"0976 593 426"} name={"Trần Ngọc Quế Anh"} />
                            <InfoTele phone={"0968 149 744"} name={"Phạm Thị Kim Hạnh"} />
                            <InfoTele phone={"0938 782 896"} name={"Nguyễn Thị Hà Thanh"} />
                            <InfoTele phone={"0902 969 548"} name={"Lê Ngọc Phương Trinh"} />
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}