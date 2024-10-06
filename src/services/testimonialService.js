import Testimonial from "../models/Testimonial.js";

const createTestimonial = async (data, userId) => {
  return await Testimonial.create({...data, createdBy:userId});
};

const getAllTestimonials = async () => {
  return await Testimonial.find();
};

const getTestimonialById = async (id) => {
  return Testimonial.findById(id)
}


const editTestimonial = async (id, data) => {
  return await Testimonial.findByIdAndUpdate(id, data);
};

const removeTestimonial = async (id) => {
  return await Testimonial.findByIdAndDelete(id);
};

export default {
  createTestimonial,
  editTestimonial,
  getAllTestimonials,
  getTestimonialById,
  removeTestimonial,
};
