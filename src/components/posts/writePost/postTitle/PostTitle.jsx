const PostTitle = (props) => {
  return (
    <>
      <div className="grid grid-cols-[20%_80%] gap-x-2 pt-4 pl-6 pb-2 pr-6">
        <span className="text-blue-500">Post title:</span>
        <input
          className="bg-transparent outline-none text-slate-800  placeholder:text-gray-300"
          placeholder="Post your title"
          type="text"
          id="postTitle"
          value={props.postTitle}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
};
export default PostTitle;
