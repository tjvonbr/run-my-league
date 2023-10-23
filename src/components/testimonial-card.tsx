import { UserTestimonial } from "@/config/testimonials";
import StarRating from "./star-rating";

interface TestimonialCardProps {
  testimonial: UserTestimonial;
}

export default function TestimonialCard({
  testimonial: { testimonial, user, date },
}: TestimonialCardProps) {
  return (
    <div className="h-48 w-[300px] py-6 px-6 space-y-2 relative border rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-sm">
      <p className="text-muted-foreground">{testimonial}</p>
      <div className="w-full absolute left-0 bottom-0 px-6 pb-6 flex justify-between items-center">
        <StarRating />
        <p className="font-semibold italic">{`- ${user}`}</p>
      </div>
    </div>
  );
}
