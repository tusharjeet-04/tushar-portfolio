
import classes from "./programmingSkills.module.css";
import {  C, Cplus , ReactJS,JavaScript, Redux,HTML,CSS,} from "../asset/svg/svg";
import { useSelector } from "react-redux";
const skills = [ C,Cplus,ReactJS, JavaScript , Redux, HTML, CSS];
const skillNames=["C","Cplus","ReactJs","JavaScript","Redux" ,"HTML","CSS"];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Programming <span style={{ color:uiColor}}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
                        <Item />
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;