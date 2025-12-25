
// array of quotes
const Quotes=["I will rewrite everything with my fucking EGO ",
    "Direct yourself from pain to purpose",
    "You were born to face storm, stop acting like rain hurts you",
    "You are getting comfortable, Comfortablity kills Dream",
    "The same boiling water makes potato soft and egg hard, don’t let your environment dictate you",
    "Dreams don't die. people kill them with fear and laziness",
    "One day, you'll realise that you dream died because you choose comfort over effort.Don't let this regret haunt you forever",
    "Stay away from negative people. They have problem to every solution",
    "Make sur your routine is building your future not just maintaining your past",
    "A 1% growth each day leads to 37x growth a year",
    "Every Day you'll have two choices.Continue to sleep or Wake up and Chase them",
    "One Moment, One Chance. Appreciate moments before they disappear",
    "Mind can be your best friend when displined or your worst enemy",
    "Push yourself because no one else is going to do it for you.",
    "The only person you should try to be better than, is the person you were yesterday.",
    "It is fatal to enter a war without the will to win it.",
    "History is written by the victors. I am picking up the pen.",
    "Do not pray for an easy life; pray for the strength to endure a difficult one.",
    "Your comfort zone is a beautifully decorated coffin. Step out before you're buried in it."
]
// we have to listen button
// we need to select button and h1 to listen and change it.
// can use query selecter as there is one button only or can use getelementbyid too

    const button= document.querySelector('button');
    const h1= document.querySelector('h1');
    button.addEventListener('click',()=>{
        // choosing an index
        const index = Math.floor(Math.random()*19); // to get random index from 0 to 19
        h1.textContent= Quotes[index];
    })









