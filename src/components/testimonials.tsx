import { UserTestimonial, testimonials } from "@/config/testimonials";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  return (
    <div className="w-full inline-flex flex-nowrap">
      <div className="max-w-none flex justify-center items-center md:justify-start space-x-8 animate-infinite-scroll">
        {testimonials.map((testimonial: UserTestimonial, idx: number) => {
          return <TestimonialCard key={idx} testimonial={testimonial} />;
        })}
      </div>
      <div className="max-w-none flex justify-center items-center md:justify-start ml-8 space-x-8 animate-infinite-scroll">
        {testimonials.map((testimonial: UserTestimonial, idx: number) => {
          return <TestimonialCard key={idx} testimonial={testimonial} />;
        })}
      </div>
    </div>
  );
}
