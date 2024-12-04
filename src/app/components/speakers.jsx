import PersonAvatar from "./person-avatar";


const Speakers = ()=>{
    return <div> 
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Asim Munawar" image="/AsimMunawar.jpg" affiliation={"IBM Research, US"} />
            <p>
            LLM-Based Reasoning: Opportunities and Pitfalls <br/>
            The question of whether Large Language Models (LLMs) can reason is both complex and crucial. While LLMs have demonstrated capabilities in informal reasoning, their potential extends far beyond, particularly in advancing explainable AI and the development of intelligent agents. In this talk, I will explore the reasoning abilities of LLMs and discuss the ongoing efforts at IBM to enhance these capabilities in IBM granite models by using knowledge and tool-assisted synthetic data generation.

            </p>
            
{/*             <PersonAvatar name="April Pyone Maung Maung" image="/Maung.jpg" affiliation={"National Institute of Informatics, Japan"} /> */}
        </div>

    </div>
}
export default Speakers;
