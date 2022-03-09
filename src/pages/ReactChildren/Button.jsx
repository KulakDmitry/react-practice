export default function Button({ children, ...props }) {
  return (
    <button className="border bg-gray-300 p-2 m-2 hover:bg-gray-400" {...props}>
      {children}
    </button>
  );
}
