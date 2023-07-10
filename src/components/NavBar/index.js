import clsx from 'clsx'
import styles from "./styles.module.scss"
import { Container, Nav, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rows from "../Row"
import logo from "../../assets/img/logo.png"
function Navbar() {
    return (
        <Container fluid >
            <Row className={clsx(styles.fix)}>
                <Col lg={1} md={2} sm={2} xs={12} className={clsx(styles.box)}  >
                    <Nav.Link as={Link} to="/" className={clsx(styles.container, "mx-auto")}><img src={logo} /></Nav.Link>
                </Col>
                <Col lg={6} md={10} sm={10} xs={12} className={clsx(styles.box)}>
                    <Nav className={clsx(styles.nav)} defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li" className={clsx(styles.position)}>
                            <Nav.Link as={Link} to="/jobs" className={clsx(styles.container)} >Việc làm
                            </Nav.Link>
                            <div className={clsx(styles.blockHover)}>
                                <Rows icon={<i class="fa-solid fa-magnifying-glass"></i>} text={"Tìm việc làm"} neww={false} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-check-to-slot"></i>} text={"Việc làm phù hợp"} neww={false} hot={true} />
                                <Rows icon={<i class="fa-solid fa-laptop"></i>} text={"Việc làm IT"} neww={true} hot={false} />
                                <Rows icon={<i class="fa-solid fa-medal"></i>} text={"Việc làm Senior"} neww={true} hot={false} />
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className={clsx(styles.position)}>
                            <Nav.Link as={Link} to="/CV" className={clsx(styles.container)} >Hồ sơ và CV
                            </Nav.Link>
                            <div className={clsx(styles.blockHover)}>
                                <Rows icon={<i class="fa-solid fa-clipboard-user"></i>} text={"Mẫu CV"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-file-lines"></i>} text={"Mẫu Cover Letter"} neww={false} hot={true} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-clipboard-user"></i>} text={"Dịch vụ tư vấn"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-file-pen"></i>} text={"Hướng dẫn viết CV theo nghành nghề"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-clipboard-check"></i>} text={"Thư viện CV theo nghành nghề"} neww={true} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-regular fa-circle-user"></i>} text={"Top CV Profile"} neww={false} hot={false} />
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className={clsx(styles.position)}>
                            <Nav.Link as={Link} to="/company" className={clsx(styles.container)}>Công ty
                            </Nav.Link>
                            <div className={clsx(styles.blockHover)}>
                                <Rows icon={<i class="fa-regular fa-building"></i>} text={"Danh sách công ty"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-regular fa-star"></i>} text={"Top công ty"} neww={false} hot={false} />
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className={clsx(styles.position)}>
                            <Nav.Link className={clsx(styles.container)} >Phát triển sự nghiệp
                            </Nav.Link>
                            <div className={clsx(styles.blockHover)}>
                                <Rows icon={<i class="fa-solid fa-certificate"></i>} text={"TopCV Contest"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-pencil"></i>} text={"TopCV Skills"} neww={true} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-chart-line"></i>} text={"Trắc nghiệm tính cách MBTI"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-chart-line"></i>} text={"Trắc nghiệm MI"} neww={false} hot={false} />
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className={clsx(styles.position)}>
                            <Nav.Link className={clsx(styles.container)} >Công cụ
                            </Nav.Link>
                            <div className={clsx(styles.blockHover)}>
                                <Rows icon={<i class="fa-solid fa-scale-balanced"></i>} text={"Tính lương GROSS-NET"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-chart-line"></i>} text={"Tính thuế thu nhập cá nhân"} neww={false} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-coins"></i>} text={"Tính lãi suất kép"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-sack-dollar"></i>} text={"Lập kế hoạch tiết kiệm"} neww={false} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-shield-halved"></i>} text={"Tính bảo hiểm thất nghiệp"} neww={false} hot={false} />
                                <Rows icon={<i class="fa-solid fa-shield-halved"></i>} text={"Tính bảo hiểm xã hội một lần"} neww={false} hot={false} />
                                <hr />
                                <Rows icon={<i class="fa-solid fa-mobile"></i>} text={"Mobile App TopCV"} neww={false} hot={false} />
                            </div>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col lg={5} md={12} sm={12} xs={12} className={clsx(styles.boxButton)}>
                    <Button className={clsx(styles.button)} variant="outline-success">Đăng Nhập</Button>{' '}
                    <Button className={clsx(styles.button)} variant="success">Đăng Ký</Button>{' '}
                    <Button className={clsx(styles.button)} variant="dark">Đăng tuyển & tìm hồ sơ</Button>{' '}
                </Col>
            </Row>
        </Container>

    )
}
export default Navbar