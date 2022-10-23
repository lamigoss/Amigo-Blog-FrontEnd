const PostTitle = (props) => {
  return (
    <>
      <div className="titlePost">Post title</div>
      <input
        type="text"
        id="postTitle"
        value={props.postTitle}
        placeholder="Post title"
        className="titleInput"
        onChange={props.handleChange}
      />
    </>
  );
};
export default PostTitle;
