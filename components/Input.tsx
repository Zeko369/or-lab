import { useId } from "react";

type InputProps = {
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFallback: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="w-full animate-pulse">
      {label ? (
        <label className="block animate-none text-sm  font-medium text-gray-700">{label}</label>
      ) : (
        <div className="h-5 w-1/3 rounded bg-slate-200"></div>
      )}
      <div className="mt-1 h-[38px]  rounded-md bg-slate-200"></div>
    </div>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const { label, value, onChange, type = "text" } = props;
  const id = useId();

  return (
    <div className="w-full">
      <label htmlFor={`${label}-${id}`} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={`${label}-${id}`}
          type={type}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
