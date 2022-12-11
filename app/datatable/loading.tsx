import { InputFallback } from "../../components/Input";
import { Loader } from "../../components/Loader";

export default function Loading() {
  return (
    <>
      <div className="flex flex-row items-end justify-between gap-2">
        <InputFallback label="Search" />
        <InputFallback label="Search Field" />
      </div>

      <div className="mt-3">
        <Loader />
      </div>
    </>
  );
}
