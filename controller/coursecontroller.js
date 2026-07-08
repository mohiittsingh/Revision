import Course_model from "../models/Courses.js";

export const createCourse = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }
    const { title, price, description } = req.body;

    const course = await Course_model.create({
      title,
      price,
      description,
      creatorid: req.user.id,
    });

    return res.status(201).json({
      success: true,
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    const { id } = req.params;
    const { title, price, description } = req.body;

    const course = await Course_model.findById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        
        message: "Course not found",
      });
    }

    if (course.creatorid?.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You can only update your own course",
      });
    }

    if (title !== undefined) course.title = title;
    if (price !== undefined) course.price = price;
    if (description !== undefined) course.description = description;

    await course.save();

    return res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
