const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

const mostRecentScore =localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
finalScore.innerText = mostRecentScore

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);


username.addEventListener('keyup', () => {
    console.log(username.value);
    
    saveScoreBtn.disabled = !username.value;
});

saveHighScores = e => {
    console.log('clicked the save button');
    e.preventDefault();
    
    const score= {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    console.log(highScores);
}


