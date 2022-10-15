const PostTitle = ({ handleChange, postTitle }) => {
  return (
    <>
      <div className="titlePost">Post title</div>
      <input
        type="text"
        id='postTitle'
        value={postTitle}
        placeholder="Post title"
        className="titleInput"
          onChange={handleChange}
      />
    </>
  );
};
export default PostTitle;
