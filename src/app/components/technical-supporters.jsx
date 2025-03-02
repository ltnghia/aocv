import PersonAvatar from "./person-avatar";
import { imagePrefix } from "../../constant.js";
const TechnicalSupporters = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Duy-Nam Ly" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trong-Le Do" image={`${imagePrefix}/dtle.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Daichi Sato" image={`${imagePrefix}/Daichi.jpg`} affiliation={"The University of Tokyo, Japan"} />
            <PersonAvatar name="TASUKI Team" image={`${imagePrefix}/TASUKI.png`} affiliation={"SoftBank, Japan"} />
        </div>

        <br/>
       
    </div>
}
export default TechnicalSupporters;
