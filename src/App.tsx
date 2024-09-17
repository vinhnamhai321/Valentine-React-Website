"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hông",
      "Chắc chưa?",
      "Đồng ý đi mà?",
      "Please!!!!!",
      "Hứa ngoan mà, ấn yes đi",
      "Chở đi ăn mỗi ngày nè, đồng ý đi",
      "Hằng tuần chở đi skincare được hông",
      "You are my sunshine <3",
      "Meowwww",
      "Gâuuuuuu",
      "Quạcccc",
      "Đi mừ, I love you",
      "Từ chối làm chó",
      "Từ chối làm mèo",
      "Ấn yes để được 10đ tất cả các môn",
      "Đi mà :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">I love you 3000 !! Tui sẽ lãng mạn hơn, tin tưởng Trúc, và iu thương Trúc nhiều nhiều nè  ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Làm bạn gái tui nha?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
