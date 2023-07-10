import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import awards1 from "../../../assets/img/imgAwards/award_01.png"
import awards2 from "../../../assets/img/imgAwards/award_02.png"
import awards3 from "../../../assets/img/imgAwards/award_03.png"
import awards4 from "../../../assets/img/imgAwards/award_04.png"
import awards5 from "../../../assets/img/imgAwards/award_05.png"

export default function Award() {
    return (
        <Container fluid >
            <Row >
                <Col lg={1}></Col>
                <Col lg={10} className={clsx(styles.background)}>
                    <div className='row'>
                        <div className="col">
                            <h2 className={clsx(styles.title)}>Giải thưởng, thành tựu</h2>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-lg-8 col-md-12">
                            <div className={clsx(styles.container)}>
                                <div>
                                    <img src ={awards1} alt="anh minh hoa" />
                                    <div className={clsx(styles.groupText)}>
                                        <p>Top 10 doanh nghiệp ICT Việt Nam 2022</p>
                                        <span>Đọc thêm <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div>
                                    <img src ={awards2} alt="anh minh hoa" />
                                    <div className={clsx(styles.groupText)}>
                                        <p>TopCV được vinh danh trong Top 10 doanh nghiệp công nghệ thông tin Việt Nam 2021</p>
                                        <span>Đọc thêm <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div>
                                    <img src ={awards3} alt="anh minh hoa" />
                                    <div className={clsx(styles.groupText)}>
                                        <p>Giải thưởng Sao Khuê 2022</p>
                                        <span>Đọc thêm <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div>
                                    <img src ={awards4} alt="anh minh hoa" />
                                    <div className={clsx(styles.groupText)}>
                                        <p>Sản phẩm Công nghệ số Make in Viet Nam 2022</p>
                                        <span>Đọc thêm <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div>
                                    <img src ={awards5} alt="anh minh hoa" />
                                    <div className={clsx(styles.groupText)}>
                                        <p>Top 15 Google for Startups Accelerator: Southeast Asia</p>
                                        <span>Đọc thêm <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">

                        </div>
                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}