import { Course } from "../pages/student/Course";
import { Leaderboard } from "../pages/student/Leaderboard";
import { StudentDashboard } from "../pages/student/StudentDashboard";

export const studentPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />,
    },
    {
        name: "Course",
        path: "course",
        element: <Course />,
    },
    {
        name: "Leaderboard",
        path: "leaderboard",
        element: <Leaderboard />,
    },
    
];