import clsx from 'clsx'
import InfomationEmploy from './infomationEmploy'
import TopCompany from '../../components/TopCompany'
import BestJobs from '../../components/BestJobs'
import Armorial from './armorial'
import TopField from '../../components/TopField'
import Slogan from './Slogan'
import SuperiorTech from './SuperiorTech'
import Award from './Awards'
import Footer from "../../components/Footer"
import Statistical from './Statistical'
function Homepage(){
    return(
        <>
        <InfomationEmploy/>
        <TopCompany/>
        <BestJobs/>
        <Armorial/>
        <TopField/>
        <Slogan/>
        <SuperiorTech/>
        <Award/>
        <Statistical/>
        <Footer/>
        </>
    )
}
export default Homepage