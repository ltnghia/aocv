const Challenge = () => {
    return (
        <div className="text-justify">
{/*            <p>
           This workshop challenge aims to push the boundaries of what is possible with LLMs and LVLMs in interpreting and transcribing graphical data. By leveraging the TASUKI benchmark dataset, participants will contribute to significant advancements in Graph2Text technologies, with potential applications in various domains requiring accurate and detailed visual data interpretation. We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this workshop challenge. Participants can register as individuals or teams.
            <br/>
            <br/>
            More information will come soon. Please stay tuned.

            </p> */}

            <p>
            <span className="font-bold">Challenge Overview:</span> The primary goal of this challenge is to advance the capability of Large Vision-Language Models to accurately interpret and understand complex visual data such as Data Flow Diagrams (DFDs), Class Diagrams, Gantt Charts, and Building Design Drawings. We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this workshop challenge. Participants can register as individuals or teams. They are required to develop a model that can answer questions related to the input data. Below, we provide a few samples.

            <br/>
            <span className="font-bold">Datasets:</span>
            <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
                <li><span className="font-bold">Public dataset with answers:</span> We will build the dataset by collecting data from the internet. Participants can freely use publicly available datasets to develop their models.</li>
                <li><span className="font-bold">Public dataset without answers:</span> We will release the dataset without answers. Participants will submit the results to our system to get the scores.</li>
                <li><span className="font-bold">Private dataset:</span> Participants are required to submit their reproducible implementations so that we can test them on our private dataset provided by the TASUKI team (SoftBank).</li>
            </ul>

            <br/>
            Please register your team information <span className="font-bold"><a href='https://docs.google.com/forms/d/e/1FAIpQLScvuNuXqoHGW3SKhF2WYN34WhFarVp3Dx6gEXMX4dr4xT7T6A/viewform'>here</a></span>. We will send the link to download the dataset later.

            <br/>
            
            <span className="font-bold">Metric:</span>
            <br/>
            We will evaluate using MMMU. 

            <br/>
            
            <span className="font-bold">Final score = 0.3 * Public dataset with answers + 0.5 * Public dataset without answers + 0.2 * Private dataset </span>

            <br/>
            <span className="font-bold">Baselines</span> (coming soon)

            <br/>
            <span className="font-bold">Submission</span> (coming soon)

            <br/>
            
            <span className="font-bold">Computational Resources:</span>
            May use SoftBank SuporPOD/Beyond AI SANDBOX GPUs for University of Tokyo participants.</p>


        </div>
    )
}
export default Challenge;
