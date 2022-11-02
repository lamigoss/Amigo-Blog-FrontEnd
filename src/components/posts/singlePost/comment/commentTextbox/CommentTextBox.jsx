import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../authContext/authContext";

const CommentTextBox = ({ handleComment, handleChange, comment }) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="grid grid-rows-1">
      <form className="" onSubmit={handleComment}>
        <textarea
          className="border-b-[.5px] border-blue-800 bg-transparent resize-none p-3 w-full placeholder:mobile:text-xs placeholder:laptop:text-sm"
          id="desc"
          value={comment}
          type="text"
          placeholder={
            context.isLoggedIn
              ? `write your thoughts about this blog post and share with other readers!`
              : `please login in to submit comment`
          }
          onChange={handleChange}
        />
        <div className="grid">
          {context.isLoggedIn && (
            <button
              className="justify-self-end px-6 p-1 text-white transition duration-300 rounded-md hover:from-indigo-500 hover:to-blue-500 ease bg-gradient-to-br from-blue-400 to-indigo-400 mt-2 shadow-lg tablet:text-sm laptop:text-sm mobile:text-sm"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommentTextBox;
