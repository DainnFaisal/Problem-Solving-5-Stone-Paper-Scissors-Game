import React, { useState } from 'react';
import imageA from '../Assets/stone.jpg';
import imageB from '../Assets/paper.jpg';
import imageC from '../Assets/scissor.jpeg';
import '../StyleSheets/GameLogic.css';

const GameLogic = () => {

    const [playerChoice, setPlayerChoice] = useState('');

    const [computerChoice, setComputerChoice] = useState('');

    const [result, setResult] = useState('');

    const choices = ['Stone', 'Paper', 'Scissor'];

    
    const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice);
        
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex];
        
        setComputerChoice(computerChoice);

        if (choice === computerChoice) {
            setResult('It is a tie!');

        } else if (
            (choice === 'Stone' && computerChoice === 'Scissor') ||

            (choice === 'Paper' && computerChoice === 'Stone') ||

            (choice === 'Scissor' && computerChoice === 'Paper')
        ) 
        {
            setResult('Congragulations! You win!');
        } 
        else {
            setResult('Computer wins!');
        }
    };

    return (
        <>
            <br/>
            <h3 className='welcome-heading' >Welcome to Stone Paper Scissors Game:</h3>
            <h4 className='choice'>Please choose your tool:</h4>
            <br />
            
            <div className="container d-flex flex-row mb-3">
                <div className="p-2">
                    <img className='icons' src={imageA} alt='arrow' width="60%" />
                    <br />
                    <button className="btn-set" onClick={() => handlePlayerChoice('Stone')}>Stone</button>
                </div>

                <div className="p-2">
                    <img className='icons' src={imageB} alt='arrow' width="106%" />
                    <br />
                    <button className="btn-set" onClick={() => handlePlayerChoice('Paper')}>Paper</button>
                </div>

                <div className="p-2">
                    <img className='icons' src={imageC} alt='arrow' width="60%" />
                    <br />
                    <button className="btn-set" onClick={() => handlePlayerChoice('Scissor')}>Scissor</button>
                </div>
            </div>

            {result && <h1>Result: {result}</h1>}
            {computerChoice && <p className="computer-choose">Computer chose: {computerChoice}</p>}
        </>
    );
};

export default GameLogic;