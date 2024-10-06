import testimonialService from "../services/testimonialService.js";

const addTestimonials = async (req, res) => {
  const data = req.body;
  const userId = req.user.id;
  try {
    const createdTestimonial = await testimonialService.createTestimonial(
      data,
      userId
    );

    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllTestimonials = async (req, res) => {
  try {
    const testimonial = await testimonialService.getAllTestimonials();

    res.json(testimonial);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getTestimonialByIds = async (req, res) => {
  const id = req.params.id;

  try {
    const testimonial = await testimonialService.getTestimonialById(id);

    if (!testimonial) return res.status(404).send("Testimonial not found");

    res.json(testimonial);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateTestimonial = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const user = req.user;

  try {
    const testimonial = await testimonialService.getTestimonialById(id);

    if (!testimonial) return res.status(404).send("Testimonial not found");

    if (testimonial.createdBy != user.id && !user.roles.includes("ADMIN")) {
      res.status(403).send("Access denied.");
    }

    const updatedTestimonial = await testimonialService.editTestimonial(
      id,
      data
    );

    res.json(updatedTestimonial);
  } catch {
    res.status(500).send("Error updating testimonial");
  }
};

const deleteTestimonial = async (req, res) => {
  const id = req.params.id;

  try {
    const testimonial = await testimonialService.getTestimonialById(id);

    if (!testimonial) return res.status(404).send("Testimonial not found");

    await testimonialService.removeTestimonial(id);
    res.send("Testimonial deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  addTestimonials,
  deleteTestimonial,
  getAllTestimonials,
  getTestimonialByIds,
  updateTestimonial,
};
