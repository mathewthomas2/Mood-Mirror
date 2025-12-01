function currentMood(mood){
    const body = document.body

    const colors ={
        'happy': '#FFF9B0',
        'sad': '#ADD8E6',
        'angry': '#FFA07A',
        'tired': '#E0E0E0',
        'excited': '#D8B4FE'
    }
    
    body.style.backgroundColor = colors[mood];

    const div = document.querySelector('.quote')
    const moodTitle = document.getElementById('moodTitle')
    const moodQuote = document.getElementById('moodQuote')

    div.style.display = "block";

    if (mood == 'happy'){
        moodTitle.textContent = "Happy";
        moodQuote.textContent = "Keep smiling, it makes people wonder what you're up to"
    }
    else if (mood == 'sad'){
        moodTitle.textContent = "Sad";
        moodQuote.textContent = "It's okay to feel not okay";
    }
    else if (mood == 'angry'){
        moodTitle.textContent = "Angry";
        moodQuote.textContent = "Take a deep breath and let it go";

    }
    else if (mood == 'tired'){
        moodTitle.textContent = "Tired";
        moodQuote.textContent = "Rest if you must, but don’t quit";

    }
    else{
        moodTitle.textContent = "Excited";
        moodQuote.textContent = "Let your excitement be louder than your fears";
    }
    
}