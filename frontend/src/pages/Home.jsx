import { useNavigate } from "react-router-dom";

export default function Home() {
  const boxItems = ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5", "Archives"];
  const navigate = useNavigate();

  return (
    <div className="h-[100vh]">
      <h1 className="text-center text-3xl mt-10">Leitner Flashcards</h1>
      <div className="grid grid-cols-3 gap-5 p-5 text-center mt-5">
        {boxItems.map((item, index) => (
          <div key={index} onClick={ () => navigate(`/box/${index+1}`)} >
            <p>{item}</p>
            <div className="p-10 border-2 rounded-sm"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

