import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="pt-6 flex-col gap-1 items-center justify-center">
      <FaSpinner className="animate animate-spin" />
    </div>
  );
}
