import PersonAvatar from "./person-avatar";

const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Duc Minh Vo" image="/avatar.jpg" affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Huy H. Nguyen" image="/nhhuy.jpg" affiliation={"National Institute of Informatics, Japan"} />
            <PersonAvatar name="Trung-Nghia Le" image="/ltnghia.jpg" affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Akihiro Sugimoto" image="/avatar.jpg" affiliation={"National Institute of Informatics, Japan"} />
            <PersonAvatar name="Hideki Nakayama" image="/avatar.jpg" affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Minh-Triet Tran" image="/tmtriet.png" affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Khan Md Anwarus Salam" image="/avatar.jpg" affiliation={"SoftBank, Japan"} />
         
        </div>

        <br/>
        Contact: lava-workshop(at)googlegroups.com
       
    </div>
}
export default Organizers;
