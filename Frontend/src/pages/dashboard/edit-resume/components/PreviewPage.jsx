import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalDeatailPreview from "./preview-components/PersonalDeatailPreview";
import SummeryPreview from "./preview-components/SummaryPreview";
import ExperiencePreview from "./preview-components/ExperiencePreview";
import EducationalPreview from "./preview-components/EducationalPreview";
import SkillsPreview from "./preview-components/SkillsPreview";
import ProjectPreview from "./preview-components/ProjectPreview";

function PreviewPage() {
  const resumeData = useSelector((state) => state.editResume.resumeData);
  useEffect(() => {
    console.log("PreviewPage rendered ");
  }, [resumeData]);
  return (
    <div
      className={`shadow-lg h-full p-14 border-t-[20px]`}
      style={{
        borderColor: resumeData?.themeColor ? resumeData.themeColor : "#000000",
      }}
    >
      <PersonalDeatailPreview resumeInfo={resumeData} />
      {}
      <SummeryPreview resumeInfo={resumeData} />
      {resumeData?.experience && <ExperiencePreview resumeInfo={resumeData} />}
      {resumeData?.projects && <ProjectPreview resumeInfo={resumeData} />}
      {resumeData?.education && <EducationalPreview resumeInfo={resumeData} />}
      {resumeData?.skills && <SkillsPreview resumeInfo={resumeData} />}
    </div>
  );
}

export default PreviewPage;
