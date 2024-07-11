const Schedule = () => {
    return <div className="text-justify">
        This workshop will be a full-day event, including the following:
        <ul class="list-disc list-inside space-y-2 mt-2 mb-8">
            <li>Paper presentations (oral and poster). </li>
            <li>Invited talks. </li>
            <li>Challenge track.  </li>
        </ul>
        <span className="font-bold">Paper selection process </span>
        <ul class="list-disc list-inside space-y-2 mt-2 mb-8">
            <li>All submissions should follow the ACCV submission guideline. </li>
            <li>We accept short papers (non-archived) which are up to 8 pages in ACCV format, excluding references; and long papers (archived) which are up to 16 pages in ACCV format, excluding references.
            </li>
            <li>Submission policies adhere to the ACCV submission policies.  </li>
            <li>To ensure the quality of accepted papers, we will keep the acceptance rate less than the main conference’s acceptance rate. </li>


            <li>The accepted papers will be published in workshop proceeding. </li>
        </ul>
        <span className="font-bold"> Challenge Track  </span>
        <p>The primary goal of this challenge is to enhance the ability of LVLMs to accurately interpret and comprehend complex visual inputs, including charts, diagrams, and building design drawings. Utilizing the benchmark dataset provided by the TASUKI team from Softbank, participants will aim to improve the models&apos; understanding and transcription of graphical data, enabling the models to effectively answer questions related to this graphical information. </p>
        <br/>
        <span className="font-bold">  Important dates (tentative)  </span>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Challenge track opened: 2024/7/31</li>
            <li>Test set released: 2024/8/30</li>
            <li>Challenge track closed: 2024/9/30</li>
            <li>Regular paper submission deadline: 2024/9/30</li>
            <li>Challenge track paper submission deadline: 2024/10/15</li>
            <li>Acceptance notification: 2024/10/30</li>
            <li>Camera-ready deadline: 2024/11/15</li>
            <li>Workshop date: 2024/12/8~12 (TBA)</li>
        </ul>
    </div>
}
export default Schedule;