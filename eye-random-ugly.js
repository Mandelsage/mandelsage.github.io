function genTokenData(r){let e={};let a="0x";for(var t=0;t<64;t++){a+=Math.floor(Math.random()*16).toString(16)}e.hash=a;e.t=(r*1e6+Math.floor(Math.random()*1e3)).toString();return e}let tokenData=genTokenData(424);let hash=tokenData.hash;class Random{constructor(){this.i=false;let r=function(r){let e=parseInt(r.substring(0,8),16);let a=parseInt(r.substring(8,16),16);let t=parseInt(r.substring(16,24),16);let i=parseInt(r.substring(24,32),16);return function(){e|=0;a|=0;t|=0;i|=0;let r=(e+a|0)+i|0;i=i+1|0;e=a^a>>>9;a=t+(t<<3)|0;t=t<<21|t>>>11;t=t+r|0;return(r>>>0)/4294967296}};this.o=new r(hash.substring(2,34));this.l=new r(hash.substring(34,66));for(let r=0;r<1e6;r+=2){this.o();this.l()}}_(){this.i=!this.i;return this.i?this.o():this.l()}h(r,e){return r+(e-r)*this._()}g(r,e){return Math.floor(this.h(r,e+1))}m(r){return this._()<r}u(r){return r[this.g(0,r.length-1)]}}let R=new Random;let currentDate=new Date;let targetDate=new Date("April 22, 2023 10:00:00");let diffInMinutes=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*60));let diffInHalfMins=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*30));let setPastDate=new Date("2021-05-01");let daysDiff=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*3600*24));let twoursDiff=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*3600*12));let IRSPCenterX,IRSPCenterY;let shSide;let width=window.innerWidth;let height=window.innerHeight;let M=Math.min(width,height)/650;let MM=(width*2+height*2)/2300;let blind=false;let displayDiv;let blink=0;let bg0FontSize;let hues=[];let satbri=[];let bg0Freq=[];let whiteFreq=[];let irisFreq=[];let iris_randomF_array=[];let bg0_randF_array=[];let bg0_Col_randF_array=[];let white_randF_array=[];let bg0_random_array=[];let bgA_random_array=[];let iris_random_array=[];let bg0Sizes_random_array=[];let bg0Col1_randomHues_array=[];let bg0Col2_randomHues_array=[];let bg0Col1_randomSats_array=[];let bg0Col2_randomSats_array=[];let bg0Col1_randomBrights_array=[];let bg0Col2_randomBrights_array=[];let Iris1_randomHues_array=[];let Iris1_randomSats_array;let Iris1_randomBrights_array;let Iris2_randomHues_array=[];let Iris2_randomSats_array=[];let Iris2_randomBrights_array=[];let Eyelid_random_array=[];let white_random_array=[];let spots_random_array=[];let pupil_random_array=[];let topT_random_array=[];let botLT_random_array=[];let botRT_random_array=[];let hueDif;let bg0ChFrQ;let irisChFrQ;let bg0ColChFrQ;let whiteChFreq;let currentMinute;let sides=0;let twitterChars;let allThemedChars;let tarotVars;let topTarotCard;let bottomLeftTarotCard;let bottomRightTarotCard;let glitchTextures;let bgTextures;let bg0Sizes;let specialChars_bgA;let specialChars_White;let specialChars_Iris;let specialChars_Pupil;let specialChars_eyeLid;let specialChars_bg0;let specialChars_Spots;let bg0Dark,bgoLight,colBgA,colWhite,colIris1,colIris2,colIris3,colSpots,colPupil;let numberOfbg0ColChanges;let bg0ColChangeDays=[];let myFrameCount=0;function setup(){createCanvas(width,height);frameRate(60);displayDiv=createDiv();currentMinute=minute();let r=R.g(0,100);if(r<4){blind=true}colorMode(HSB,360,100,100,100);shSide=Math.min(width,height);IRSPCenterX=width/2;IRSPCenterY=height/2;let e=R.h(0,100);if(e<2){sides=3}else if(e<8){sides=4}else{sides=R.g(5,13)}charVarRandomiser();background(bg0Dark);colBgA=color(42,0,100,70);colWhite=color(42,0,100);colPupil=color(42,0,0)}function charVarRandomiser(){ // Special Variables -:
  tarotVars = ["⚽\ufe0e","🤝\ufe0e","👎\ufe0e","🖖\ufe0e","👍\ufe0e","💦\ufe0e","💋\ufe0e","🔑\ufe0e","\u2615\uFE0E","⛓","☯","☮","𝒫","Ω","⌨","⌛\ufe0e","⚠","☠","❀","♻","⚐","⚑","☑","☤","⚕","⚛","⚗","⚖","⚙","⚒","⌨","☄","♫","🎭\ufe0e","🖌\ufe0e","🖋\ufe0e","⛏","⚓\ufe0e","🕮","⚔","✈","⛈","✔","✗","❆","★","☉","☾","☄","🌣","⛆","ϟ","☁","☿","♀","♁","♂","♃","♄","♅","♆","♇","$","∞","π","♔","♕","♖","♗","♘","♙","♠","♦","♥","♣","♡","⛓","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","䷀","䷁","䷂","䷃","䷄","䷅","䷆","䷇","䷈","䷉","䷊","䷋","䷌","䷍","䷎","䷏","䷐","䷑","䷒","䷓","䷔","䷕","䷖","䷗","䷘","䷙","䷚","䷛","䷜","䷝","䷞","䷟","䷠","䷡","䷢","䷣","䷤","䷥","䷦","䷧","䷨","䷩","䷪","䷫","䷬","䷭","䷮","䷯","䷰","䷱","䷲","䷳","䷴","䷵","䷶","䷷","䷸","䷹","䷺","䷻","䷼","䷽","䷾","䷿"];
  
  let xChars = ["X","X"];
  let binaryChars = ["1","0"];
  let decimalChars = ["0","1","2","3","4","5","6","7","8","9"];
  let alphabetChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let musicChars = ["𝄋","𝄞","𝄢","♩","♪","♫","♬","♭","♮","♯","𝅘𝅥𝅮","𝅘𝅥𝅰","𝅘𝅥𝅱","𝅘𝅥𝅲"];
  let voteChars = ["☐","☑","☒"];
  let heartChars = ["♡","♥"];
  let arrowChars = ["⇩","⇧","⬂","⇨","⬀","⬃","⇦","⬁","⮕","⬅","⬆","⬇","⬈","⬉","⬊","⬋"];
  let snowChars = ["❅","❆","❉","❊"];
  let starChars = ["☆","⚝","✸","✫","✯","★","✴","✹"];
  let skyChars = ["⦿","☉","☽","☾","❍","☄","★","✈"];
  let weatherChars = ["❆","🌣","⛆","ϟ","℃","℉","☈","☁","⛈"];
  let planetChars = ["☿","♀","♁","♂","♃","♄","♅","♆","♇"];
  let asteroidChars = ["⚵","⚶","⚴","⚳","⚷","⚸","⚘","⚕"];
  let moneyChars = ["£","$","€","¥","₱","₪","₩","﷼","₴"];
  let mathChars = ["∞","π","Σ","√","△","φ","÷","+","x","−","𝒫"];
  let suitChars = ["♡","♢","♤","♧","♠","♦","♥","♣"];
  let chessChars = ["♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟"];
  let cardsChars = ["🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾","🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮","🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎","🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞","🂠","🃟","🂿"];
  let dominoChars = ["🁣","🁤","🁥","🁦","🁧","🁨","🁩","🁪","🁫","🁬","🁭","🁮","🁯","🁰","🁱","🁲","🁳","🁴","🁵","🁶","🁷","🁸","🁹","🁺","🁻","🁼","🁽","🁾","🁿","🂀","🂁","🂂","🂃","🂄","🂅","🂆","🂇","🂈","🂉","🂊","🂋","🂌","🂍","🂎","🂏","🂐","🂑","🂒","🂓","🁢","🀱","🀲","🀳","🀴","🀵","🀶","🀷","🀸","🀹","🀺","🀻","🀼","🀽","🀾","🀿","🁀","🁁","🁂","🁃","🁄","🁅","🁆","🁇","🁈","🁉","🁊","🁋","🁌","🁍","🁎","🁏","🁐","🁑","🁒","🁓","🁔","🁕","🁖","🁗","🁘","🁙","🁚","🁛","🁜","🁝","🁞","🁟","🁠","🁡","🀰"];
  let cryptoChars = ["⛓","₿","Ł","Ð","Ξ","₳","ꜩ"];
  twitterChars = ["#","@","&","ᵍᵐ","⁴²⁰","⁶⁹","ᴼᴳ","ⁿᵍᵐᶦ","ʷᵃᵍᵐᶦ","🙭","ʷᵉⁿ","ᵐᵒᵒⁿ","ᵈʸᵒʳ"];
  let tetragramChars = ["𝌆","𝌇","𝌈","𝌉","𝌊","𝌋","𝌌","𝌍","𝌎","𝌏","𝌐","𝌑","𝌒","𝌓","𝌔","𝌕","𝌖","𝌗","𝌘","𝌙","𝌚","𝌛","𝌜","𝌝","𝌞","𝌟","𝌠","𝌡","𝌢","𝌣","𝌤","𝌥","𝌦","𝌧","𝌨","𝌩","𝌪","𝌫","𝌬","𝌭","𝌮","𝌯","𝌰","𝌱","𝌲","𝌳","𝌴","𝌵","𝌶","𝌷","𝌸","𝌹","𝌺","𝌻","𝌼","𝌽","𝌾","𝌿","𝍀","𝍁","𝍂","𝍃","𝍄","𝍅","𝍆","𝍇","𝍈","𝍉","𝍊","𝍋","𝍌","𝍍","𝍎","𝍏","𝍐","𝍑","𝍒","𝍓","𝍔","𝍕","𝍖"];
  let newageChars = ["☯","☮","✾","❀","✿","❁","☥","🕈"];
  let dangerChars = ["✇","☢","☣","☠","⚠"];
  let religionChars = ["✝","☪","✡","☥","⛤","⛧","☸"];
  let studiesChars = ["☤","⚕","⚛","⚗","⚖","⚙","⚒","𝒫","Ω","⌨","☄","♫","🖌\ufe0e","🖋\ufe0e","🎭\ufe0e","⛏","🕮","⚔","✈","⚓\ufe0e"];
  let runeChars = ["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"];
  let timeChars = ["⌛\ufe0e","⌛\ufe0e"];
  let diceChars = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  let gendRelChars = ["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"];
  let brailleChars = ["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"];

  allThemedChars = [xChars,binaryChars,heartChars,snowChars,twitterChars,moneyChars,tetragramChars,suitChars,starChars,cryptoChars,arrowChars,mathChars,chessChars,skyChars,decimalChars,alphabetChars,musicChars,planetChars,weatherChars,newageChars,dangerChars,religionChars,studiesChars,cardsChars,dominoChars,runeChars,timeChars,diceChars,gendRelChars,brailleChars,voteChars, asteroidChars];

  glitchTextures = [["|","|"],["❙","❙"],["𝆄","𝆄"],["|","❙","𝆄"],["--","==","__","☰"],["\\\\","\\\\"],["//","//"],["𝆲","𝆲"],["𝆱","𝆱"],["--","--"],["==","=="],["――","――"],["☰","☰"],["\\\\","//"],["𝆲","𝆱"],["𝆲","𝆱","\\\\","//"],["|","\\\\","//","--","==","――","❙","☰","𝆲","𝆱","𝆄"],["←","→"],["↑","↓"],["←","→","↑","↓"],["↖","↗","↘","↙"],["←","→","↑","↓","↖","↗","↘","↙"]];

  bgTextures = [["𝍖","𝍖"],["ᛰ","ᛰ"],["§","§"],["✴","✴"],["☆","☆"],["❅","❅"],["#","#"],["░","░"],["▤","▤"],["▥","▥"],["✖","◯"],["⌘","⌘"],["÷","+","x","−"],["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン"],["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"],["⚀","⚁","⚂","⚃","⚄","⚅"],["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"],["※","※"],["♠","♦","♥","♣"],["♚","♥","♛"],["☆","⚝","★"],["▇","▇"],["▓","▓"],["▒","▒"],["☁","☁"],["▦","▦"],["▩","▩"],["✦","✦","✦","✖"],["✿","✿"],["☯","☯"],["■","●","▼","▲","◆"],["▚","▞","▝","▘","▗","▖"],["▌","▐","▌","▎","▏","▕","▐"],["⛓","⛓"],["✓","✔","✗","✘"],["⁂","⁂"],["─","━","│","┃","┄","┅","┆","┇","┈","┉","┊","┋","┌","┍","┎","┏","┐","┑","┒","┓","└","┕","┖","┗","┘","┙","┚","┛","├","┝","┞","┟","┠","┡","┢","┣","┤","┥","┦","┧","┨","┩","┪","┫","┬","┭","┮","┯","┰","┱","┲","┳","┴","┵","┶","┷","┸","┹","┺","┻","┼","┽","┾","┿","╀","╁","╂","╃","╄","╅","╆","╇","╈","╉","╊","╋","╌","╍","╎","╏","═","║","╒","╓","╔","╕","╖","╗","╘","╙","╚","╛","╜","╝","╞","╟","╠","╡","╢","╣","╤","╥","╦","╧","╨","╩","╪","╫","╬","╭","╮","╯","╰","╱","╲","╳","╴","╵","╶","╷","╸","╹","╺","╻","╼","╽","╾","╿"],["?!","¡¿","¡","¿","?","!","‽","⸘"],["|","|"],["❙","❙"],["𝆄","𝆄"],["|","❙","𝆄"],["--","==","__","☰"],["\\\\","\\\\"],["//","//"],["𝆲","𝆲"],["𝆱","𝆱"],["--","--"],["==","=="],["――","――"],["☰","☰"],["\\\\","//"],["𝆲","𝆱"],["𝆲","𝆱","\\\\","//"],["|","\\\\","//","--","==","――","❙","☰","𝆲","𝆱","𝆄"],["←","→"],["↑","↓"],["←","→","↑","↓"],["↖","↗","↘","↙"],["←","→","↑","↓","↖","↗","↘","↙"],["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"],["X","X"],["1","0"],["0","1","2","3","4","5","6","7","8","9"],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],["𝄋","𝄞","𝄢","♩","♪","♫","♬","♭","♮","♯","𝅘𝅥𝅮","𝅘𝅥𝅰","𝅘𝅥𝅱","𝅘𝅥𝅲"],["☐","☑","☒"],["♡","♥"],["⇩","⇧","⬂","⇨","⬀","⬃","⇦","⬁","⮕","⬅","⬆","⬇","⬈","⬉","⬊","⬋"],["❅","❆","❉","❊"],["☆","⚝","✸","✫","✯","★","✴","✹"],["⦿","☉","☽","☾","❍","☄","★","✈"],["❆","🌣","⛆","ϟ","℃","℉","☈","☁","⛈"],["☿","♀","♁","♂","♃","♄","♅","♆","♇"],["⚵","⚶","⚴","⚳","⚷","⚸","⚘","⚕"],["£","$","€","¥","₱","₪","₩","﷼","₴"],["∞","π","Σ","√","△","φ","÷","+","x","−","𝒫"],["♡","♢","♤","♧","♠","♦","♥","♣"],["♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟"],["🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾","🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮","🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎","🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞","🂠","🃟","🂿"],["🁣","🁤","🁥","🁦","🁧","🁨","🁩","🁪","🁫","🁬","🁭","🁮","🁯","🁰","🁱","🁲","🁳","🁴","🁵","🁶","🁷","🁸","🁹","🁺","🁻","🁼","🁽","🁾","🁿","🂀","🂁","🂂","🂃","🂄","🂅","🂆","🂇","🂈","🂉","🂊","🂋","🂌","🂍","🂎","🂏","🂐","🂑","🂒","🂓","🁢","🀱","🀲","🀳","🀴","🀵","🀶","🀷","🀸","🀹","🀺","🀻","🀼","🀽","🀾","🀿","🁀","🁁","🁂","🁃","🁄","🁅","🁆","🁇","🁈","🁉","🁊","🁋","🁌","🁍","🁎","🁏","🁐","🁑","🁒","🁓","🁔","🁕","🁖","🁗","🁘","🁙","🁚","🁛","🁜","🁝","🁞","🁟","🁠","🁡","🀰"],["⛓","₿","Ł","Ð","Ξ","₳","ꜩ"],["#","@","&","ᵍᵐ","⁴²⁰","⁶⁹","ᴼᴳ","ⁿᵍᵐᶦ","ʷᵃᵍᵐᶦ","🙭","ʷᵉⁿ","ᵐᵒᵒⁿ","ᵈʸᵒʳ"],["𝌆","𝌇","𝌈","𝌉","𝌊","𝌋","𝌌","𝌍","𝌎","𝌏","𝌐","𝌑","𝌒","𝌓","𝌔","𝌕","𝌖","𝌗","𝌘","𝌙","𝌚","𝌛","𝌜","𝌝","𝌞","𝌟","𝌠","𝌡","𝌢","𝌣","𝌤","𝌥","𝌦","𝌧","𝌨","𝌩","𝌪","𝌫","𝌬","𝌭","𝌮","𝌯","𝌰","𝌱","𝌲","𝌳","𝌴","𝌵","𝌶","𝌷","𝌸","𝌹","𝌺","𝌻","𝌼","𝌽","𝌾","𝌿","𝍀","𝍁","𝍂","𝍃","𝍄","𝍅","𝍆","𝍇","𝍈","𝍉","𝍊","𝍋","𝍌","𝍍","𝍎","𝍏","𝍐","𝍑","𝍒","𝍓","𝍔","𝍕","𝍖"],["☯","☮","✾","❀","✿","❁","☥","🕈"],["✇","☢","☣","☠","⚠"],["✝","☪","✡","☥","⛤","⛧","☸"],["☤","⚕","⚛","⚗","⚖","⚙","🔑\ufe0e","⚒","𝒫","Ω","⌨","☄","♫","🖌\ufe0e","\u2615\uFE0E","🖋\ufe0e","🎭\ufe0e","⛏","🕮","⚔","✈","⚓\ufe0e","⚽\ufe0e"],["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"],["⌛\ufe0e","⌛\ufe0e"],["⚀","⚁","⚂","⚃","⚄","⚅"],["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"]];bg0Sizes=[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];bg0Freq=[2,3,4,5];whiteFreq=[9,10,11,12,13,14,15];for(let r=0;r<38;r++){irisFreq.push(r+37)}for(let r=1;r<361;r++){hues.push(r);if(r<101){satbri.push(r)}}for(let r=0;r<73;r++){let r=R.g(0,bg0Freq.length-1);bg0_randF_array.push(r);r=R.g(0,bg0Freq.length-1);bg0_Col_randF_array.push(r);r=R.g(0,whiteFreq.length-1);white_randF_array.push(r)}for(let r=0;r<433;r++){let r=R.g(0,irisFreq.length-1);iris_randomF_array.push(r)}let A=floor(daysDiff/127);if(A>=iris_randomF_array.length){A=A%iris_randomF_array.length}let H=iris_randomF_array[A];irisChFrQ=irisFreq[H];for(let r=0;r<2639;r++){let r=R.g(0,bgTextures.length-1);iris_random_array.push(r)}A=floor(daysDiff/irisChFrQ);if(A>=iris_random_array.length){A=A%iris_random_array.length}H=iris_random_array[A];specialChars_Iris=bgTextures[H];A=floor(daysDiff/11);if(A>=bg0_randF_array.length){A=A%bg0_randF_array.length}H=bg0_randF_array[A];bg0ChFrQ=bg0Freq[H];A=floor(daysDiff/11);if(A>=bg0_Col_randF_array.length){A=A%bg0_Col_randF_array.length}H=bg0_Col_randF_array[A];bg0ColChFrQ=bg0Freq[H];A=floor(daysDiff/73);if(A>=white_randF_array.length){A=A%white_randF_array.length}H=white_randF_array[A];whiteChFreq=whiteFreq[H];for(let r=0;r<4639;r++){let r=R.g(0,bgTextures.length-1);bg0_random_array.push(r)}A=floor(daysDiff/bg0ChFrQ);if(A>=bg0_random_array.length){A=A%bg0_random_array.length}H=bg0_random_array[A];specialChars_bg0=bgTextures[H];for(let r=0;r<1131;r++){let r=R.g(0,hues.length-1);bg0Col1_randomHues_array.push(r);r=R.g(49,satbri.length-14);bg0Col1_randomSats_array.push(r);r=R.g(4,satbri.length-82);bg0Col1_randomBrights_array.push(r);r=R.g(0,hues.length-1);bg0Col2_randomHues_array.push(r);r=R.g(49,satbri.length-6);bg0Col2_randomSats_array.push(r);r=R.g(49,satbri.length-6);bg0Col2_randomBrights_array.push(r)}A=floor(daysDiff/bg0ColChFrQ);if(A>=bg0Col1_randomHues_array.length){A=A%bg0Col1_randomHues_array.length}let k=bg0Col1_randomHues_array[A];let z=bg0Col1_randomSats_array[A];let B=bg0Col1_randomBrights_array[A];bg0Dark=color(hues[k],satbri[z],satbri[B]);k=bg0Col2_randomHues_array[A];z=bg0Col2_randomSats_array[A];B=bg0Col2_randomBrights_array[A];bgoLight=color(hues[k],satbri[z],satbri[B]);let q=R.g(0,hues.length-1);Iris1_randomSats_array=R.g(39,satbri.length-11);Iris1_randomBrights_array=R.g(4,satbri.length-74);for(let r=0;r<3600;r++){let r=R.g(2,5);q=q+5;if(q>359){q=q-(359-r)}Iris1_randomHues_array.push(q)}A=floor(daysDiff);if(A>=Iris1_randomHues_array.length){A=A%Iris1_randomHues_array.length}k=Iris1_randomHues_array[A];z=Iris1_randomSats_array;B=Iris1_randomBrights_array;colIris1=color(hues[k],satbri[z],satbri[B]);colSpots=color(hues[k],satbri[z+15],satbri[B+32]);let L=R.g(0,hues.length-1);Iris2_randomSats_array=R.g(39,satbri.length-22);Iris2_randomBrights_array=R.g(9,satbri.length-12);hueDif=R.u([-20,20]);for(let r=0;r<3600;r++){let r=R.g(2,5);L=L+3;if(L>359){L=L-(359-r)}Iris2_randomHues_array.push(L)}A=floor(daysDiff);if(A>=Iris2_randomHues_array.length){A=A%Iris2_randomHues_array.length}k=Iris2_randomHues_array[A];z=Iris2_randomSats_array;B=Iris2_randomBrights_array;colIris2=color(hues[k],satbri[z],satbri[B]);if(k+hueDif<0){k=k+hueDif+359}if(k+hueDif>359){k=k+hueDif-359}colIris3=color(hues[k+hueDif],satbri[z+11],satbri[B+31]);for(let r=0;r<539;r++){let r=R.g(0,bg0Sizes.length-1);bg0Sizes_random_array.push(r)}A=floor(daysDiff/bg0ChFrQ);if(A>=bg0Sizes_random_array.length){A=A%bg0Sizes_random_array.length}H=bg0Sizes_random_array[A];bg0FontSize=bg0Sizes[H];for(let r=0;r<539;r++){let r=R.g(0,bgTextures.length-32);Eyelid_random_array.push(r)}A=floor(daysDiff/23);if(A>=Eyelid_random_array.length){A=A%Eyelid_random_array.length}H=Eyelid_random_array[A];specialChars_eyeLid=bgTextures[H];for(let r=0;r<839;r++){let r=R.g(0,bgTextures.length-32);white_random_array.push(r)}A=floor(daysDiff/whiteChFreq);if(A>=white_random_array.length){A=A%white_random_array.length}H=white_random_array[A];specialChars_White=bgTextures[H];for(let r=0;r<1239;r++){let r=R.g(0,allThemedChars.length-1);spots_random_array.push(r)}A=floor(daysDiff/6);if(A>=spots_random_array.length){A=A%spots_random_array.length}H=spots_random_array[A];specialChars_Spots=allThemedChars[H];for(let r=0;r<420;r++){let r=R.g(0,bgTextures.length-32);pupil_random_array.push(r)}A=floor(daysDiff/3611);if(A>=pupil_random_array.length){A=A%pupil_random_array.length}H=pupil_random_array[A];specialChars_Pupil=bgTextures[H];for(let r=0;r<1639;r++){let r=R.g(0,bgTextures.length-1);bgA_random_array.push(r)}A=floor(twoursDiff);if(A>=bgA_random_array.length){A=A%bgA_random_array.length}H=bgA_random_array[A];specialChars_bgA=bgTextures[H];for(i=0;i<7643;i++){let r=R.g(0,tarotVars.length-1);topT_random_array.push(r)}for(i=0;i<2179;i++){let r=R.g(0,tarotVars.length-1);botLT_random_array.push(r)}for(i=0;i<907;i++){let r=R.g(0,tarotVars.length-1);botRT_random_array.push(r)}A=floor(daysDiff/2);if(A>=topT_random_array.length){A=A%topT_random_array.length}H=topT_random_array[A];topTarotCard=tarotVars[H];A=floor(daysDiff/7);if(A>=botLT_random_array.length){A=A%botLT_random_array.length}H=botLT_random_array[A];bottomLeftTarotCard=tarotVars[H];A=floor(daysDiff/17);if(A>=botRT_random_array.length){A=A%botRT_random_array.length}H=botRT_random_array[A];bottomRightTarotCard=tarotVars[H]}function draw(){myFrameCount++;if(myFrameCount%25===0){let r=random(0,100);let e=R.h(-1*(shSide/16.25),shSide/16.25+1);let a=R.h(-1*(shSide/65),shSide/65+1);if(!blind){if(r<33&&blink>5){IRSPCenterX=width/2+e;IRSPCenterY=height/2+a}else{IRSPCenterX=width/2;IRSPCenterY=height/2}}if(minute()!=currentMinute){currentMinute=minute();currentDate=new Date;daysDiff=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*3600*24));twoursDiff=Math.floor((currentDate.getTime()-targetDate.getTime())/(1e3*3600*12));let r=floor(daysDiff/11);if(r>=bg0_randF_array.length){r=r%bg0_randF_array.length}let e=bg0_randF_array[r];bg0ChFrQ=bg0Freq[e];r=floor(daysDiff/11);if(r>=bg0_Col_randF_array.length){r=r%bg0_Col_randF_array.length}e=bg0_Col_randF_array[r];bg0ColChFrQ=bg0Freq[e];r=floor(daysDiff/127);if(r>=iris_randomF_array.length){r=r%iris_randomF_array.length}e=iris_randomF_array[r];irisChFrQ=irisFreq[e];r=floor(daysDiff/irisChFrQ);if(r>=iris_random_array.length){r=r%iris_random_array.length}e=iris_random_array[r];specialChars_Iris=bgTextures[e];r=floor(daysDiff/73);if(r>=white_randF_array.length){r=r%white_randF_array.length}e=white_randF_array[r];whiteChFreq=whiteFreq[e];r=floor(daysDiff/bg0ChFrQ);if(r>=bg0_random_array.length){r=r%bg0_random_array.length}e=bg0_random_array[r];specialChars_bg0=bgTextures[e];r=floor(daysDiff/bg0ColChFrQ);if(r>=bg0Col1_randomHues_array.length){r=r%bg0Col1_randomHues_array.length}let a=bg0Col1_randomHues_array[r];let t=bg0Col1_randomSats_array[r];let i=bg0Col1_randomBrights_array[r];bg0Dark=color(hues[a],satbri[t],satbri[i]);a=bg0Col2_randomHues_array[r];t=bg0Col2_randomSats_array[r];i=bg0Col2_randomBrights_array[r];bgoLight=color(hues[a],satbri[t],satbri[i]);r=floor(daysDiff);if(r>=Iris2_randomHues_array.length){r=r%Iris2_randomHues_array.length}a=Iris2_randomHues_array[r];t=Iris2_randomSats_array;i=Iris2_randomBrights_array;colIris2=color(hues[a],satbri[t],satbri[i]);if(a+hueDif<0){a=a+hueDif+359}if(a+hueDif>359){a=a+hueDif-359}colIris3=color(hues[a+hueDif],satbri[t+11],satbri[i+31]);r=floor(daysDiff);if(r>=Iris1_randomHues_array.length){r=r%Iris1_randomHues_array.length}a=Iris1_randomHues_array[r];t=Iris1_randomSats_array;i=Iris1_randomBrights_array;colIris1=color(hues[a],satbri[t],satbri[i]);colSpots=color(hues[a],satbri[t+11],satbri[i+27]);r=floor(daysDiff/bg0ChFrQ);if(r>=bg0Sizes_random_array.length){r=r%bg0Sizes_random_array.length}e=bg0Sizes_random_array[r];bg0FontSize=bg0Sizes[e];r=floor(daysDiff/23);if(r>=Eyelid_random_array.length){r=r%Eyelid_random_array.length}e=Eyelid_random_array[r];specialChars_eyeLid=bgTextures[e];r=floor(daysDiff/whiteChFreq);if(r>=white_random_array.length){r=r%white_random_array.length}e=white_random_array[r];specialChars_White=bgTextures[e];r=floor(daysDiff/6);if(r>=spots_random_array.length){r=r%spots_random_array.length}e=spots_random_array[r];specialChars_Spots=allThemedChars[e];r=floor(daysDiff/361);if(r>=pupil_random_array.length){r=r%pupil_random_array.length}e=pupil_random_array[r];specialChars_Pupil=bgTextures[e];r=floor(twoursDiff);if(r>=bgA_random_array.length){r=r%bgA_random_array.length}e=bgA_random_array[r];specialChars_bgA=bgTextures[e];r=floor(daysDiff/2);if(r>=topT_random_array.length){r=r%topT_random_array.length}e=topT_random_array[r];topTarotCard=tarotVars[e];r=floor(daysDiff/7);if(r>=botLT_random_array.length){r=r%botLT_random_array.length}e=botLT_random_array[r];bottomLeftTarotCard=tarotVars[e];r=floor(daysDiff/17);if(r>=botRT_random_array.length){r=r%botRT_random_array.length}e=botRT_random_array[r];bottomRightTarotCard=tarotVars[e]}generateArt_bg0();generateArt_bgA();generateArt_Eye();generateArt_IrisBG();generateArt_IrisFG();generateArt_Spots();generateArt_Pupil();generateEyelid();tarotCards();if(myFrameCount==4800){myFrameCount=0}}}function generateArt_bg0(){textSize(bg0FontSize*MM);textFont("Courier");fill(bgoLight);for(let r=0;r<350;r++){let r=R.u(specialChars_bg0);text(r,random(0,width),random(0,height))}fill(bg0Dark);for(let r=0;r<6550;r++){bb0=R.u(specialChars_bg0);text(bb0,random(0,width),random(0,height))}}function generateArt_bgA(){textSize(17*MM);textFont("Courier");fill(colBgA);noStroke();let _=width/2;let n=height/1.99;let d=2.4*width/2;let f=2.5*height/2;let h=.4*width/2;let y=.5*height/2;let g=width/36.111111111111114;let b=floor((d-h)/g);let r=floor((f-y)/g);let m=_-b/2*g+g/2;let u=n-r/2*g+g/2;for(let s=0;s<b*r;s++){let r=m+s%b*g;let e=u+floor(s/b)*g;let a=R.u(specialChars_bgA);let t=dist(_,n,r,e);let i=map(t,h,d,0,1);let o=map(t,y,f,0,1);let l=(i+o)/3;if(random()<l){text(a,r,e)}}}function generateArt_Eye(){textSize(9*M);textFont("Courier");fill(0);noStroke();let _=width/2;let n=height/2;let d=shSide/3;let f=shSide/7.2;let e;if(glitchTextures.some(r=>JSON.stringify(r)===JSON.stringify(specialChars_White))){e=6450;textSize(13*M)}else{e=4350}for(let r=0;r<e;r++){let r=R.h(0,TWO_PI);let e=R.h(0,d);let a=R.h(0,f);let t=_+e*cos(r);let i=n+a*sin(r);let o=R.u(specialChars_White);let l=dist(_,n,t,i);let s;if(l<f/3){s=map(l,0,f/1,1,.6)}else if(l<f){s=map(l,f/3,f,.4,1)}else{s=0}if(t<_-d/2||t>_+d/2){s*=map(abs(t-_),d/2,d,.2,1)}if(R._()<s){fill(colWhite)}else{fill(colWhite)}text(o,t,i)}}function generateArt_IrisBG(){textSize(11*M);textFont("Courier");fill(190,170,0);noStroke();let e=0;let s=shSide/7;if(glitchTextures.some(r=>JSON.stringify(r)===JSON.stringify(specialChars_Iris))){e=11500;textSize(13*M)}else{e=7500}for(let r=0;r<e;r++){let r=R.h(0,TWO_PI);let e=R.h(0,s);let a=IRSPCenterX+e*sin(r);let t=IRSPCenterY+e*cos(r);let i=R.u(specialChars_Iris);let o=dist(IRSPCenterX,IRSPCenterY,a,t);let l;if(o<s/3){l=map(o,0,s/3,1,.2)}else if(o<s){l=map(o,s/3,s,.2,1)}else{l=0}if(R._()<l){fill(colIris1)}else{fill(colIris1)}text(i,a,t)}}function generateArt_IrisFG(){textSize(11*M);textFont("Courier");fill(190,170,0);noStroke();let s=shSide/8;let e;if(glitchTextures.some(r=>JSON.stringify(r)===JSON.stringify(specialChars_Iris))){e=3200;textSize(13*M)}else{e=1700}for(let r=0;r<e;r++){let r=R.h(0,TWO_PI);let e=R.h(0,s);let a=IRSPCenterX+e*sin(r);let t=IRSPCenterY+e*cos(r);let i=R.u(specialChars_Iris);let o=dist(IRSPCenterX,IRSPCenterY,a,t);let l;if(o<s/3){l=map(o,0,s/3,1,.2)}else if(o<s){l=map(o,s/3,s,.2,1)}else{l=0}if(R._()<l){fill(colIris2)}else{fill(colIris3)}text(i,a,t)}}function generateArt_Spots(){let r=17*M;textSize(r);textFont("Courier");fill(colSpots,190);noStroke();let o=shSide/8.5;let l;if(specialChars_Spots==twitterChars){l=-6;o=shSide/9.5}else{l=-4}for(let r=0;r<35;r++){let r=R.h(0,TWO_PI);let e=R.h(0,o);let a=IRSPCenterX+e*cos(r);let t=IRSPCenterY+e*sin(r);let i=R.u(specialChars_Spots);text(i,a+l,t+l);text(i,a+l+1,t+l+1)}}function generateArt_Pupil(){textSize(7*M);textFont("Courier");fill(colPupil);noStroke();let r=18;let e=3800;let a=R.h(0,100);let t=0;if(!blind){if(a<24&&blink>5){t=R.h(-3-M,3+M);r=r+t}else{if(sides<5){r=15.5}else{r=18}}}if(glitchTextures.some(r=>JSON.stringify(r)===JSON.stringify(specialChars_Pupil))){textSize(10*M)}if(blind){r=12}let i=shSide/r;let o=TWO_PI/sides;let l=-PI/2;let s=[];for(let a=0;a<sides;a++){let r=IRSPCenterX+i*cos(l+a*o);let e=IRSPCenterY+i*sin(l+a*o);s.push(createVector(r,e))}for(let r=0;r<e;r++){let r=generateRandomPointInsidePolygon(s);let e=R.u(specialChars_Pupil);text(e,r.x,r.y)}if(blind){fill(42,0,100,20);for(let r=0;r<e;r++){let r=generateRandomPointInsidePolygon(s);let e=R.u(specialChars_Pupil);text(e,r.x,r.y)}}}function generateRandomPointInsidePolygon(a){let t=shSide;let i=0;let o=shSide;let l=0;for(let e=0;e<a.length;e++){let r=a[e];if(r.x<t)t=r.x;if(r.x>i)i=r.x;if(r.y<o)o=r.y;if(r.y>l)l=r.y}let e=false;let s=1e3;let _;for(let r=0;r<s&&!e;r++){_=createVector(R.h(t,i),R.h(o,l));e=isPointInsidePolygon(_,a)}return _}function isPointInsidePolygon(i,o){let l=false;for(let a=0,t=o.length-1;a<o.length;t=a++){let r=o[a];let e=o[t];if(r.y>i.y!=e.y>i.y&&i.x<(e.x-r.x)*(i.y-r.y)/(e.y-r.y)+r.x){l=!l}}return l}function generateEyelid(){textSize(11*M);fill(bg0Dark);noStroke();textFont("Courier");let r=.2;let e=hour();switch(e){case 22:r=.1333;break;case 23:r=.0666;break;case 0:r=.005;break;case 1:r=.005;break;case 2:r=.005;break;case 3:r=.005;break;case 4:r=.0666;break;case 5:r=.1333;break;default:r=.2}let a=r;let f=width/2;let h=height/2;blink=R.h(0,100);if(blink<5){a=.005}else{a=r}let y=.69*shSide/2;let g=.35*shSide/2;let b=.69*shSide/2;let m=a*shSide/2;let u=(y-b)/2;let C=(g-m)/2;for(let r=0;r<1e4;r++){let r=R.h(0,TWO_PI);let e=R.h(b,y);let a=R.h(m,g);let t=f+e*cos(r);let i=h+a*sin(r);let o=R.u(specialChars_eyeLid);let l=floor((t-f)/u)+1;let s=floor((i-h)/C)+1;let _=map(abs(l),1,2,.2,1);let n=map(abs(s),1,2,.2,1);let d=(_+n)/2;if(R._()<d){text(o,t,i)}}}function tarotCards(){textSize(65*M);textFont("Courier");textAlign(CENTER,CENTER);fill(42,0,100,235);text(topTarotCard,width/2,height/6);text(bottomLeftTarotCard,width/5,height/1.25);text(bottomRightTarotCard,width/1.25,height/1.25)}