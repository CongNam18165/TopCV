import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import people from "../../../assets/img/people_slogan.png"
import puzzels from "../../../assets/img/puzzles_slogan.png"
import cv from "../../../assets/img/cv_slogan.png"
import brain from "../../../assets/img/brain_slogan.png"
export default function Slogan() {
    return (
        <Container fluid className={clsx(styles.all)}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <div className="row">
                        <div className={clsx(styles.boxTitle, "col-12")}>
                            <h4>Cùng TopCV xây dựng thương hiệu cá nhân</h4>
                        </div>
                    </div>
                    <div className={clsx(styles.container, "row")}>
                        <div className="col-lg-6 col-md-12" >
                            <div className={clsx(styles.boxText)}>
                                <div>
                                    <p>TopCV Profile</p>
                                    <span>TopCV Profile là bản hồ sơ năng lực giúp bạn xây dựng thương hiệu cá nhân, thể hiện
                                        thế mạnh của bản thân thông qua việc đính kèm học vấn, kinh nghiệm, dự án, kỹ
                                        năng,... của mình</span>
                                    <Button variant="success">Tạo Profile <span><i class="fa-solid fa-arrow-right"></i></span></Button>{' '}
                                </div>
                                <div>
                                    <img src={people} alt="anh minh hoa" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={clsx(styles.boxText)}>
                                <div>
                                    <p>CV Builder 2.0</p>
                                    <span>Một chiếc CV chuyên nghiệp sẽ giúp bạn gây ấn tượng với nhà tuyển dụng và tăng khả
                                        năng vượt qua vòng lọc CV.</span>
                                    <Button variant="success">Tạo CV ngay <span><i class="fa-solid fa-arrow-right"></i></span></Button>{' '}
                                </div>
                                <div>
                                    <img src={cv} alt="anh minh hoa" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={clsx(styles.boxTitle, "col-12")}>
                            <h4>Thấu hiểu bản thân - Nâng tầm giá trị</h4>
                        </div>
                    </div>
                    <div className={clsx(styles.container, "row")}>
                        <div className="col-lg-6 col-md-12" >
                            <div className={clsx(styles.boxText)}>
                                <div>
                                    <p>Trắc nghiệm tính cách MBTI</p>
                                    <span>Kết quả trắc nghiệm MBTI chỉ ra cách bạn nhận thức thế giới xung quanh và ra quyết định
                                        trong cuộc sống, từ đó, giúp bạn có thêm thông tin để lựa chọn nghề nghiệp chính xác
                                        hơn.</span>
                                    <Button variant="success">Tạo Profile <span><i class="fa-solid fa-arrow-right"></i></span></Button>{' '}
                                </div>
                                <div>
                                    <img src={brain} alt="anh minh hoa" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={clsx(styles.boxText)}>
                                <div>
                                    <p>Trắc nghiệm đa trí thông minh MI</p>
                                    <span>Trả lời cho câu hỏi “Bạn có trí thông minh nổi trội trong lĩnh vực nào?”, từ đó bạn có
                                        thể hiểu bản thân mình hơn và đưa ra các quyết định nghề nghiệp phù hợp.</span>
                                    <Button variant="success">Tạo CV ngay <span><i class="fa-solid fa-arrow-right"></i></span></Button>{' '}
                                </div>
                                <div>
                                    <img src={puzzels} alt="anh minh hoa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
} 