import React from "react";

function EducationalPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      {resumeInfo?.education.length > 0 && (
        <div>
          <h2
            className="text-center font-bold text-sm mb-2"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            Education
          </h2>
          <hr
            style={{
              borderColor: resumeInfo?.themeColor,
            }}
          />
        </div>
      )}

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree}
            {education?.degree && education?.major ? " in " : null}
            {education?.major}
            <span>
              {education?.startDate}{" "}
              {education?.startDate && education?.endDate ? " - " : null}{" "}
              {education?.endDate}
            </span>
          </h2>
          <div className="text-xs">
            {education?.grade ? `${education?.gradeType} - ${education?.grade}` : null}
          </div>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
