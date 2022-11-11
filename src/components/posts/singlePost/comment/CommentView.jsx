import React from "react";
import deleting from "../../../../img/delete.png";

const CommentView = ({ comment, handleDelete }) => {
  const date = new Date(comment.updatedAt);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="">
      <div className="commentDetails">
        <div className="grid">
          <div className="grid grid-cols-2">
            <span className="break-all w-full pb-3 pt-3 text-indigo-300 tablet:text-xs laptop:text-sm mobile:text-xs">
              {comment.username}
            </span>
            <span className="text-sm justify-self-end pb-3 pt-3 tablet:text-xs mobile:text-xs">
              {formattedDate}
            </span>
          </div>
          <div className="grid grid-cols-[70%_30%]">
            {!comment.desc ? (
              <span className="pb-3 pt-3 tablet:text-xs laptop:text-sm mobile:text-xs">
                {comment.desc}
              </span>
            ) : (
              <span className="pb-3 tablet:text-xs laptop:text-sm mobile:text-xs">
                {comment.desc}
              </span>
            )}
            <img
              src={deleting}
              onClick={handleDelete}
              className="justify-self-end w-6 cursor-pointer"
              id={comment._id}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentView;
