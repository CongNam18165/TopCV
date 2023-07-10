import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import background from "../../../assets/img/superior_tech.png"
import grossNet from "../../../assets/img/imgSuperiorTech/gross_net.png"
import laiSuatkep from "../../../assets/img/imgSuperiorTech/lai_suat_kep.png"
import thueThunhap from "../../../assets/img/imgSuperiorTech/thu_nhap_ca_nhan.png"
import baoHiemthatNghiep from "../../../assets/img/imgSuperiorTech/bao_hiem_that_nghiep.png"
import tietKiem from "../../../assets/img/imgSuperiorTech/ke_hoach_tiet_kiem.png"
import baoHiemxaHoi from "../../../assets/img/imgSuperiorTech/bao_hiem_xa_hoi_1_lan.png"
export default function SuperiorTech() {
    return (
        <Container fluid className={clsx(styles.boxTech)}>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className={clsx(styles.title)}>Công cụ vượt trội!</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className={clsx(styles.container1)}>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={grossNet} alt="anh minh hoa" />
                                    <div>
                                        <p>Tính lương GROSS-NET</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={laiSuatkep} alt="anh minh hoa" />
                                    <div>
                                        <p>Tính lãi suất kép</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={thueThunhap} alt="anh minh hoa" />
                                    <div>
                                        <p>Tính thuế thu nhập cá nhân</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block ">
                            <img className={clsx(styles.img)} src={background} alt="anh minh hoa" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className={clsx(styles.container2)}>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={baoHiemthatNghiep} alt="anh minh hoa" />
                                    <div>
                                        <p>Tính bảo hiểm thất nghiệp</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={tietKiem} alt="anh minh hoa" />
                                    <div>
                                        <p>Lập kế hoạch tiết kiệm</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className={clsx(styles.groupPrice)}>
                                    <img src={baoHiemxaHoi} alt="anh minh hoa" />
                                    <div>
                                        <p>Tính bảo hiểm xã hội một lần</p>
                                        <span>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}