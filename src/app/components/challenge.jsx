const Challenge = () => {
    return (
        <div className="text-justify">
           <p>
           This workshop challenge aims to push the boundaries of what is possible with LLMs and LVLMs in interpreting and transcribing graphical data. By leveraging the TASUKI benchmark dataset, participants will contribute to significant advancements in Graph2Text technologies, with potential applications in various domains requiring accurate and detailed visual data interpretation. We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this workshop challenge. Participants can register as individuals or teams.
            <br/>
            <br/>
            More information will come soon. Please stay tuned.

            </p>

            <h1>Challenge Overview</h1>
            <p>The primary goal of this challenge is to advance the capability of Large Vision-Language Models to accurately interpret and understand complex visual data such as Data Flow Diagrams (DFDs), Class Diagrams, Gantt Charts, and Building Design Drawings. We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this workshop challenge. Participants can register as individuals or teams. They are required to develop a model that can answer questions related to the input data. Below, we provide a few samples. Our challenge is conducted in two separate phases.</p>
            
            <h1>Datasets:</h1>
            <ul>
                <li><strong>Phase 1:</strong> We will build the dataset by collecting data from the internet. Note that we will only release the test set. Participants can freely use publicly available datasets to develop their models.</li>
                <li><strong>Phase 2:</strong> We will release a test set (without answers). Additionally, participants are required to submit their reproducible implementations so that we can test them on our private dataset provided by the TASUKI team (SoftBank).</li>
            </ul>
            
            <h1>Metric:</h1>
            <p>We will evaluate using MMMU metric. Final score = 0.3 * Phase 1 result + 0.5 * Phase 2 (public set) result + 0.2 * Phase 2 (private set) result.</p>
            
            <h1>Baselines (coming soon)</h1>
            
            <h1>Submission (coming soon)</h1>
            
            <h1>Computational Resources:</h1>
            <p>May use SoftBank SuporPOD/Beyond AI SANDBOX GPUs for University of Tokyo participants.</p>


        </div>
    )
}
export default Challenge;
