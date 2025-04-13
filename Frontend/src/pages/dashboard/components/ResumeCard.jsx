import { FaEye, FaEdit, FaTrashAlt, FaBook, FaSpinner } from "react-icons/fa";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteThisResume } from "@/Services/resumeAPI";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const gradients = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-green-400 via-blue-500 to-purple-600",
  "from-red-400 via-yellow-500 to-green-500",
  "from-blue-500 via-teal-400 to-green-300",
  "from-pink-500 via-red-500 to-yellow-500",
];

const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

function ResumeCard({ resume, refreshData }) {
  const [loading, setLoading] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const gradient = getRandomGradient();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    console.log("Delete Resume with ID", resume._id);
    try {
      const response = await deleteThisResume(resume._id);
    } catch (error) {
      console.error("Error deleting resume:", error.message);
      toast(error.message);
    } finally {
      setLoading(false);
      setOpenAlert(false);
      refreshData();
    }
  };
  return (
    <div
      className={`p-5 bg-gradient-to-r ${gradient} h-[380px] sm:h-auto rounded-lg flex flex-col justify-between shadow-lg transition duration-300 ease-in-out cursor-pointer hover:shadow-xl`}
    >
      <div className="flex items-center justify-center p-6 bg-white rounded-t-lg shadow-md">
        <h2
          className={`text-center font-bold text-md mx-2 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
        >
          {resume.title}
        </h2>
      </div>
      <div className="flex items-center justify-around p-4 bg-white rounded-b-lg shadow-md">
        <Button
          variant="ghost"
          onClick={() => navigate(`/dashboard/view-resume/${resume._id}`)}
          className="mx-2"
        >
          <FaEye className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out" />
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate(`/dashboard/edit-resume/${resume._id}`)}
          className="mx-2"
        >
          <FaEdit className="text-gray-600 hover:text-purple-600 transition duration-300 ease-in-out" />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setOpenAlert(true)}
          className="mx-2"
        >
          <FaTrashAlt className="text-gray-600 hover:text-pink-600 transition duration-300 ease-in-out" />
        </Button>
        <AlertDialog open={openAlert} onClose={() => setOpenAlert(false)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Resume and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} disabled={loading}>
                {loading ? <FaSpinner className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCard;
