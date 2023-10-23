import { Icons } from "./common/icons";

export default function StarRating() {
  return (
    <div className="flex items-center space-x-1">
      <Icons.star color="gray" fill="gray" size={15} />
      <Icons.star color="gray" fill="gray" size={15} />
      <Icons.star color="gray" fill="gray" size={15} />
      <Icons.star color="gray" fill="gray" size={15} />
      <Icons.star color="gray" fill="gray" size={15} />
    </div>
  );
}
