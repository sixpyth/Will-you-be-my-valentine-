import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import { style } from "framer-motion/client";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Нет",
      "Точно точно??",
      "Really-really-really??",
      "бля, может не надо?",
      "По хорошему!!",
      "Точно нет??",
      "Так, давай останавливайся!",
      "Даю ещё одну попытку!",
      "Я не шучу!!!!!!",
      "Ты делаешь серьезную ошибку!",
      "Имей совесть дурашка!!",
      "А ну-ка!",
      "Ты что? совсем?",
      "Может передумаешь??",
      "Привет) одна тут?))",
      "Ты, кажется, ошиблась кнопкой",
      "Так ведь??",
      "Так ведь, да?",
      "ОСТАНОВИСЬ, Я ЗНАЮ, ЧТО У ТЕБЯ РОДИНКА НА ПОПЕ",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <img style={{width:"180px",height:"220px",marginBottom:"-90px"}} src="https://preview.redd.it/the-rose-mouth-phenomenon-v0-nc7y3avj21sc1.png?width=640&crop=smart&auto=webp&s=4269b206613eba7f517942ab923fd459e6d65456" alt="" />
     {noCount>=6 && (<img style={{width:"180px", height:"160px"}} src="https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-g4h9-p-kartinki-plachushchii-smail-na-prozrachnom-10.png" alt="" />)}
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            ДА НУ НАХУУУУУУУЙЙЙЙЙЙ!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Радость моя, ты будешь моей валентинкой?
            
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Да 
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Нет" : getNoButtonText()}
              {/* {noCount >= 3 && <p className="text-xl">Мне уже больно...</p>} */}

{/* {noCount >= 6 && (
  <img
    style={{ width: "180px" }}
    src="https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-g4h9-p-kartinki-plachushchii-smail-na-prozrachnom-10.png"
  />
)} */}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
