const PostDesc = (props) => {
  return (
    <>
      <div className="descPost">Post Description</div>
      <input
        type="text"
        id='postDesc'
        value={props.postDesc}
        placeholder="share your thoughts"
        className="descInput"
        onChange={props.handleChange}
      />
    </>
  );
};

export default PostDesc;
