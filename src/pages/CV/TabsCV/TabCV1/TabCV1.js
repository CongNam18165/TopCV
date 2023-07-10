import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import ContainerSample from "../../../../components/ContainerSample/containerSample"
export default function TabCV1() {
    const [datasCard, setDatasCard] = useState([])
    useEffect(() => {
        fetch("https://649e83e5245f077f3e9c7859.mockapi.io/sample_CV")
            .then((res) => res.json())
            .then((res) => setDatasCard(res))
    }, [])

    return (
        <Container fluid style={{ backgroundColor: "#fff" }}>
            <Row>

                <Col >
                    <p className={clsx(styles.header)}>Trải nghiệm phiên bản công cụ tạo CV cá nhân hóa mới nhất của TopCV - <span>CV Builder 2.0</span> với các mẫu CV mới nhất dưới đây.</p>
                    <div className={clsx(styles.container)}>
                        {datasCard.map((dataCard)=>(
                            <ContainerSample title={dataCard.name} img={dataCard.image} />
                        ))}
                    </div>
                </Col>

            </Row>
        </Container>
    )
}