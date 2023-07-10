import clsx from 'clsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.scss"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import decoratedLeft from "../../../assets/img/imgStatistical/decoratedleft.png"
import processor from "../../../assets/img/imgStatistical/processor.png"
import topcv from "../../../assets/img/imgStatistical/topcv.png"
import happyTime from "../../../assets/img/imgStatistical/happytime.png"
import testCenter from "../../../assets/img/imgStatistical/testcenter.png"
import sHiring from "../../../assets/img/imgStatistical/shiring.png"
function Statistical() {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prev => {
                if (prev > 200000) {
                    clearInterval(interval)
                    return (prev - 1000)
                } else {
                    return (prev + 1000)
                }
            });
        }, 10);
    }, [])

    return (
        <div className={clsx(styles.background)}>
            <Row className={clsx(styles.head)}>
                <Col lg={3}><img src={decoratedLeft} /> </Col>
                <Col lg={3}><div>Con Số ấn tượng </div> </Col>
                <Col lg={3}><img src={decoratedLeft} /></Col>
            </Row>
            <Container className={clsx(styles.text)}>
                <div>TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam.
                    Với năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI),
                    sứ mệnh của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng
                    - nhân sự ngày một hiệu quả hơn. Bằng công nghệ,
                    chúng tôi tạo ra nền tảng cho phép người lao động tạo CV,
                    phát triển được các kỹ năng cá nhân,
                    xây dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng
                    và tiếp cận với các cơ hội việc làm phù hợp.
                </div>
            </Container>
            <Container fluid >
                <Row>
                    <Col className={clsx(styles.item)}>
                        <div className={clsx(styles.item1)}>
                            <h1>{number + 340000} +</h1>
                            <p> Nhà tuyển dụng uy tín</p>
                            <span>Các nhà tuyển dụng đến từ tất cả các ngành nghề
                                và được xác thực bởi TopCV</span>
                        </div>
                        <div className={clsx(styles.item1)}>
                            <h1>{number + 200000} +</h1>
                            <p> Doanh nghiệp hàng đầu</p>
                            <span>TopCV được nhiều doanh nghiệp hàng đầu tin tưởng và đồng hành, 
                                trong đó có các thương hiệu nổi bật như Samsung, Viettel, 
                                Vingroup, FPT, Techcombank,...
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col className={clsx(styles.item)}>
                        <div className={clsx(styles.item1)}>
                            <h1>{number + 340000} +</h1>
                            <p> Việc làm đã được kết nối</p>
                            <span>TopCV đồng hành và kết nối hàng nghìn ứng viên với
                                những cơ hội việc làm hấp dẫn từ các doanh nghiệp uy tín.</span>
                        </div>
                        <img src={processor} />
                        <div className={clsx(styles.item1)}>
                            <h1>{number} +</h1>
                            <p> Lượt tải ứng dụng</p>
                            <span>Các nhà tuyển dụng đến từ tất cả các ngành nghề
                                và được xác thực bởi TopCV</span>
                        </div>
                    </Col>
                </Row>
                <Row className={clsx(styles.system)}>
                    <h2>Hệ sinh thái công nghệ nhân sự của TopCV bao gồm 4 sản phẩm chủ lực:</h2>
                </Row>
                <Row>
                    <Col className={clsx(styles.ecosystem)}>
                        <div className={clsx(styles.system1)}>
                            <span>
                                <h1>TopCV</h1>
                                <div>Nền tảng công nghệ tuyển dụng thông minh TopCV</div>
                                <Button variant="primary">Tìm hiểu thêm </Button>
                            </span>
                            <img src={topcv} />

                        </div>
                        <div className={clsx(styles.system1)}>
                            <span>
                                <h2>HappyTime</h2>
                                <div>Nền tảng quản lý và gia tăng trải nghiệm nhân viên HappyTime.vn</div>
                                <Button variant="primary">Tìm hiểu thêm </Button>
                            </span>
                            <img src={happyTime} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={clsx(styles.ecosystem)}>
                        <div className={clsx(styles.system1)}>
                            <span>
                                <h3>TestCenter</h3>
                                <div>Nền tảng công nghệ tuyển dụng thông minh TopCV</div>
                                <Button variant="primary">Tìm hiểu thêm </Button>
                            </span>
                            <img src={testCenter} />
                        </div>
                        <div className={clsx(styles.system1)}>
                            <span>
                                <h1>SHiring</h1>
                                <div>Nền tảng quản lý và gia tăng trải nghiệm nhân viên HappyTime.vn</div>
                                <Button variant="primary">Tìm hiểu thêm </Button>
                            </span>
                            <img src={sHiring} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Statistical