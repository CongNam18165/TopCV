import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import search from "../../../assets/img/search-icon.png"
import location from "../../../assets/img/location-icon.png"
import dolar from "../../../assets/img/dollar-icon.png"
import banner from "../../../assets/img/banner.png"
import robothp from "../../../assets/img/robothp.png"
import chart from "../../../assets/img/chart.jpg"
import DropDown from "../../../components/DropDown"
function InfomationEmploy() {
    return (
        <>
            {/* <div className={clsx(styles.container)}> */}
            <Container fluid className={clsx(styles.container)}>
                <Row>
                    <Col lg={1} md={1}>
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} >
                        <Row>
                            <Col>
                                <div className={clsx(styles.bigGroup)}>
                                    <h4>Công nghệ AI dự đoán, cá nhân hóa việc làm </h4>
                                    <div className={clsx(styles.slogan)}>
                                        <h1>Công ty phù hợp </h1>
                                        <h1> dành cho bạn.</h1>
                                    </div>
                                    <div className={clsx(styles.boxContainer)}>
                                        <div className={clsx(styles.boxSearch)}>
                                            <img src={search} />
                                            <input placeholder='Tìm kiếm cơ hội' />
                                        </div>
                                        <div className={clsx(styles.boxLocation)}>
                                            <img src={location} />
                                            <p className={clsx(styles.dropdown)}>
                                                <DropDown title={'Tất cả địa điểm'} option1={'Vũng Tàu'} option2={"Móng Cái"} option3={"Hà Nội"} option4={"Hồ Chí Minh"} />
                                            </p>
                                            <span><i class="fas fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={6} md={12}>
                                <div className={clsx(styles.boxExperience)}>
                                    <div>
                                        <i class="far fa-star"></i>
                                        <p className={clsx(styles.dropdown)}>
                                            <DropDown title={'Tất cả kinh nghiệm'} option1={'Dưới 1 năm kinh nghiệm'}  option2={"Trên 1 năm kinh nghiệm"} 
                                            option3={"Chưa có kinh nghiệm"} option4={"Trên 2 năm kinh nghiệm"} />
                                        </p>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12} >
                                <div className={clsx(styles.boxWage)}>
                                    <div>
                                        <img src={dolar} />
                                        <p className={clsx(styles.dropdown)}>
                                            <DropDown title={'Tất cả mức lương'} option1={'Dưới 3 triệu'} option2={"Từ 3-5 kinh nghiệm"} 
                                            option3={"Trên 10 triệu"} option4={"Trên 20 triệu"} />
                                        </p>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Button className={clsx(styles.searchBtn, " px-2 py-2")} variant="success">Tìm kiếm</Button>{' '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img className={clsx(styles.banner, "mt-3")} src={banner} />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} >
                        <Row className={clsx(styles.bigBox)}>
                            <Col lg={12}>
                                <div className={clsx(styles.groupTitle)}>
                                    <i class="fa-regular fa-calendar-check"></i>
                                    <p>Thị trường làm việc hôm nay: <span>25/06/2023</span></p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className={clsx(styles.amountJobs)}>
                                            <img src={robothp} />
                                            <div>
                                                <p>Việc làm đang tuyển </p>
                                                <div className={clsx(styles.numberJobs)}>
                                                    <p>30.010</p>
                                                    <span><i class="fa-solid fa-arrow-trend-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className={clsx(styles.newJobs)}>
                                            <p>Việc làm mới gần nhất </p>
                                            <span>148</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={clsx(styles.boxDemand)}>
                                    <div className={clsx(styles.boxTitle)}>
                                        <div>
                                            <i class="fa-solid fa-arrow-trend-up"></i>
                                            <p>Nhu cầu tuyển dụng theo</p>
                                        </div>
                                        <div>
                                            <select>
                                                <option>Nghành nghề</option>
                                                <option>Mức lương</option>
                                            </select>
                                            <span><i class="fa-solid fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                    <img src={chart} />
                                    <p>Xem thêm <span><i class="fa-solid fa-angles-down"></i></span></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} md={1}>

                    </Col>
                </Row>
            </Container >

            {/* </div> */}
        </>
    )
}
export default InfomationEmploy