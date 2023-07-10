import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import logo from "../../assets/img/logo.png"
import google from "../../assets/img/Footer/google_for_startup.png"
import dmca from "../../assets/img/Footer/dmca.png"
import dangky from "../../assets/img/Footer/bct.png"
import CHplay from "../../assets/img/Footer/chplay.png"
import appstore from "../../assets/img/Footer/app_store.png"
import qrCode from "../../assets/img/Footer/qr_code.png"
import topcvLogo from "../../assets/img/Footer/topcv_logo.png"
import happyTime from "../../assets/img/Footer/happy_time.png"
import testCenter from "../../assets/img/Footer/testcenter.png"
import sHiring from "../../assets/img/Footer/SHiring.png"
export default function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className={clsx(styles.container)}>
                                <img className={clsx(styles.logo)} src={logo} alt="anh minh hoa" />
                            </div>
                            <div className="d-none d-lg-block">
                                <div className={clsx(styles.brand)}>
                                    <img src={google} alt="anh minh hoa" />
                                    <img src={dmca} alt="anh minh hoa" />
                                    <img src={dangky} alt="anh minh hoa" />
                                </div>
                                <div className={clsx(styles.title1)}>
                                    <p>Liên hệ</p>
                                    <p><span>Hotline:</span> (024) 6680 5588 (Giờ hành chính)</p>
                                    <p><span>Email:</span> hotro@topcv.vn</p>
                                </div>
                                <div className={clsx(styles.title2)}>
                                    <p>Ứng dụng tải xuống</p>
                                    <div>
                                        <img src={appstore} alt="appstore" />
                                        <img src={CHplay} alt="CH play" />
                                    </div>
                                </div>
                                <div className={clsx(styles.social)}>
                                    <p>Cộng đồng TopCV</p>
                                    <div>
                                        <i class="fa-brands fa-youtube"></i>
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        <i class="fa-brands fa-tiktok"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className={clsx(styles.aboutTopCV)}>
                                <h4>Về TopCV</h4>
                                <p>Giới thiệu</p><p>Góc báo chí</p><p>Tuyển dụng</p><p>Liên hệ</p><p>Hỏi đáp</p>
                                <p>Chính sách bảo mật</p><p>Điều khoản dịch vụ</p><p>Quy chế hoạt động</p>
                                <h4>Đối tác</h4>
                                <p>TestCenter</p><p>TopHR</p><p>ViecNgay</p><p>Happy Time</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className={clsx(styles.fileCV)}>
                                <h4>Hồ sơ và CV</h4>
                                <p>Quản lý CV của bạn</p><p>TopCV Profile</p><p>Hướng dẫn viết CV</p><p>Thư viện CV theo nghành nghề</p>
                                <p>Review CV</p>
                                <h4>Khám phá</h4>
                                <p>Ứng dụng di động TopCV</p>
                                <p>Tính lương Gross-Net</p>
                                <p>Tính lãi suất kép</p>
                                <p>Lập kế hoạch tiết kiệm</p>
                                <p>Tính bảo hiểm thất nghiệp</p><p>Tính bảo hiểm xã hội một lần</p><p>Trắc nghiệm MBTI</p><p>Trắc nghiệm MI</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className={clsx(styles.jobs)}>
                                <h4>Xây dựng sự nghiệp </h4>
                                <p>Việc làm tốt nhất</p><p>Việc làm lương cao</p><p>Việc làm quản lý</p><p>Việc làm IT</p>
                                <p>Việc làm Senior</p><p>Việc làm bán thời gian</p>
                                <h4>Phát triển bản thân</h4>
                                <p>TopCV Contest</p>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col lg={1}>
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className="col">
                            <p className={clsx(styles.title3)}>Công ty Cổ phần TopCV Việt Nam</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-md-12">
                            <div className={clsx(styles.infoLicense)}>
                                <p><i class="fa-solid fa-calculator"></i><span>Giấy phép đăng ký doanh số: </span>0107307178</p>
                                <p><i class="fa-solid fa-file"></i><span>Giấy phép hoạt động dịch vụ việc làm số: </span>18/SLDTBXH-GP</p>
                            </div>
                            <div className={clsx(styles.infoLocation)}>
                                <p><i class="fa-solid fa-location-dot"></i><span>Trụ sở HN: </span>Tòa FS - GoldSeason số 47 Nguyễn Tuân, P.Thanh Xuân Trung, Q.Thanh Xuân, Hà Nội</p>
                                <p><i class="fa-solid fa-location-dot"></i><span>Chi nhánh HCM: </span>Tòa nhà Dali, 24C Phan Đăng Lưu, P.6, Q.Bình Thạnh, TP HCM</p>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <div className={clsx(styles.qrCode)}>
                                <img src={qrCode} alt="logo TopCV" />
                                <a href="https://www.topcv.vn/?ref=you">topcv.com.vn</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4 className={clsx(styles.ecosystem)}>Hệ sinh thái HR Tech của TopCV</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className={clsx(styles.infoTopcv)}>
                                <img src={topcvLogo} alt="anh minh hoa" />
                                <p>Nền tảng công nghệ tuyển dụng thông minh TopCV</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className={clsx(styles.infoHappytime)}>
                                <img src={happyTime} alt="anh minh hoa" />
                                <p>Nền tảng quản lý & gia tăng trải nghiệm nhân viên HappyTime.vn</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className={clsx(styles.infoTestcenter)}>
                                <img src={testCenter} alt="anh minh hoa" />
                                <p>Nền tảng thiết lập và đánh giá năng lực nhân viên TestCenter</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className={clsx(styles.infoShiring)}>
                                <img src={sHiring} alt="anh minh hoa" />
                                <p>
                                    Giải pháp quản trị tuyển dụng hiệu suất cao SHiring</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.lastTitle)}>
                        © 2014-2023 TopCV Vietnam JSC. All rights reserved.
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}