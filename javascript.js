var quotes=[
"It\`s not about perfect. It\`s about effort. - Jillian Michaels",
"Excellence is not a skill. It is an attitude. - Ralph Marston",
"Focus on your goal. Don\`t look in any direction but ahead. - Unknown",
"You don\`t get what you wish for. You get what you work for.- Daniel Milstein",
"Do something now; your future self will thank you for later. - Unknown",
"Don\`t try to be perfect. Just try to be better than you were yesterday. - Unknown",
"Keep going. Everything you need will come to you at the perfect time. - Unknown",
"Even the greatest were beginners. Don\`t be afraid to take that first step. - Unknown",
"Everything you\`ve ever wanted is on the other side of fear. - George Addair",
"Your time is limited, so don\`t waste it living someone else\`s life. - Steve Jobs",
"You can\`t use up creativity. The more you use, the more you have. - Maya Angelou",
"The best way to gain self-confidence is to do what you are afraid to do. - Swati Sharma",
"If you hear a voice within you say \`you cannot paint,\` then by all means paint, and that voice will be silenced. - Vincent Van Gogh",
"Courage doesn\`t always roar. Sometimes courage is the quiet voice at the end of the day saying \`I will try again tomorrow\`. - Mary Anne Radmacher"
]
function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById(`quoteDisplay`).innerHTML=quotes[randomNumber];
}
