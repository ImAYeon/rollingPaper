import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaper, load } from "../../app/paper";
import { requestGetGift } from "../../app/paper";
import { fourth } from "../../app/page";
import AuthRouter from "../AuthRouter";

const PapersList = ({ setIsSelect }) => {
  const dispatch = useDispatch();
  const papers = useSelector((state) => state.paper.paper);
  const me = useSelector((state) => state.user.me);
  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return (
    <>
      <AuthRouter />
      <div className="container">
        <div className="row text-center">
          <h1>{me.name}님에게 온 Rollin</h1>
          <div className="row row-cols-5">
            {papers?.map((paper, index) => (
              <figure
                key={index}
                id={paper.nickname}
                className="figure col"
                onClick={(e) => {
                  // alert(`${e.currentTarget.id}님이 보낸 Rollin으로 이동`);
                  dispatch(selectPaper({ id: paper.id, userId: paper.userId, content: paper.content, nickName: paper.nickname, giftId: paper.giftId }));
                  dispatch(requestGetGift({ giftId: paper.giftId }));
                  setIsSelect(true);
                }}
              >
                <figcaption className="figure-caption">from {paper.nickname}</figcaption>
                <img className="img-thumbnail col" alt={paper.nickname} title={paper.nickname} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PapersList;
