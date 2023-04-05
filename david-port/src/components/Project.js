// importing the pictures for projects with links below

import DogAdopt from "../assets/Homepage.png"
import "../style/projects.css"
import Bops from "../assets/bops.png"
import PassGen from "../assets/passgen.png"
import ORM from "../assets/orm.png"
import MYSQL from "../assets/MYSQL.JPG"
import TeamGen from "../assets/teamgen.JPG"
import OverUnder21 from "../assets/OverUnder21Home.JPG"

function Projects() {
    return (
        <div>
            <div className="projects">
                <div className="projectsdsc">
                    <h2>
                        Here you will find my recent projects that will show my technical skills.Enjoy!
                    </h2>
                </div>
                <div className="projectpic">
                    <a href="https://stark-meadow-18260.herokuapp.com/">
                        <img src={DogAdopt} alt=""></img>
                    </a>
                    <a href ="https://lizedelman.github.io/bopsnbooze/">
                        <img src={Bops} alt=""></img>
                    </a>
                    <a href="https://captureb.github.io/PasswordGenerator/">
                        <img src={PassGen} alt=""></img>
                    </a>
                    <a href="https://over-under-21.herokuapp.com/">
                        <img src={OverUnder21} alt=""></img>
                    </a>
                    <a href="https://github.com/CaptureB/Employee-Tracker--Mysql">
                        <img src={MYSQL} alt=""></img>
                    </a>
                    <a href="https://github.com/CaptureB/Team-Gen">
                        <img src={TeamGen} alt=""></img>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default Projects;

