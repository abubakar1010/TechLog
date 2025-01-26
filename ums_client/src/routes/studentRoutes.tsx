import { Course } from "../pages/student/Course";
import { Leaderboard } from "../pages/student/Leaderboard";
import { MyOfferedCourse } from "../pages/student/MyOfferedCourse";
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
        name: "Offered Course",
        path: "offered-course",
        element: <MyOfferedCourse />,
    },
    {
        name: "Leaderboard",
        path: "leaderboard",
        element: <Leaderboard />,
    },
    
];