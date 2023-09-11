import { useState } from 'react';
export default function POC() {
    const [card, setCard] = useState({
        question: "Question de la carte",
        answer: "Réponse de la carte",
        stepNumber:1,
    });

    const [isQuestionView, setIsQuestionView] = useState(true);

    return (
        <>
            <div className="text-center">
                <h1>Leitner Flashcards</h1>
                <h2>Proof of Concept</h2>

                <div className="mt-10 border-2 border-gray-500 p-5">
                    {
                        isQuestionView ? (
                            <>
                                <h3>Question</h3>
                                <p>{card.question}</p>  
                            </>
                        ) : (
                            <>
                                <h3>Réponse</h3>
                                <p>{card.answer}</p>
                            </>
                        )
                    }
                    <button onClick={ () => setIsQuestionView(!isQuestionView) } className='bg-blue-500 text-white p-1 rounded-sm'>Retourner la carte</button>
                </div>
            </div>
        </> 
    )
}