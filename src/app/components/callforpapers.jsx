const CallForPapers = () => {
    return (
        <div className="text-justify">
            
            <p className="text-pretty mb-2">
            We welcome people to submit papers about ambiguous object analysis to AOCV workshop. Accepted papers will be presented in our workshop and will be published in the ACM MM workshop proceeding.
            </p>

            <p className="text-pretty mb-2">
            <span className="font-bold">We accept short papers (non-archived) which are up to 4 pages in ACM MM format, excluding references; and long papers (archived) which are up to 8 pages in ACM MM format, excluding references.</span> Submission policies adhere to the ACM MM submission policies.
            </p>
            
            <p>The topics in this workshop will include but are not limited to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Object recognition (ambiguous object such as camouflaged/transparent/in-mirror objects)</li>
                <li>Object detection</li>
                <li>Object segmentation</li>
                <li>Object tracking</li>
                <li>Object Re-ID</li>
                <li>Large-scale datasets</li>
                <li>Data augmentation</li>
                <li>3D reconstruction</li>
                <li>Action recognition</li>
                <li>Behavior recognition/analysis</li>
                <li>Uncertainty analysis</li>
                <li>Applications</li>
            </ul>
            <span className="font-bold text-[1.3em]"><a href='https://openreview.net/group?id=acmmm.org/ACMMM/2025/Workshop/AOCV' className="underline text-[1.1em] text-[#232ba1]">Submit your paper here</a></span>.
                
        </div>
    )
}
export default CallForPapers;
