export const Button = ({ children, icon }) => {
  return (
    <button className="flex gap-[10px] items-center text-white  bg-green rounded-md py-[8px] px-[17px]">
      {" "}
      {icon ? icon : ""} {children}
    </button>
  );
};
