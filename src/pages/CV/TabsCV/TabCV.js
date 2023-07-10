import clsx from "clsx"
import { Container, Row, Col,Tab,Tabs } from "react-bootstrap"
import styles from "./styles.module.scss"
import TabCV1 from "./TabCV1/TabCV1"
import TabCV2 from "./TabCV2/TabCV2"
export default function TabCV() {
    return (
        <Container fluid style={{padding: "16px 0", backgroundColor: "#f0f0f0", marginBottom: "36px" }}>
            <Row>
                <Col lg= {1}>
                </Col>
                <Col lg={10}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="CV Builder 2.0">
                            <TabCV1/>
                        </Tab>
                        <Tab eventKey="profile" title="CV Builder 1.0">
                            <TabCV2/>
                        </Tab>
                    </Tabs>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}