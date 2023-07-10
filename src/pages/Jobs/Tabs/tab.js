import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col,Tab,Tabs } from "react-bootstrap"
import Jobtab1 from "./Tab1/Tab1"
import Jobtab2 from "./Tab2/tab2"
export default function JobTabs() {
    return (
        <Container fluid className={clsx(styles.container)}>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className="col">
                            <h2 className={clsx(styles.title)}>Hotline Tư Vấn</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Dành cho nhà tuyển dụng">
                                    <Jobtab1/>
                                </Tab>
                                <Tab  eventKey="profile" title="Dành cho nhà tìm việc">
                                    <Jobtab2/>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}