export default function FormInput(props) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block font-medium  text-gray-900 sm:text-sm sm:leading-6"
      >
        {props?.label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="block w-full  border-0 py-1.5 text-gray-900 ring-gray-300 placeholder:text-gray-400 "
          {...props}
        />
      </div>
    </div>
  );
}
