import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import logo1 from "../../../assets/img/imgJobs/logo1.jpg"
import logo2 from "../../../assets/img/imgJobs/logo2.jpg"
import logo3 from "../../../assets/img/imgJobs/logo3.jpg"
import logo4 from "../../../assets/img/imgJobs/logo4.jpg"
import logo5 from "../../../assets/img/imgJobs/logo5.jpg"
import logo6 from "../../../assets/img/imgJobs/logo6.jpg"
import logo7 from "../../../assets/img/imgJobs/logo7.jpg"
import logo8 from "../../../assets/img/imgJobs/logo8.jpg"

export default function SliderBall() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <>
                        {/* <div className={clsx(styles.container)}>
                            <marquee className={clsx(styles.groupRun)} scrollamount="1" direction="up" behavior="alternate" height="120px">
                                <marquee scrollamount="5" direction="left" >
                                    <img className={clsx(styles.img1)} src={logo1} />
                                    <marquee scrollamount="1" direction="up" behavior="alternate" height="50px">
                                        <marquee width="100%" height="100%" scrollamount="5" direction="left" >
                                            <img className={clsx(styles.img2)} src={logo2} />
                                        </marquee>
                                        <marquee width="100%" height="100%" scrollamount="5" direction="left" >
                                            <img className={clsx(styles.img2)} src={logo6} />
                                        </marquee>
                                        <marquee scrollamount="1" direction="down" behavior="alternate" height="50px">
                                            <marquee width="100%" height="100%" scrollamount="5" direction="left" >
                                                <img className={clsx(styles.img2)} src={logo7} />
                                            </marquee>
                                        </marquee>
                                    </marquee>
                                </marquee>
                            </marquee>
                            <marquee className={clsx(styles.groupRun)} scrollamount="1" direction="down" behavior="alternate" height="120px">
                                <marquee width="100%" scrollamount="5" direction="left" >
                                    <img className={clsx(styles.img3)} src={logo3} />
                                    <marquee width="100%" height="100%" scrollamount="5" direction="left" >
                                        <img className={clsx(styles.img2)} src={logo4} />
                                    </marquee>
                                    <img className={clsx(styles.img3)} src={logo5} />
                                </marquee>
                                <marquee width="100%" height="100%" scrollamount="5" direction="left" >
                                    <img className={clsx(styles.img2)} src={logo8} />
                                </marquee>
                            </marquee>
                        </div> */}
                    </>
                </Col>
            </Row>
        </Container>
    )
}