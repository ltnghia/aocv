const Schedule = () => {
  return (
    <div className="text-justify">
      <p className="mb-4">
        The AOCV Workshop is merged with{" "}
        <a
          target="_blank"
          href="https://lava-workshop.github.io/workshop"
          className="underline text-[1.1em]"
        >
          the LAVA Workshop
        </a>{" "}
        at ACM Multimedia 2025.
      </p>

      <h2 className="text-xl font-bold mb-2">LAVA–AOCV Workshop Schedule</h2>
      <p className="mb-4">
        <strong>Date:</strong> October 31st, 2025 (Friday), 9:00 AM – 11:30 AM (GMT+1)
        <br />
        <strong>Venue:</strong> Distillers, Hyatt at the Royal Dublin Convention Centre, Dublin, Ireland
        <br />
        <strong>Online:</strong>{" "}
        <a
          href="https://illinois.zoom.us/j/87228721768?pwd=x1BazbP4ETGTWIpjFvPka7pb8dNQbY.1"
          target="_blank"
          className="underline text-blue-600"
        >
          Zoom link
        </a>
      </p>

      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>09:00</strong> – Opening Remark
        </li>
        <li>
          <strong>09:05</strong> – <strong>Keynote Talk:</strong> Dr. Seitaro Shinagawa (SB Intuitions, online) <br />
          <em>Sarashina2-Vision: Toward Vision–Language Models for Understanding Japanese Figures and Conceptual/Explanatory Diagrams</em>
        </li>
        <li>
          <strong>10:00</strong> – Janak Kapuriya (online):{" "}
          <em>Enhancing Scientific Visual Question Answering via Vision-Caption Aware Supervised Fine-Tuning</em>
        </li>
        <li>
          <strong>10:15</strong> – Jiadong Yan (pre-recorded video):{" "}
          <em>Few-shot Anomaly Detection based on Long Short Text Interactive Contrastive Learning</em>
        </li>
        <li>
          <strong>10:30 – 11:00</strong> Coffee break
        </li>
        <li>
          <strong>11:00</strong> – Tun-Yuan Chang:{" "}
          <em>Harvesting Temporal Correlation in Large Vision-Language Models: Using Pose Estimation as a Case Study</em>
        </li>
        <li>
          <strong>11:15</strong> – Nam Nguyen Xuan (online):{" "}
          <em>StructCon-ST: Connectivity-Aware Spatio-Temporal Fine-Grained Image Analysis</em>
        </li>
        <li>
          <strong>11:30</strong> – Jun Wan (pre-recorded video):{" "}
          <em>Hierarchical Temporal Views for Policy Optimization in Multimodal Video Reasoning</em>
        </li>
      </ul>
    </div>
  );
};

export default Schedule;
