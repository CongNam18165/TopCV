import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import us from "../../../assets/img/imgCVpages/us.jpg"
import jp from "../../../assets/img/imgCVpages/jp.jpg"
import vn from "../../../assets/img/imgCVpages/vn.jpg"
import DropDown from "../../../components/DropDown"
export default function HeaderCV() {
    return (
        <Container fluid className={clsx(styles.containerCV)}>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className={clsx(styles.title)} >
                        <h2>Danh sách mẫu CV xin việc tiếng <img src={us} /> Anh / <img src={vn} /> Việt / <img src={jp} /> Nhật chuẩn 2023 </h2>
                        <p>Các mẫu cv được thiết kế theo chuẩn, theo các nghành nghề. Phù hợp với sinh viên và người đi làm </p>
                    </div>
                    <div className={clsx(styles.groupInput)}>
                        <div className={clsx(styles.groupDrop)}>
                            <div>
                                <DropDown title={'Tiếng Việt'} option1={"Tiếng Anh"} option2={"Tiếng Trung"} option3={"Tiếng Nhật"} option4={"Tiếng Thái"} />
                                <span><i class="fa-solid fa-caret-down"></i></span>
                            </div>
                            <div>
                                <DropDown title={'Kinh doanh bán hàng'} option1={"Giáo dục đào tạo"} option2={"Marketing,Truyền thông"} option3={"Tư vấn"} option4={"Kinh doanh bán hàng"} />
                                <span><i class="fa-solid fa-caret-down"></i></span>
                            </div>
                            <div>
                                <DropDown title={'Tất cả thiết kế'} option1={"Đơn giản"} option2={"Thanh lịch"} option3={"Kinh nghiệm"} option4={"Màu sắc"} />
                                <span><i class="fa-solid fa-caret-down"></i></span>
                            </div>
                            <div>
                                <input type="radio" id="choice1" name ="option"/>
                                <label htmlFor="choice1">Mới cập nhật</label>
                                <input type="radio" id="choice2" name="option" />
                                <label htmlFor="choice2">Được dùng nhiều nhất</label>
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