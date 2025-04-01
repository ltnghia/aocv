import PersonAvatar from "./person-avatar";
import { imagePrefix } from "../../constant.js";
const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Tam Nguyen" image={`${imagePrefix}/nvtam.jpeg`} affiliation={"University of Dayton, US"} />
            <PersonAvatar name="Ju Shen" image={`${imagePrefix}/shenju.jpg`} affiliation={"University of Dayton, US"} />
            <PersonAvatar name="Kunpeng Li" image={`${imagePrefix}/likunpeng.jpeg`} affiliation={"Air Force Institute of Technology, US"} />
            <PersonAvatar name="Thanh-Toan Do" image={`${imagePrefix}/dttoan.jpeg`} affiliation={"Monash University, Australia"} />
            <PersonAvatar name="Minh-Triet Tran" image={`${imagePrefix}/tmtriet.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trung-Nghia Le" image={`${imagePrefix}/ltnghia.jpg`} affiliation={"University of Science, Vietnam"} /> 
            <PersonAvatar name="Khanh-Duy Le" image={`${imagePrefix}/lkduy.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Duy-Nam Ly" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Viet-Tham Huynh" image={`${imagePrefix}/hvtham.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Vinh-Tiep Nguyen" image={`${imagePrefix}/nvtiep.png`} affiliation={"University of Information Technology, Vietnam"} />
        </div>
        <br/>
        Contact: <a href="mailto:ltnghia@fit.hcmus.edu.vn">ltnghia@fit.hcmus.edu.vn</a>
    </div>
}
export default Organizers;
