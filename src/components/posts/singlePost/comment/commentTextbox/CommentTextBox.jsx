const CommentTextBox = ({ handleComment, handleChange, comment }) => {
  console.log(comment);
  return (
    <>
      <form className="textboxContainer" onSubmit={handleComment}>
        <textarea
          className="border-b-[2px] border-blue-800"
          id="desc"
          value={comment}
          type="text"
          placeholder="write your thoughts about this blog post and share with other readers!"
          onChange={handleChange}
        />
        <span className="bg-blue-400  rounded-md p-2 hover:bg-blue-300 relative shadow-lg cursor-pointer">
          Submit
        </span>
      </form>
    </>
  );
};

export default CommentTextBox;
