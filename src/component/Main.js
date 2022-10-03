import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about/About';
import Admission from './Admission/Admission';
import Career from './Career/Career';
import Contact_US from './Contact_US/Contact_US';
import Department from './Department/Department';
import Faculties from './Faculties/Faculties';
import Footer from './Footer/Footer';
// import Front from './front/Front';
import Menu_2 from './Menu_2/Menu_2';
import Niter_Clubs from './Niter_Clubs/Niter_Clubs';
import Notice from './Notice/Notice';
import Office from './Office/Office';
import Residents from './Residents/Residents';
import Teacher from './Teacher/Teacher';
import Front_2 from "./Front_2/Front_2";
import Menu from "./Menu/Menu";
function Main() {
    return(
        <>
         
           
            <Router>
            
                <Menu_2 />
                {/* <Menu /> */}
                 <Routes>
                    <Route path="/DemoReactWebUniversity" element={<Front_2 />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/faculties" element={<Faculties />}></Route>
                    <Route path="/teacher" element={<Teacher />}></Route>
                    <Route path="/department" element={<Department />}></Route>
                    <Route path="/notice" element={<Notice />}></Route>
                    <Route path="/niterclub" element={<Niter_Clubs />}></Route>
                    <Route path="/admission" element={<Admission/>}></Route>
                    <Route path="/office" element={<Office/>}></Route>
                    <Route path="/residents" element={<Residents/>}></Route>
                    <Route path="/contactus" element={<Contact_US/>}></Route>
                    <Route path="/career" element={<Career />}></Route>
                 </Routes>
                <Footer />
            </Router>


          {/* <Front /> */}
            {/* <About /> */}
            {/* <Faculties /> */}
            {/* <Teacher /> */}
            {/* <Department /> */}
            {/* <Notice /> */}
            {/* <Niter_Clubs /> */}
            {/* <Admission /> */}
            {/* <Office /> */}
            {/* <Residents /> */}
            {/* <Contact_US /> */}
            {/* <Career /> */}
           
        </>
    )
}
export default Main;
