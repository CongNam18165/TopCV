import clsx from "clsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./header.module.scss"
import { Container, Row, Col, Button, Carousel } from "react-bootstrap"
import imgRight from "../../../assets/img/muitentrai.png"
import imgLeft from "../../../assets/img/muitenpphai.png"
import robot from "../../../assets/img/robot.png"
import banner1 from "../../../assets/img/imgJobs/topbanner.jpg"
import banner2 from "../../../assets/img/imgJobs/topbanner2.jpg"
import banner3 from "../../../assets/img/imgJobs/topbanner3.jpg"
import {useState} from "react"
export default function Header() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container className={clsx(styles.container)} fluid>
            <Row>
                <Col className={clsx(styles.bgl, "d-none d-lg-block")} lg={1} ><img src={imgLeft} /></Col>
                <Col lg={10} md={12} >
                    <Row>
                        <Col>
                            <div className={clsx(styles.title1)} >
                                <h2>Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.</h2>
                                <p>Tiếp cận 40.000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className={clsx(styles.groupInput)}>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input placeholder="Tên công việc,vị trí ứng tuyển..." />
                                </div>
                                <div>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <select>
                                        <option>Tất cả tỉnh/thành phố</option>
                                        <option>Hà Nội</option>
                                        <option>Hồ Chí Minh</option>
                                        <option>Bình Dương</option>
                                        <option>Bắc Ninh</option>
                                    </select>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>

                        </Col>
                        <Col lg={5}>
                            <div className={clsx(styles.groupSelect)}>
                                <div>
                                    <i class="fa-regular fa-star"></i>
                                    <select>
                                        <option>Tất cả kinh nghiệm</option>
                                        <option>Chưa có kinh nghiệm</option>
                                        <option>Dưới 1 năm</option>
                                        <option>Trên 2 năm</option>
                                    </select>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-sack-dollar"></i>
                                    <select>
                                        <option>Tất cả mức lương</option>
                                        <option>Dưới 3 triệu</option>
                                        <option>3-5 triệu</option>
                                        <option>5-7 triệu</option>
                                    </select>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <div className={clsx(styles.button)}>
                                <Button variant="success">Success</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={clsx(styles.title2)}>
                                <i class="fa-solid fa-calendar-check"></i>
                                <p>Thị trường làm việc hôm nay: <span>05/07/2023</span></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <div className={clsx(styles.groupTrend)}>
                                <div>
                                    <p>Vị trí đang chờ bạn khám phá <span>32.165</span></p>
                                    <span><i class="fa-solid fa-arrow-trend-up"></i></span>
                                </div>
                                <div>
                                    <p>Việc làm mới 24h gần nhất <span>2.438</span> </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                    <Row className={clsx(styles.carousel)}>
                        <Col>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
                <Col className={clsx(styles.bgr, "d-none d-lg-block")} lg={1}><img src={imgRight} />
                    <img src={robot} /></Col>
            </Row>
        </Container>
    )
}