import { useEffect, useState } from 'react';
import axios from 'axios';
export default function POC() {
    const [card, setCard] = useState({
        question: "Question de la carte",
        answer: "Réponse de la carte",
        stepNumber:1,
    });

    const [isQuestionView, setIsQuestionView] = useState(true);
    const [test, setTest] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3000/')
            .then(res => { setTest(res.data) })
    })

    return (
        <>
            <div className="text-center h-[100vh]">
                <div className="border-2 border-gray-500 h-full">
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
                    <p>{test}</p>
                    <button onClick={ () => setIsQuestionView(!isQuestionView) } className='bg-blue-500 text-white p-1 rounded-sm'>Retourner la carte</button>
                    <div className='flex absolute bottom-0'>
                        <button className='bg-red-500 text-white p-3 w-[50vw]'>Raté</button>
                        <button className='bg-green-500 text-white p-3 w-[50vw]'>Réussi</button>
                    </div>
                </div>
            </div>
        </> 
    )
}