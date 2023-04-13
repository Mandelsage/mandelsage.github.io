// Remember: Ask Quinn about storing variables in files on a server.

// Size variables:

let IRSPCenterX, IRSPCenterY;
let eyeWidthBase, eyeHeightBase;

// Misc. variables :

let blink = 0;

let freeSFont;
let SymbFont;

let bg0FontSize;

// Time keeper variables:

let currentDay;
let currentDayB;
let currentDayC;
let currentDayE;
let currentDayF;
let currentHour;
let currentMonth;
let currentYear;
let daysPassed = 0;
let bg0Period = 0;
let bg0ChangeDays = [];
let bg0setChangedToday;

let whiteDay1 = 11;
let whiteDay2 = 23;

let spotDay1 = 3;
let spotDay2 = 9;
let spotDay3 = 17;
let spotDay4 = 23;
let spotDay5 = 27;


let daysSinceIrisChanged = 0;
let daysToChangeIris;

//Pupil polygons:

let sides = 0;


// Character Variables used globally:

let twitterChars;
let studiesChars;
let timeChars;

let glitchHor1Chars;

let allThemedChars;
let allThemedChoice;

// Tarot Cards:

let tarotVars;
let topTarotCard;
let bottomLeftTarotCard;
let bottomRightTarotCard;

// Non-themed Char Vars:

let glitchTextures;
let glitchTexturesChoice;
let paintedTextures;
let paintedTextureChoice;
let fabricTextures;
let fabricTextureChoice;

// Layer Char Variables:

let specialChars_bgA;
let specialChars_White;
let specialChars_Iris;
let specialChars_Pupil;
let specialChars_eyeLid;
let specialChars_bg0;
let specialChars_Spots;
let bg0_set = [];

// Colour Vars:

let colBg01, colBg02, colBgA, colWhite, colIris1, colIris2, colIris3, colSpots, colPupil;
let colBg01Arr, colBg02Arr, colBgAArr, colWhiteArr, colIris1Arr, colIris2Arr, colIris3Arr, colSpotsArr, colPupilArr = [];
let numberOfbg0ColChanges;
let bg0ColChangeDays = [];

let myFrameCount = 0;

function preload() {
  //freeSFont = loadFont('http://localhost:8080/FreeSerif.ttf');
  //SymbFont = loadFont('http://localhost:8080/Symbola.ttf');
  freeSFont = loadFont('../FreeSerif.ttf');
  SymbFont = loadFont('../Symbola.ttf');
}


function setup() {
  createCanvas(650, 650);
  frameRate(60);

  currentDay = day(); 
  currentDayB = day();
  currentDayC = day();
  currentDayE = day();
  currentDayF = day();
  currentMonth = month();
  currentHour = hour();
  currentMinute = minute();
  currentYear = year();
  daysToChangeIris = int(random(58, 117));

  colorMode(HSB);

  // base values for responsive eye size / symbol positions

  if ((width >= 650) && (height >= 650)) {
    eyeHeightBase = 650;
    eyeWidthBase = 650;
  } else {
    let testHW = height - width;
    if (testHW >= 0) {
      eyeHeightBase = width;
      eyeWidthBase = width;
    } else {
      eyeHeightBase = height;
      eyeWidthBase = height;
    }
  } 
  
  //IRSP Vars

  IRSPCenterX = width / 2;
  IRSPCenterY = height / 2;

  // Pupil shape rarity:

  let ranNumB = random(100);
  if (ranNumB < 2) {
    sides = 3;
  } else if (ranNumB < 8) {
    sides = 4;
  } else {
    sides = int(random(5, 13));
  }
  
  // Colour Var Random Selection:
  colVarRandomiser();
  // Character Var Random Selection:
  charVarRandomiser();

  background(colBg01);
  
  // First Tarot Vars:
  topTarotCard = random(tarotVars);
  bottomLeftTarotCard = random(tarotVars);
  bottomRightTarotCard = random(tarotVars);

  // All drawing functions
  generateArt_bg0();
  generateArt_bgA();
  generateArt_Eye();
  generateArt_IrisBG();
  generateArt_IrisFG();
  generateArt_Spots();
  generateArt_Pupil();
  generateEyelid();
  tarotCards();
}

function colVarRandomiser() {
    let H, S, B;
    H = int(random(1, 361));
    S = int(random(50, 87));
    B = int(random(5, 19));
    colBg01Arr = [H,S,B];
    colBg01 = color(colBg01Arr[0],colBg01Arr[1],colBg01Arr[2]);
    H = int(random(1, 361));
    S = int(random(50, 89));
    B = int(random(50, 83));
    colBg02Arr = [H,S,B];
    colBg02 = color(colBg02Arr[0],colBg02Arr[1],colBg02Arr[2]);
    numberOfbg0ColChanges = int(random(9,18));

    H = int(random(1, 361));
    S = int(random(0, 17));
    B = int(random(89, 101));
    colBgAArr = [H,S,B];
    colBgA = color(colBgAArr[0],colBgAArr[1],colBgAArr[2]);
    
    colWhiteArr = [0,0,100];
    colWhite = color(colWhiteArr[0],colWhiteArr[1],colWhiteArr[2]);


    H = int(random(1, 361));
    S = int(random(80, 101));
    B = int(random(0, 5));
    colPupilArr = [H,S,B];
    colPupil = color(colPupilArr[0],colPupilArr[1],colPupilArr[2]);

    H = int(random(1, 361));
    S = int(random(40, 90));
    B = int(random(5, 37));
    colIris1Arr = [H,S,B];
    colIris1 = color(colIris1Arr[0],colIris1Arr[1],colIris1Arr[2]);
    colSpotsArr = [H,S+11,B+27];
    colSpots = color(colSpotsArr[0],colSpotsArr[1],colSpotsArr[2]);

    H = int(random(1, 361));
    S = int(random(40, 79));
    B = int(random(10, 89));
    colIris2Arr = [H,S,B];
    colIris2 = color(colIris2Arr[0],colIris2Arr[1],colIris2Arr[2]);
    let hueDif = random([-15,15]);
    S = int(random(40, 79));
    colIris3Arr = [H+hueDif,S,B+31];
    if (colIris3Arr[0] < 1) {colIris3Arr[0] = colIris3Arr[0] + 360;}
    if (colIris3Arr[0] > 360) {colIris3Arr[0] = colIris3Arr[0] - 360;}
    colIris3 = color(colIris3Arr[0],colIris2Arr[1],colIris3Arr[2]);

}

function charVarRandomiser() {
  
    // Special Variables 
    tarotVars = ["☯","☮","𝒫","Ω","⌨","⌛","⚠","☠","❀","♻","⚐","⚑","☑","☤","⚕","⚛","⚗","⚖","⚙","⚒","⌨","☄","♫","🎭","🖌","🖋","⛏","⚓","🕮","⚔","✈","⛈","✔","✗","❆","★","☉","☾","☄","🌣","⛆","ϟ","☁","☿","♀","♁","♂","♃","♄","♅","♆","♇","$","∞","π","♔","♕","♖","♗","♘","♙","♠","♦","♥","♣","♡","⛓","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","䷀","䷁","䷂","䷃","䷄","䷅","䷆","䷇","䷈","䷉","䷊","䷋","䷌","䷍","䷎","䷏","䷐","䷑","䷒","䷓","䷔","䷕","䷖","䷗","䷘","䷙","䷚","䷛","䷜","䷝","䷞","䷟","䷠","䷡","䷢","䷣","䷤","䷥","䷦","䷧","䷨","䷩","䷪","䷫","䷬","䷭","䷮","䷯","䷰","䷱","䷲","䷳","䷴","䷵","䷶","䷷","䷸","䷹","䷺","䷻","䷼","䷽","䷾","䷿"];
    
    //https://www.tarot.com/i-ching/hexagrams
    //https://en.wikipedia.org/wiki/Hexagram_(I_Ching)
    //https://www.iching-online.com/hexagrams/
    //https://www.cufonfonts.com/unicode-character-table/Yijing+Hexagram+Symbols


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
    studiesChars = ["☤","⚕","⚛","⚗","⚖","⚙","⚒","𝒫","Ω","⌨","☄","♫","🖌","🖋","🎭","⛏","🕮","⚔","✈","⚓"];
    let runeChars = ["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"];
    timeChars = ["⌛","⌚","⏱"];
    let diceChars = ["⚀","⚁","⚂","⚃","⚄","⚅"]
    let gendRelChars = ["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"];
    let brailleChars = ["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"];
  
    allThemedChars = [xChars,binaryChars,heartChars,snowChars,twitterChars,moneyChars,tetragramChars,suitChars,starChars,cryptoChars,arrowChars,mathChars,chessChars,skyChars,decimalChars,alphabetChars,musicChars,planetChars,weatherChars,newageChars,dangerChars,religionChars,studiesChars,cardsChars,dominoChars,runeChars,timeChars,diceChars,gendRelChars,brailleChars,voteChars, asteroidChars];

    // Scanned Variables

  let glitchVer1Chars = ["|"];
  let glitchVer2Chars = ["❙"];
  let glitchVer3Chars = ["𝆄"];
  let glitchVerAllChars = ["|","❙","𝆄"]
  let glitchHorAllChars = ["--","==","__","☰"];
  let glitchDiag1Chars = ["\\\\"];
  let glitchDiag2Chars = ["//"];
  let glitchDiag3Chars = ["𝆲"];
  let glitchDiag4Chars = ["𝆱"];
  glitchHor1Chars = ["--"];
  let glitchHor2Chars = ["=="];
  let glitchHor3Chars = ["__"];
  let glitchHor4Chars = ["☰"];
  let glitchDiagAll1Chars = ["\\\\","//"];
  let glitchDiagAll2Chars = ["𝆲","𝆱"];
  let glitchDiagAllChars = ["𝆲","𝆱","\\\\","//"];
  let glitchAllChars = ["|","\\\\","//","--","==","__","❙","☰","𝆲","𝆱","𝆄"];
  let glitchArr1Chars = ["←","→"];
  let glitchArr2Chars = ["↑","↓"];
  let glitchArr3Chars = ["←","→","↑","↓"];
  let glitchArr4Chars = ["↖","↗"];
  let glitchArr5Chars = ["↘","↙"];
  let glitchArr6Chars = ["↖","↗","↘","↙"];
  let glitchArrAllChars = ["←","→","↑","↓","↖","↗","↘","↙"];

  glitchTextures = [glitchVer1Chars,glitchVer2Chars,glitchVer3Chars,glitchVerAllChars,glitchHorAllChars,glitchHor1Chars,glitchHor2Chars,glitchHor3Chars,glitchHor4Chars,glitchDiag1Chars,glitchDiag2Chars,glitchDiag3Chars,glitchDiag4Chars,glitchDiagAll1Chars,glitchDiagAll2Chars,glitchDiagAllChars,glitchAllChars,glitchArr1Chars,glitchArr2Chars,glitchArr3Chars,glitchArr4Chars,glitchArr5Chars,glitchArr6Chars,glitchArrAllChars];

  // Painted Variables

  paintedTextures = [["♠","♦","♥","♣"],["♚","♥","♛"],["☆","⚝","★"],["▇","▇"],["▓","▓"],["▒","▒"],["☁","☁"],["▦","▦"],["▩","▩"],["✦","✦","✦","✖"],["✿","✿"],["☯","☯"],["■","●","▼","▲","◆"],["▚","▞","▝","▘","▗","▖"],["▌","▐","▌","▎","▏","▕","▐"],["✓","✔","✗","✘"],["⁂","⁂"],["─","━","│","┃","┄","┅","┆","┇","┈","┉","┊","┋","┌","┍","┎","┏","┐","┑","┒","┓","└","┕","┖","┗","┘","┙","┚","┛","├","┝","┞","┟","┠","┡","┢","┣","┤","┥","┦","┧","┨","┩","┪","┫","┬","┭","┮","┯","┰","┱","┲","┳","┴","┵","┶","┷","┸","┹","┺","┻","┼","┽","┾","┿","╀","╁","╂","╃","╄","╅","╆","╇","╈","╉","╊","╋","╌","╍","╎","╏","═","║","╒","╓","╔","╕","╖","╗","╘","╙","╚","╛","╜","╝","╞","╟","╠","╡","╢","╣","╤","╥","╦","╧","╨","╩","╪","╫","╬","╭","╮","╯","╰","╱","╲","╳","╴","╵","╶","╷","╸","╹","╺","╻","╼","╽","╾","╿"],["?!","¡¿","¡","¿","?","!","‽","⸘"]];

  // Fabric Variables

  fabricTextures = [["𝍖","𝍖"],["ᛰ","ᛰ"],["§","§"],["✴","✴"],["☆","☆"],["❅","❅"],["#","#"],["░","░"],["▤","▤"],["▥","▥"],["✖","◯"],["⌘","⌘"],["÷","+","x","−"],["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン"],["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"],["⚀","⚁","⚂","⚃","⚄","⚅"],["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"],["※","※"],["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"]];

  // ❏❐❑❒

  bg0FontSize = int(random(11,38));

  // Eye Textures Var Selection:

  for (let x = 0; x < 4; x++) {
    let ranNum = random(100);
    fabricTextureChoice = random(fabricTextures);
    glitchTexturesChoice = random(glitchTextures);
    paintedTextureChoice = random(paintedTextures);
    if (ranNum < 26) {
      switch (x) {
        case 0:
          specialChars_White = glitchTexturesChoice;
          break;
        case 1:
          specialChars_Iris = glitchTexturesChoice;
          break;
        case 2:
          specialChars_Pupil = glitchTexturesChoice;
          break;
        case 3:
          specialChars_eyeLid = glitchTexturesChoice;  
          break;
        default:
      } 
    } else {
      let remainingPercentage = 74;
      let remainingVariables = [fabricTextureChoice, paintedTextureChoice];
      let percentagePerVariable = remainingPercentage / remainingVariables.length;
      
      for (let i = 0; i < remainingVariables.length; i++) {
        if (ranNum < 26 + (i + 1) * percentagePerVariable) {
          switch (x) {
            case 0:
              specialChars_White = remainingVariables[i];
              break;
            case 1:
              specialChars_Iris = remainingVariables[i];
              break;
            case 2:
              specialChars_Pupil = remainingVariables[i];
              break;
            case 3:
              specialChars_eyeLid = remainingVariables[i];
              break;
            default:
          } 
          break;
        }
      }
    }
  }

  // BGA Textures Var Selection: 

    let ranNum = random(100);
    fabricTextureChoice = random(fabricTextures);
    glitchTexturesChoice = random(glitchTextures);
    paintedTextureChoice = random(paintedTextures);
    allThemedChoice = random(allThemedChars);

    if (ranNum < 16) {
        specialChars_bgA = allThemedChoice;
    } else {
      let remainingPercentage = 84;
      let remainingVariables = [fabricTextureChoice, paintedTextureChoice, glitchTexturesChoice];
      let percentagePerVariable = remainingPercentage / remainingVariables.length;
      
      for (let i = 0; i < remainingVariables.length; i++) {
        if (ranNum < 16 + (i + 1) * percentagePerVariable) {
          specialChars_bgA = remainingVariables[i];
          break;
        }
      }
    }

  // Bg0 Var Set Selection (every 89 days)

  for (let k = 0; k < 11; k++) {
    let ranNumC = floor(random(1, 88));
    while (bg0ChangeDays.includes(ranNumC)) {
      ranNumC = floor(random(1, 88));
    }
    bg0ChangeDays.push(ranNumC);
  }

  bg0ChangeDays.sort(function(a, b) {
    return a - b;
  });

  for (let x = 0; x < 11; x++) {
    let ranNum = random(100);
    fabricTextureChoice = random(fabricTextures);
    glitchTexturesChoice = random(glitchTextures);
    paintedTextureChoice = random(paintedTextures);
    allThemedChoice = random(allThemedChars);
    if (ranNum < 16) {
      if (x == 0) {
        bg0_set = [allThemedChoice];
      } else {
        bg0_set.push([allThemedChoice]);
      }
    } else {
      let remainingPercentage = 84;
      let remainingVariables = [fabricTextureChoice, paintedTextureChoice, glitchTexturesChoice];
      let percentagePerVariable = remainingPercentage / remainingVariables.length;
      
      for (let n = 0; n < remainingVariables.length; n++) {
        if (ranNum < 16 + (n + 1) * percentagePerVariable) {
            if (x == 0) {
              bg0_set = [remainingVariables[n]];
            } else {
              bg0_set.push([remainingVariables[n]]);
            }
          break;
        }
      }
    }
  }

  specialChars_bg0 = bg0_set[10].flat();

  // bg0 initial colour Change days 
  for (let k = 0; k < numberOfbg0ColChanges; k++) {
    let ranNumC = floor(random(1, 88));
    while (bg0ColChangeDays.includes(ranNumC)) {
      ranNumC = floor(random(1, 88));
    }
    bg0ColChangeDays.push(ranNumC);
  }

  bg0ColChangeDays.sort(function(a, b) {
    return a - b;
  });

// Spots Var Selection
  allThemedChoice = random(allThemedChars);
  specialChars_Spots = allThemedChoice;  
}

function draw() {
  myFrameCount++;

  if (myFrameCount % 30 === 0) {

  // pupil/iris shift: 
  let eyeShift = random(100);
  let shiftNumX = random(-1 * (eyeWidthBase/16.25), (eyeWidthBase/16.25)+1);
  let shiftNumY = random(-1 * (eyeHeightBase/65), (eyeHeightBase/65)+1);
  
  if ((eyeShift < 33) && (blink > 5)) {
    IRSPCenterX = (width / 2) + shiftNumX;
    IRSPCenterY = (height / 2) + shiftNumY;
  } else {
    IRSPCenterX = width / 2;
    IRSPCenterY = height / 2;
  }

  // bg0 changes 11 times over 89 days 
  if (day() != currentDayE) {
    bg0setChangedToday = false;
    bg0Period++;
    currentDayE = day();
    // Change bg0 Chars on Char Change Day:
    for (let j = 0; j < bg0ChangeDays.length; j++) {
      if (bg0Period === bg0ChangeDays[j]) {
        specialChars_bg0 = bg0_set[j].flat();
        bg0FontSize = int(random(11,38));
      }
    }
    
    // Change bg0 Colours on Col Change Day:
    let H, S, B;
    for (let j = 0; j < bg0ColChangeDays.length; j++) {
      if (bg0Period === bg0ColChangeDays[j]) {
        H = int(random(1, 361));
        S = int(random(50, 87));
        B = int(random(5, 19));
        colBg01Arr = [H,S,B];
        colBg01 = color(colBg01Arr[0],colBg01Arr[1],colBg01Arr[2]);
        H = int(random(1, 361));
        S = int(random(50, 89));
        B = int(random(50, 83));
        colBg02Arr = [H,S,B];
        colBg02 = color(colBg02Arr[0],colBg02Arr[1],colBg02Arr[2]);
      }
    }

    // Eyelid Chars selection once every 30 days:
    if ((daysPassed % 30 === 0) && (daysPassed != 0)) {
      let ranNum = random(100);
      fabricTextureChoice = random(fabricTextures);
      glitchTexturesChoice = random(glitchTextures);
      paintedTextureChoice = random(paintedTextures);
      if (ranNum < 26) {
        specialChars_eyeLid = glitchTexturesChoice;
      } else {
        let remainingPercentage = 74;
        let remainingVariables = [fabricTextureChoice, paintedTextureChoice];
        let percentagePerVariable = remainingPercentage / remainingVariables.length;
        
        for (let i = 0; i < remainingVariables.length; i++) {
          if (ranNum < 26 + (i + 1) * percentagePerVariable) {
            specialChars_eyeLid = remainingVariables[i];
          }
        }
      }

    }
    // White of the Eye and Iris random char changes

    for (let x = 0; x < 2; x++) {
      let ranNum = random(100);
      fabricTextureChoice = random(fabricTextures);
      glitchTexturesChoice = random(glitchTextures);
      paintedTextureChoice = random(paintedTextures);
      if (ranNum < 26) {
        switch (x) {
          case 0:
            if ((day() == whiteDay1 || day() == whiteDay2) && (day() !== currentDayB)) {
              let varchcker = specialChars_White;
              while (specialChars_White == varchcker) {
              specialChars_White = glitchTexturesChoice;
              }
              varchcker = specialChars_White;
              currentDayB = day();
            }
            break;
          case 1:
            if ((daysSinceIrisChanged >= daysToChangeIris) && (day() !== currentDayC)) {
              daysSinceIrisChanged = 0;
              daysToChangeIris = int(random(58, 117));
              specialChars_Iris = glitchTexturesChoice;
              currentDayC = day();
            }
            break;
          default:
        } 
      } else {
        let remainingPercentage = 74;
        let remainingVariables = [fabricTextureChoice, paintedTextureChoice];
        let percentagePerVariable = remainingPercentage / remainingVariables.length;
        
        for (let i = 0; i < remainingVariables.length; i++) {
          if (ranNum < 26 + (i + 1) * percentagePerVariable) {
            switch (x) {
              case 0:
                if ((day() == whiteDay1 || day() == whiteDay2) && (day() !== currentDayB)) {
                  let varchcker = specialChars_White;
                  while (specialChars_White == varchcker) {
                    specialChars_White = remainingVariables[i];
                  }
                  varchcker = specialChars_White;
                  currentDayB = day();
                }
                break;
              case 1:
                if ((daysSinceIrisChanged >= daysToChangeIris) && (day() !== currentDayC)) {
                  daysSinceIrisChanged = 0;
                  daysToChangeIris = int(random(58, 117));
                  specialChars_Iris = remainingVariables[i];
                  currentDayC = day();
                }
                break;
              default:
            } 
            break;
          }
        }
      }
    }

    if (day() == spotDay1 || day() == spotDay2 || day() == spotDay3 || day() == spotDay4 || day() == spotDay5) {
      allThemedChoice = random(allThemedChars);
      specialChars_Spots = allThemedChoice;
    }

  }

  // Bg0 Var Set Selection (every 89 days)
  if ((daysPassed % 89 === 0) && (daysPassed != 0) && (!bg0setChangedToday)) {
    bg0Period = 0;
    bg0_set = [];
    bg0ChangeDays = [];

    bg0ColChangeDays = [];
    numberOfbg0ColChanges = int(random(9,18));

    bg0setChangedToday = true;
    // bg0 Change Days for Chars:
    for (let k = 0; k < 11; k++) {
      let ranNumC = floor(random(1, 88));
      while (bg0ChangeDays.includes(ranNumC)) {
        ranNumC = floor(random(1, 88));
      }
  
      bg0ChangeDays.push(ranNumC);
  
    }
  
    bg0ChangeDays.sort(function(a, b) {
      return a - b;
    });

  // bg0 Change days for colours
    for (let k = 0; k < numberOfbg0ColChanges; k++) {
      let ranNumC = floor(random(1, 88));
      while (bg0ColChangeDays.includes(ranNumC)) {
      ranNumC = floor(random(1, 88));
    }
    bg0ColChangeDays.push(ranNumC);
    }

    bg0ColChangeDays.sort(function(a, b) {
      return a - b;
    });

    for (let x = 0; x < 11; x++) {
      let ranNum = random(100);
      fabricTextureChoice = random(fabricTextures);
      glitchTexturesChoice = random(glitchTextures);
      paintedTextureChoice = random(paintedTextures);
      allThemedChoice = random(allThemedChars);
  
      if (ranNum < 16) {
        if (x == 0) {
          bg0_set = [allThemedChoice];
        } else {
          bg0_set.push([allThemedChoice]);
        }
      } else {
        let remainingPercentage = 84;
        let remainingVariables = [fabricTextureChoice, paintedTextureChoice, glitchTexturesChoice];
        let percentagePerVariable = remainingPercentage / remainingVariables.length;
        
        for (let n = 0; n < remainingVariables.length; n++) {
          if (ranNum < 16 + (n + 1) * percentagePerVariable) {
              if (x == 0) {
                bg0_set = [remainingVariables[n]];
              } else {
                bg0_set.push([remainingVariables[n]]);
              }
            break;
          }
        }
      }
    }
  }

  // bgA changes every 12 hours:

  if ((hour() == 12 || hour() == 0) && (currentHour !== hour())) {
    currentHour = hour();
    let ranNum = random(100);
    fabricTextureChoice = random(fabricTextures);
    glitchTexturesChoice = random(glitchTextures);
    paintedTextureChoice = random(paintedTextures);
    allThemedChoice = random(allThemedChars);

    if (ranNum < 16) {
        specialChars_bgA = allThemedChoice;
    } else {
      let remainingPercentage = 84;
      let remainingVariables = [fabricTextureChoice, paintedTextureChoice, glitchTexturesChoice];
      let percentagePerVariable = remainingPercentage / remainingVariables.length;
      
      for (let i = 0; i < remainingVariables.length; i++) {
        if (ranNum < 16 + (i + 1) * percentagePerVariable) {
          specialChars_bgA = remainingVariables[i];
          break;
        }
      }
    }
  }



    if (currentMonth !== month()) {
      currentMonth = month();
      currentYear = year();
// White of the Eye change days - 23 a year
      if (month() != 2) {
        whiteDay1 = int(random(1,16));
        whiteDay2 = int(random(16,30));
      } else {
        whiteDay1 = int(random(1,30));
        if (whiteDay1 == 29 && currentYear % 4 != 0) {
        whiteDay1 = int(random(1,30));
        } 
        whiteDay2 = 42;
      }
// Spot change days - 5 a month:
      spotDay1 = int(random(1,7));
      spotDay2 = int(random(7,13));
      spotDay3 = int(random(13,19));
      spotDay4 = int(random(19,25));
      spotDay5 = int(random(25,29));
// Pupil chars change once a year:
      if (month() == 1) {
        let ranNum = random(100);
        fabricTextureChoice = random(fabricTextures);
        glitchTexturesChoice = random(glitchTextures);
        paintedTextureChoice = random(paintedTextures);
        if (ranNum < 26) {
          specialChars_Pupil = glitchTexturesChoice;
        } else {
          let remainingPercentage = 74;
          let remainingVariables = [fabricTextureChoice, paintedTextureChoice];
          let percentagePerVariable = remainingPercentage / remainingVariables.length;
          
          for (let i = 0; i < remainingVariables.length; i++) {
            if (ranNum < 26 + (i + 1) * percentagePerVariable) {
              specialChars_Pupil = remainingVariables[i];
            }
          }
        }
      } 
    }

    colourChangeTracker();

    generateArt_bg0();
    generateArt_bgA();
    generateArt_Eye();
    generateArt_IrisBG();
    generateArt_IrisFG();
    generateArt_Spots();
    generateArt_Pupil();
    generateEyelid();
    tarotCards();

    if (myFrameCount == 4800){
      myFrameCount = 0;
    }
  }
}

function colourChangeTracker() {
  // Iris colours:
  if (currentDayF != day()) {
    currentDayF = day();

      let Hch = int(random(1,4));

      colIris1Arr[0] = colIris1Arr[0] + Hch;
      if (colIris1Arr[0] > 360) {colIris1Arr[0] = colIris1Arr[0] - 360;}
      colIris1 = color(colIris1Arr[0],colIris1Arr[1],colIris1Arr[2]);

      colSpotsArr[0] = colSpotsArr[0] + Hch;
      if (colSpotsArr[0] > 360) {colSpotsArr[0] = colSpotsArr[0] - 360;}
      colSpots = color(colSpotsArr[0],colSpotsArr[1],colSpotsArr[2]);

      Hch = int(random(1,3));

      colIris2Arr[0] = colIris2Arr[0] + Hch;
      if (colIris2Arr[0] > 360) {colIris2Arr[0] = colIris2Arr[0] - 360;}
      colIris2 = color(colIris2Arr[0],colIris2Arr[1],colIris2Arr[2]);

      colIris3Arr[0] = colIris3Arr[0] + Hch;
      if (colIris3Arr[0] > 360) {colIris3Arr[0] = colIris3Arr[0] - 360;}
      colIris3 = color(colIris3Arr[0],colIris3Arr[1],colIris3Arr[2]);
  }
  // bgA colours:
  if (currentMinute != minute()){
    currentMinute = minute();
    colBgAArr[0] = colBgAArr[0] + 1;
    if (colBgAArr[0] > 360) {colBgAArr[0] = colBgAArr[0] - 360;}
    colBgA = color(colBgAArr[0],colBgAArr[1],colBgAArr[2]);

  }
}

function generateArt_bg0() {
  textSize(bg0FontSize);
  textFont("FreeSerif");
  fill(colBg02);
  for (let i = 0; i < 450; i++) {
    let bb0 = random(specialChars_bg0);
    textFont("FreeSerif");
    if (timeChars.includes(bb0) || studiesChars.includes(bb0)) {
      textFont("Symbola");
    }
    text(bb0, random(width), random(height));
  }
  fill(colBg01);
  for (let i = 0; i < 6250; i++) {
    bb0 = random(specialChars_bg0);
    textFont("FreeSerif");
    if (timeChars.includes(bb0) || studiesChars.includes(bb0)) {
      textFont("Symbola");
    }
    text(bb0, random(width), random(height));
  }
}

function generateArt_bgA() {
  textSize(17);
  textFont("FreeSerif");
  fill(colBgA,230);
  noStroke();

  let centerX = width / 2;
  let centerY = height / 1.99;
  let outerEdgeX = 2.4 * width / 2;
  let outerEdgeY = 2.5 * height / 2;
  let innerEdgeX = 0.4 * width / 2;
  let innerEdgeY = 0.5 * height / 2;
  let gridSize = 18;

  let numCellsX = floor((outerEdgeX - innerEdgeX) / gridSize);
  let numCellsY = floor((outerEdgeY - innerEdgeY) / gridSize);

  let startX = centerX - numCellsX / 2 * gridSize + gridSize / 2;
  let startY = centerY - numCellsY / 2 * gridSize + gridSize / 2;

  for (let i = 0; i < numCellsX * numCellsY; i++) {
    let x = startX + (i % numCellsX) * gridSize;
    let y = startY + floor(i / numCellsX) * gridSize;
    let c = random(specialChars_bgA);
    if ((specialChars_bgA == timeChars) || (specialChars_bgA == studiesChars) ) {
      textFont("Symbola");
    }
    let distFromCenter = dist(centerX, centerY, x, y);
    let probX = map(distFromCenter, innerEdgeX, outerEdgeX, 0, 1);
    let probY = map(distFromCenter, innerEdgeY, outerEdgeY, 0, 1);

    let prob = (probX + probY) / 3;

    if (random() < prob) {
      text(c, x, y);
    }
  }
}

function generateArt_Eye() {
  textSize(9);
  textFont("FreeSerif");
  fill(0);
  noStroke();

  let centerX = width / 2;
  let centerY = height / 2;
  let radiusX = eyeWidthBase / 3;
  let radiusY = eyeHeightBase / 7.2;

  for (let i = 0; i < 4350; i++) {
    let angle = random(TWO_PI);
    let distanceX = random(radiusX);
    let distanceY = random(radiusY);

    let x = centerX + distanceX * cos(angle);
    let y = centerY + distanceY * sin(angle);

    let c = random(specialChars_White);

    let distFromCenter = dist(centerX, centerY, x, y);
    let prob;

    if (distFromCenter < radiusY / 3) {
      prob = map(distFromCenter, 0, radiusY / 1, 1, 0.6);
    } else if (distFromCenter < radiusY) {
      prob = map(distFromCenter, radiusY / 3, radiusY, 0.4, 1);
    } else {
      prob = 0;
    }

    if (x < centerX - radiusX / 2 || x > centerX + radiusX / 2) {
      prob *= map(abs(x - centerX), radiusX / 2, radiusX, 0.2, 1);
    }

    if (random() < prob) {
      fill(colWhite);
    } else {
      fill(colWhite);
    }
    text(c, x, y);
  }
}

function generateArt_IrisBG() {
  textSize(7);
  textFont("FreeSerif");
  fill(190,170,0);
  noStroke();

  let nOC = 0;
  let radius = eyeHeightBase / 7;

  if (glitchTextures.includes(specialChars_Iris)) {
    nOC = 12500;
  } else {
    nOC = 8500;
  }

  for (let i = 0; i < nOC; i++) {
    let angle = random(TWO_PI);
    let distance = random(radius);

    let x = IRSPCenterX + distance * sin(angle);
    let y = IRSPCenterY + distance * cos(angle);

    let c = random(specialChars_Iris);

    let distFromCenter = dist(IRSPCenterX, IRSPCenterY, x, y);
    let prob;
    
    if (distFromCenter < radius / 3) {
      prob = map(distFromCenter, 0, radius / 3, 1, 0.2);
    } else if (distFromCenter < radius) {
      prob = map(distFromCenter, radius / 3, radius, 0.2, 1);
    } else {
      prob = 0;
    }
    
    if (random() < prob) {
      //fill(30, 110, 35);
      fill(colIris1);
    } else {
   //   fill(50, 130, 45);colIris1
        fill(colIris1);
    }
    text(c, x, y);
  }
}

function generateArt_IrisFG() {
  textSize(7);
  textFont("FreeSerif");
  fill(190,170,0);
  noStroke();

  let radius = eyeHeightBase / 8;
  let nOC2;

  if (glitchTextures.includes(specialChars_Iris)) {
    nOC2 = 3500;
  } else {
    nOC2 = 2000;
  }

  for (let i = 0; i < nOC2; i++) {
    let angle = random(TWO_PI);
    let distance = random(radius);

    let x = IRSPCenterX + distance * sin(angle);
    let y = IRSPCenterY + distance * cos(angle);

    let c = random(specialChars_Iris);

    let distFromCenter = dist(IRSPCenterX, IRSPCenterY, x, y);
    let prob;
    
    if (distFromCenter < radius / 3) {
      prob = map(distFromCenter, 0, radius / 3, 1, 0.2);
    } else if (distFromCenter < radius) {
      prob = map(distFromCenter, radius / 3, radius, 0.2, 1);
    } else {
      prob = 0;
    }
    
    if (random() < prob) {
      
      fill(colIris2);
    } else {
      fill(colIris3);
    }
    text(c, x, y);
  }

}

function generateArt_Spots() {
  textSize(17);
  textFont("FreeSerif");
  fill(colSpots,190);
  noStroke();

  let radius = eyeHeightBase / 8.5; 

  let spotPosMod = 0;

  if (specialChars_Spots == twitterChars) {
    spotPosMod = -6;  
    radius = eyeHeightBase / 9.5;   
  } else {
    spotPosMod = -5;
  }

  if ((specialChars_Spots == timeChars) || (specialChars_Spots == studiesChars) ) {
    textFont("Symbola");
  }

  for (let i = 0; i < 35; i++) {
    let angle = random(TWO_PI);
    let distance = random(radius);

    let x = IRSPCenterX + distance * cos(angle);
    let y = IRSPCenterY + distance * sin(angle);

    let c = random(specialChars_Spots);
    text(c, x+spotPosMod, y+spotPosMod);
    text(c, x+spotPosMod+1, y+spotPosMod+1);
  }
}

function generateArt_Pupil() {
  textSize(7);
  textFont("FreeSerif");
  fill(colPupil);
  noStroke();

  let pupilRadiusDivider = 18;
  let pupilCharQuantity = 3800;

  // pupil dilation size
  let ranNumforPupilDilation = random(100);
  let dilationAmount = 0;

  if ((ranNumforPupilDilation < 24) && (blink > 5)) {
    dilationAmount = random(-3, 3);
    pupilRadiusDivider = pupilRadiusDivider + dilationAmount;
  } else {
    if (sides < 5) {
      pupilRadiusDivider = 15.5;
    } else {
      pupilRadiusDivider = 18;
    }
  }

  // pupil misc. conditions:
  if (sides == 3) {
    pupilRadiusDivider = 15;
    pupilCharQuantity = 3000;
  }
  if (sides == 4) {
    pupilRadiusDivider = 15;
    pupilCharQuantity = 3300;
  }

  if (specialChars_Pupil == glitchHor1Chars ) {
    pupilCharQuantity = 6600;
  }

  let radius = eyeHeightBase / pupilRadiusDivider;

  let angleStep = TWO_PI / sides;
  
  // Set the starting angle for the first vertex to be at the bottom, horizontal
  let startAngle = -PI/2;
  
  let points = [];

  for (let i = 0; i < sides; i++) {
    let x = IRSPCenterX + radius * cos(startAngle + i * angleStep);
    let y = IRSPCenterY + radius * sin(startAngle + i * angleStep);
    points.push(createVector(x, y));
  }

  for (let i = 0; i < pupilCharQuantity; i++) {
    let point = generateRandomPointInsidePolygon(points);
    let c = random(specialChars_Pupil);
    text(c, point.x, point.y);
  }
}

function generateRandomPointInsidePolygon(vertices) {
  // Calculate the minimum and maximum X and Y coordinates of the polygon
  let minX = eyeWidthBase;
  let maxX = 0;
  let minY = eyeHeightBase;
  let maxY = 0;
  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    if (v.x < minX) minX = v.x;
    if (v.x > maxX) maxX = v.x;
    if (v.y < minY) minY = v.y;
    if (v.y > maxY) maxY = v.y;
  }

  // Generate random points inside the polygon until a point is found
  let found = false;
  let maxAttempts = 1000;
  let point;
  for (let i = 0; i < maxAttempts && !found; i++) {
    point = createVector(random(minX, maxX), random(minY, maxY));
    found = isPointInsidePolygon(point, vertices);
  }

  return point;
}

function isPointInsidePolygon(point, vertices) {
  // Use the ray casting algorithm to determine if a point is inside a polygon
  let inside = false;
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    let vi = vertices[i];
    let vj = vertices[j];
    if (((vi.y > point.y) != (vj.y > point.y)) && (point.x < (vj.x - vi.x) * (point.y - vi.y) / (vj.y - vi.y) + vi.x)) {
      inside = !inside;
    }
  }
  return inside;
}

function generateEyelid() {
  textSize(7);
  fill(colBg01);
  noStroke();
  textFont("FreeSerif");

  // EyeLid Dimension Variables:

  let eyelidVar = 0.2;

  let centerX = width / 2;
  let centerY = height / 2;

  blink = random(100);
  if (blink < 5) {eyelidVar = 0.005;} else {eyelidVar = 0.2;}

  let outerRadiusX = 0.69 * eyeWidthBase / 2;
  let outerRadiusY = 0.35 * eyeHeightBase / 2;
  let innerRadiusX = 0.69 * eyeWidthBase / 2;
  let innerRadiusY = eyelidVar * eyeHeightBase / 2;

  let quadSizeX = (outerRadiusX - innerRadiusX) / 2;
  let quadSizeY = (outerRadiusY - innerRadiusY) / 2;

  for (let i = 0; i < 10000; i++) {
    let angle = random(TWO_PI);
    let distanceX = random(innerRadiusX, outerRadiusX);
    let distanceY = random(innerRadiusY, outerRadiusY);

    let x = centerX + distanceX * cos(angle);
    let y = centerY + distanceY * sin(angle);

    let c = random(specialChars_eyeLid);

    //let distFromCenter = dist(centerX, centerY, x, y);
    
    let quadX = floor((x - centerX) / quadSizeX) + 1;
    let quadY = floor((y - centerY) / quadSizeY) + 1;
    
    let probX = map(abs(quadX), 1, 2, 0.2, 1);
    let probY = map(abs(quadY), 1, 2, 0.2, 1);
    
    let prob = (probX + probY) / 2;

    if (random() < prob) {
      text(c, x, y);
    }
  }
}

function tarotCards() {
  let card1ChangedToday;
  let card2ChangedToday;
  let card3ChangedToday;

  if (day() !== currentDay) {
      currentDay = day();
      daysPassed++;
      daysSinceIrisChanged++;
      card1ChangedToday = false;
      card2ChangedToday = false;
      card3ChangedToday = false;
  }

  if ((daysPassed % 2 === 0) && (daysPassed != 0) && (!card1ChangedToday)) {
      topTarotCard = random(tarotVars);
      card1ChangedToday = true;
  }

  if ((daysPassed % 7 === 0) && (daysPassed != 0) && (!card2ChangedToday)) {
      bottomLeftTarotCard = random(tarotVars);
      card2ChangedToday = true;
  }

  if ((daysPassed % 17 === 0) && (daysPassed != 0) && (!card3ChangedToday)) {
      bottomRightTarotCard = random(tarotVars);
      card3ChangedToday = true;
  }
  
  textSize(((height/10)+(width/10))/2);

  textFont("Symbola");
  textAlign(CENTER, CENTER);
  fill(42,0,255,204)
  text(topTarotCard, width/2, height/6);
  text(bottomLeftTarotCard, width/5, height/1.25);
  text(bottomRightTarotCard, width/1.25, height/1.25);
}