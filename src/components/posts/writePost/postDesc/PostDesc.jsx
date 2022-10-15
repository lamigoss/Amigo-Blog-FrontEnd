const PostDesc = ({setDesc}) => {
    return (
        <>
         <div className="descPost">Post Description</div>
          <input
            type="text"
            placeholder="share your thoughts"
            className="descInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        </>
    )
}

export default PostDesc