import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      {resumeInfo?.experience.length > 0 && (
        <div>
          <h2
            className="text-center font-bold text-sm mb-2"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            Professional Experience
          </h2>
          <hr
            style={{
              borderColor: resumeInfo?.themeColor,
            }}
          />
        </div>
      )}

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName}
            {experience?.companyName && experience?.city ? ", " : null}
            {experience?.city}
            {experience?.city && experience?.state ? ", " : null}
            {experience?.state}
            <span>
              {experience?.startDate}{" "}
              {experience?.startDate && experience?.currentlyWorking
                ? "Present"
                : experience.endDate
                ? "To"
                : null}{" "}
              {experience?.currentlyWorking ? "Present" : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
