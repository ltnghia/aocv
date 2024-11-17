import PersonAvatar from "./person-avatar";


const Speakers = ()=>{
    return <div> 
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Asim Munawar" image="/AsimMunawar.jpg" affiliation={"IBM Research, US"} />
            <PersonAvatar name="April Pyone Maung Maung" image="/Maung.jpg" affiliation={"National Institute of Informatics, Japan"} />
        </div>

    </div>
}
export default Speakers;
