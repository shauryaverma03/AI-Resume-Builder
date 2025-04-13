import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import SimpeRichTextEditor from "@/components/custom/SimpeRichTextEditor";
import { useDispatch } from "react-redux";
import { addResumeData } from "@/features/resume/resumeFeatures";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { updateThisResume } from "@/Services/resumeAPI";

const formFields = {
  projectName: "",
  techStack: "",
  projectSummary: "",
};
function Project({ resumeInfo, setEnabledNext, setEnabledPrev }) {
  const [projectList, setProjectList] = useState(resumeInfo?.projects || []);
  const [loading, setLoading] = useState(false);
  const { resume_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addResumeData({ ...resumeInfo, projects: projectList }));
  }, [projectList]);

  const addProject = () => {
    setProjectList([...projectList, formFields]);
  };

  const removeProject = (index) => {
    const list = [...projectList];
    const newList = list.filter((item, i) => {
      if (i !== index) return true;
    });
    setProjectList(newList);
  };

  const handleChange = (e, index) => {
    setEnabledNext(false);
    setEnabledPrev(false);
    console.log("Type: ", typeof setEnabledPrev);
    const { name, value } = e.target;
    const list = [...projectList];
    const newListData = {
      ...list[index],
      [name]: value,
    };
    list[index] = newListData;
    setProjectList(list);
  };

  const handleRichTextEditor = (value, name, index) => {
    const list = [...projectList];
    const newListData = {
      ...list[index],
      [name]: value,
    };
    list[index] = newListData;
    setProjectList(list);
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        projects: projectList,
      },
    };
    if (resume_id) {
      console.log("Started Updating Project");
      updateThisResume(resume_id, data)
        .then((data) => {
          toast("Resume Updated", "success");
        })
        .catch((error) => {
          toast("Error updating resume", `${error.message}`);
        })
        .finally(() => {
          setEnabledNext(true);
          setEnabledPrev(true);
          setLoading(false);
        });
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Project</h2>
      <p>Add your projects</p>
      <div>
        {projectList?.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-lg">Project {index + 1}</h3>
              <Button
                variant="outline"
                className="text-red-500"
                onClick={(e) => {
                  removeProject(index);
                }}
              >
                <Trash2 />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div>
                <label className="text-xs">Project Name</label>
                <Input
                  type="text"
                  name="projectName"
                  value={project?.projectName}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  type="text"
                  name="techStack"
                  value={project?.techStack}
                  placeholder="React, Node.js, Express, MongoDB"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div className="col-span-2">
                <SimpeRichTextEditor
                  index={index}
                  defaultValue={project?.projectSummary}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "projectSummary", index)
                  }
                  resumeInfo={resumeInfo}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-2">
        <Button onClick={addProject} variant="outline" className="text-primary">
          + Add {resumeInfo?.experience?.length > 0 ? "more" : null} project
        </Button>
        <Button onClick={onSave}>
          {loading ? <LoaderCircle className=" animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Project;
