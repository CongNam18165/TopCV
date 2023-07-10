import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import khien from "../../../assets/img/khien.png"
import Overlays from "../../../components/Overlays"
import ava1 from "../../../assets/img/imgAva/ava1.png"
import ava2 from "../../../assets/img/imgAva/ava2.png"
import ava3 from "../../../assets/img/imgAva/ava3.png"
import ava4 from "../../../assets/img/imgAva/ava4.png"
function Armorial() {
    const [hour, setHour] = useState(4);
    const [minute, setMinute] = useState(59);
    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (hour === 0 && minute === 0 && seconds === 0) {
                clearInterval(countdown)
            }
            else if (minute === 0 && seconds === 0) {
                setHour(preHour => preHour - 1);
                setMinute(59);
                setSeconds(59);
            }
            else if (seconds === 0) {
                console.log(2)
                setMinute(preMinute => preMinute - 1);
                setSeconds(59);
            }
            else{
                setSeconds(preSeconds => preSeconds-1)
                // console.log(seconds,minute,hour)
            }          
    }, 1000)
        return () => {
            clearInterval(countdown);
        };
    }, [seconds])
    return (
        <Container fluid className={clsx(styles.container)}>
            <Row style ={{margin: '0'}}>
                <Col lg={1}>
                </Col>
                <Col lg={4}>
                    <div className={clsx(styles.title)}>
                        <h1>Huy Hiệu Tia Sét</h1>
                        <p>Ghi nhận sự tương tác thường xuyên của Nhà tuyển dụng với CV ứng viên</p>
                        <div className={clsx(styles.infoNew)}>
                            <span>4.034</span>
                            <p>tin đăng được NTD tương tác thường xuyên trong 24 giờ qua </p>
                        </div>
                        <h4>TỰ ĐỘNG CẬP NHẬT SAU </h4>
                        <div className={clsx(styles.timeUpdate)}>
                            <div className={clsx(styles.countdown)}>
                                <span >0{hour}</span><span>Giờ</span>
                            </div>
                            <div className={clsx(styles.dots)}></div>
                            <div className={clsx(styles.countdown)}>
                                <span>{minute}</span><span>Phút</span>
                            </div>
                            <div className={clsx(styles.dots)}></div>
                            <div className={clsx(styles.countdown)}>
                                <span>{seconds}</span><span>Giây</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className={clsx(styles.bestCompany, "d-none d-lg-block")}>
                    <div className={clsx(styles.boxAva)}>
                        <div className={clsx(styles.avaImg)}>
                            <img src={ava1} alt="anh minh hoa" />
                            <img className={clsx(styles.shield)} src={khien} alt="anh minh hoa" />
                        </div>
                        <div >
                            <Overlays className={clsx(styles.overlay1)} title={'Nhân Viên Kinh Doanh Tại Văn Phòng'}
                                hover={'Nhân Viên Kinh Doanh Tại Văn Phòng'} />
                            <Overlays title={'CÔNG TY TNHH SX XD Tây Ninh'}
                                hover={'CÔNG TY TNHH SX XD Tây Ninh'} />
                        </div>
                    </div>
                    <div className={clsx(styles.boxAva)}>
                        <div className={clsx(styles.avaImg)}>
                            <img src={ava2} alt="anh minh hoa" />
                            <img className={clsx(styles.shield)} src={khien} alt="anh minh hoa" />
                        </div>
                        <div>
                            <Overlays className={clsx(styles.overlay1)} title={'Nhân Nhân Viên Marketing (Junior Marketing Executive) '}
                                hover={'Trên 6 Tháng Kinh Nghiệm'} />
                            <Overlays title={'CÔNG TY TNHH SX Công ty TNHH Lingroup Global '}
                                hover={'Công ty TNHH Lingroup Global'} />
                        </div>
                    </div>
                    <div className={clsx(styles.boxAva)}>
                        <div className={clsx(styles.avaImg)}>
                            <img src={ava3} alt="anh minh hoa" />
                            <img className={clsx(styles.shield)} src={khien} alt="anh minh hoa" />
                        </div>
                        <div>
                            <Overlays className={clsx(styles.overlay1)} title={'Nhân Nhân Viên Telesales - Hà Nội (Lương Upto 18M++)'}
                                hover={'Kinh Doanh Tại Văn Phòng'} />
                            <Overlays title={'CÔNG TY CÔNG TY TNHH THƯƠNG MẠI VIỆT NAM'}
                                hover={'CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ AP VIỆT NAM'} />
                        </div>
                    </div>
                    <div className={clsx(styles.boxAva)}>
                        <div className={clsx(styles.avaImg)}>
                            <img src={ava4} alt="anh minh hoa" />
                            <img className={clsx(styles.shield)} src={khien} alt="anh minh hoa" />
                        </div>
                        <div>
                            <Overlays title={'Chuyên Viên Tuyển Dụng Và Truyền Thông Nội Bộ '}
                                hover={'Lương 09 -13 Triệu'} />
                            <Overlays title={'CÔNG TY TNHH CÔNG TY TNHH SỨC SỐNG MỚI TOÀN CẦU '}
                                hover={'CÔNG TY CÔNG TY TNHH SỨC SỐNG MỚI TOÀN CẦU '} />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className={clsx(styles.box)}>
                        <img className={clsx(styles.icon)} src={khien} alt="anh minh hoa" />
                        <div className={clsx(styles.content)}>
                            <p>Danh sách tin đăng đạt </p>
                            <p>Huy hiệu Tia Sét</p>
                        </div>
                        <Button variant="success" size="lg" block>
                            <p>Xem ngay</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </Button>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}
export default Armorial