const PostDesc = ({ handleChange, postDesc }) => {
  return (
    <>
      <div className="descPost">Post Description</div>
      <input
        type="text"
        id='postDesc'
        value={postDesc}
        placeholder="share your thoughts"
        className="descInput"
        onChange={handleChange}
      />
    </>
  );
};

export default PostDesc;
