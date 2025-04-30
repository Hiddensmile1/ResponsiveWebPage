import "./App.css"
import hijabImage from "./assets/HijabiStudent1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import magicleapImage from "./assets/MagicLeap1.png";
import { BsMicrosoft } from "react-icons/bs";
import { SiCodecov } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const App = () => {

  let website = "hiddensmile"
  return (
    <div className="Container">
      <header className="header">
        <div className="subHeader">
          <div className="logo">
            <h2>Etech.</h2>
          </div>
          <nav className="navBar">

            <div style={{ display: "flex", gap: "0" }}>
              <a style={{ fontSize: "18px" }}>Courses</a>
              <RiArrowDropDownLine style={{ paddingTop: "7px", fontSize: "25px" }} />
            </div>
            <div style={{ display: "flex", gap: "0" }}>
              <a style={{ fontSize: "18px" }}>Teachers</a>
              <RiArrowDropDownLine style={{ paddingTop: "7px", fontSize: "25px" }} />
            </div>
            <div style={{ display: "flex", gap: "0" }}>
              <a style={{ fontSize: "18px" }}>Offers</a>
              <RiArrowDropDownLine style={{ paddingTop: "7px", fontSize: "25px" }} />
            </div>
            <a style={{ fontSize: "18px" }}>Contact</a>
          </nav>
          <IoMenu className="burgerMenu" style={{ color: "purple", fontSize: "30px" }} />
          <div className="button">
            <input type="button" value="Sign In " id="sign" />
            <input type="button" value="Free Trial" id="trial" />
          </div>
        </div>
      </header>
      <main className="maincontain">
        <div className="subcontain">
          <section className="leftcontain">
            <div style={{ fontSize: "60px", marginBottom: "6px" }}>Develop your skills in a new and unique way</div>
            <div style={{ marginBottom: "10px", gap: "5px", fontSize: "20px" }}>Explore a transformative approach to skill development on our online learning platform.
              Uncover a new realm of learning experiences and elevate your expertise in a unique way.
            </div>
            <div className="click">
              <input id="trial" type="button" value="Enroll Now" />
              <audio src="">What's Etech</audio>
            </div>
          </section>
          <section className="rightcontain">
            <div className="imgcontain">
              <img src={hijabImage} />
            </div>
          </section>
        </div>
        <section className="section2">
          <div className="row">
            <div style={{ fontSize: "30px", marginBottom: "10px", marginTop: "10px" }}>
              duolingo
            </div>
            <div>
              <img src={magicleapImage} alt="" style={{ width: "140px" }} />
            </div>
            <div style={{ fontSize: "30px", marginBottom: "10px", marginTop: "10px" }}>
              <BsMicrosoft style={{ paddingTop: "10px" }} />Microsoft
            </div>
            <div style={{ fontSize: "30px", marginBottom: "10px", marginTop: "10px" }}>
              <SiCodecov style={{ paddingTop: "10px" }} />Codecov
            </div>
            <div>

            </div>
          </div>
        </section>
      </main>
      <section className="mainSection">
        <section className="submainSection">
          <div className="searchSection">
            Search Courses
          </div>
          <div className="searchButton">
            <div className="inputSection">
              <CiSearch className="search" style={{ fontSize: "25px" }} />
              <input type="text" placeholder="Search for over 50+ courses" />
            </div>
            <div>
              <input id="trial" type="button" value="Search" className="searchBtn" />
            </div>
          </div>

        </section>
      </section>

    </div>
  )
}

export default App