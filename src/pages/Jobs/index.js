import clsx from 'clsx'
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/header"
import BestJobs from '../../components/BestJobs';
import Banner from "./Banner/banner"
import Armorial from "../../pages/Home/armorial"
import TopField from "../../components/TopField"
import SliderBall from "./SliderBall/sliderBall"
import Footer from "../../components/Footer"
import JobTabs from "./Tabs/tab"
function Jobs() {
    return (
        <>
            <Header />
            <BestJobs />
            <Banner />
            <Armorial />
            <TopField />
            <SliderBall />
            <JobTabs/>
            <Footer />
        </>
    )
}
export default Jobs