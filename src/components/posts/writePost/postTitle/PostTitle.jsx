const PostTitle = ({ setTitle }) => {
  return (
    <>
      <div className="titlePost">Post title</div>
      <input
        type="text"
        placeholder="Post title"
        className="titleInput"
          onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};
export default PostTitle;
