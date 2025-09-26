import Course from "../models/Course.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .select(["-courseContent", "-enrolledStudents"])
      .populate({ path: "educator" });

    res.json({
      sucess: true,
      courses,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
};

// Get Course by ID
export const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const courseData = await Course.findById(id).populate({ path: "educator" });

    // Remove lecture Url if preview is false
    courseData.courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        if (!lecture.isPreviewFree) {
          lecture.lectureUrl = "";
        }
      });
    });

    res.json({
      sucess: true,
      courseData,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
};
