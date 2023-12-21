export const Input = ({ labelName, placeholder,}) => {
  return (
    <div>
      <label >{labelName}<span className="text-[#F03800] ">*</span></label> <br />
      <input className="w-[350px] h-10 rounded-[3px] border border-gray-200 pl-[13px] py-[12px] mt-[10px]" type="text" placeholder={placeholder} />
    </div>
  );
};
