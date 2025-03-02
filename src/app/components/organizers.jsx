import PersonAvatar from "./person-avatar";
import { imagePrefix } from "../../constant.js";
const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Trung-Nghia Le" image={`${imagePrefix}/ltnghia.jpg`} affiliation={"University of Science, Vietnam"} /> 
            <PersonAvatar name="Minh-Triet Tran" image={`${imagePrefix}/tmtriet.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Khanh-Duy Le" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Duy-Nam Ly" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Tam Nguyen" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Thanh-Toan Do" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Vinh-Tiep Nguyen" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
        </div>

        <br/>
        Contact: ltnghia@fit.hcmus.edu.vn
       
    </div>
}
export default Organizers;
