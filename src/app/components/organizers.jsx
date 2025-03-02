import PersonAvatar from "./person-avatar";
import { imagePrefix } from "../../constant.js";
const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Duc Minh Vo" image={`${imagePrefix}/vmduc.jpg`} affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Huy H. Nguyen" image={`${imagePrefix}/nhhuy.jpg`} affiliation={"National Institute of Informatics, Japan"} />
            <PersonAvatar name="Trung-Nghia Le" image={`${imagePrefix}/ltnghia.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Akihiro Sugimoto" image={`${imagePrefix}/sugimoto.jpg`} affiliation={"National Institute of Informatics, Japan"} />
            <PersonAvatar name="Hideki Nakayama" image={`${imagePrefix}/nakayama.jpg`} affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Minh-Triet Tran" image={`${imagePrefix}/tmtriet.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Khan Md Anwarus Salam" image={`${imagePrefix}/khan_salam.jpg`} affiliation={"SoftBank, Japan"} />
         
        </div>

        <br/>
        Contact: lava-workshop(at)googlegroups.com
       
    </div>
}
export default Organizers;
