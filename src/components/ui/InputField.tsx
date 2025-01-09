import { InputFieldProps } from "./InputField.types";

function InputField({
  id,
  label,
  type,
  required,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="py-2 px-3 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required={required}
      />
    </div>
  );
}

export default InputField;
