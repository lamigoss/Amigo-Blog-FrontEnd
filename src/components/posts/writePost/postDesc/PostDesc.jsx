import React from "react";

const PostDesc = (props) => {
  return (
    <>
      <div className="grid grid-cols-[20%_80%] gap-x-2 pt-4 pl-6 pb-2 pr-10">
        <div className="text-blue-500">Post Description:</div>
        <textarea
          className="bg-indigo-100 h-80 p-5  text-slate-800 placeholder:text-gray-300 rounded-md"
          placeholder="Describe your post"
          type="text"
          id="postDesc"
          value={props.postDesc}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
};

export default PostDesc;
