import { useId } from "react";

type InputProps = {
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = (props) => {
  const { label, value, onChange, type = "text" } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
