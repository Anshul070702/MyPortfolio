import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

function About() {
  const educationData = [
    {
      id: 1,
      title: "BTech in CSE",
      institution: "Indian Institute of Information Technology, Pune",
      year: "2021 - 2025",
      grade: "8.21 CGPA",
    },
    {
      id: 2,
      title: "Senior Secondary Education",
      institution: "Sec. Delhi Public School",
      year: "2020 - 2021",
      grade: "85%",
    },
  ];

  return (
    <div
      name="About"
      className="bg-[#E9E0BB] max-w-screen-3xl h-auto container mx-auto p-4 md:px-20"
    >
      <div className="h-auto">
        <br />
        <h1 className="font-semibold text-2xl text-center">Education</h1>

        <VerticalTimeline className="custom-vertical-timeline">
          {educationData.map(
            ({ id, title, institution, year, grade }, index) => (
              <VerticalTimelineElement
                key={id}
                className={`vertical-timeline-element--education ${
                  index % 2 === 0
                    ? "vertical-timeline-element--right"
                    : "vertical-timeline-element--left"
                }`}
                date={year}
                iconStyle={{ background: "#ECB176", color: "#fff" }}
                icon={<FaGraduationCap />}
                contentStyle={{
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "left",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #ECB176",
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#333]">{title}</h3>
                <h4 className="text-lg font-semibold mb-1 text-[#666]">
                  {institution}
                </h4>
                <h4 className="text-md font-medium mb-2 text-[#999]">
                  {grade}
                </h4>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;
