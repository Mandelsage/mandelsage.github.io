let d,f;let F,w;let k=0;let e;let t;let Se;let o;let i;let a;let g;let l;let _;let p;let z;let r=0;let T=0;let q=[];let I;let m=11;let P=23;let O=3;let W=9;let E=17;let M=23;let C=27;let s=0;let R;let h=0;let Fe;let ee;let te;let we;let le;let oe;let re;let N;let V;let X;let ne;let ie;let ae;let de;let fe;let me;let se;let he;let ce;let ue;let ke;let ge;let xe;let be=[];let A,B,H,$,v,D,G,J,K;let n,c,u,L,x,b,y,S,Q=[];let _e;let ye=[];let U=0;function Y(){e=loadFont("../FreeSerif.ttf");t=loadFont("../Symbola.ttf")}function Z(){createCanvas(650,650);frameRate(60);o=day();i=day();a=day();g=day();l=day();p=month();_=hour();currentMinute=minute();z=year();R=int(random(58,117));colorMode(HSB);if(width>=650&&height>=650){w=650;F=650}else{let e=height-width;if(e>=0){w=width;F=width}else{w=height;F=height}}d=width/2;f=height/2;let e=random(100);if(e<2){h=3}else if(e<8){h=4}else{h=int(random(5,13))}j();pe();background(A);N=random(re);V=random(re);X=random(re);Ie();Pe();Oe();We();Ee();Me();Ce();Ve();Xe()}function j(){let e,t,l;e=int(random(1,361));t=int(random(50,87));l=int(random(5,19));n=[e,t,l];A=color(n[0],n[1],n[2]);e=int(random(1,361));t=int(random(50,89));l=int(random(50,83));c=[e,t,l];B=color(c[0],c[1],c[2]);_e=int(random(9,18));e=int(random(1,361));t=int(random(0,17));l=int(random(89,101));u=[e,t,l];H=color(u[0],u[1],u[2]);L=[0,0,100];$=color(L[0],L[1],L[2]);e=int(random(1,361));t=int(random(80,101));l=int(random(0,5));Q=[e,t,l];K=color(Q[0],Q[1],Q[2]);e=int(random(1,361));t=int(random(40,90));l=int(random(5,37));x=[e,t,l];v=color(x[0],x[1],x[2]);S=[e,t+11,l+27];J=color(S[0],S[1],S[2]);e=int(random(1,361));t=int(random(40,79));l=int(random(10,89));b=[e,t,l];D=color(b[0],b[1],b[2]);let o=random([-15,15]);t=int(random(40,79));y=[e+o,t,l+31];if(y[0]<1){y[0]=y[0]+360}if(y[0]>360){y[0]=y[0]-360}G=color(y[0],b[1],y[2])}function pe(){re=["☯","☮","𝒫","Ω","⌨","⌛","⚠","☠","❀","♻","⚐","⚑","☑","☤","⚕","⚛","⚗","⚖","⚙","⚒","⌨","☄","♫","🎭","🖌","🖋","⛏","⚓","🕮","⚔","✈","⛈","✔","✗","❆","★","☉","☾","☄","🌣","⛆","ϟ","☁","☿","♀","♁","♂","♃","♄","♅","♆","♇","$","∞","π","♔","♕","♖","♗","♘","♙","♠","♦","♥","♣","♡","⛓","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ","䷀","䷁","䷂","䷃","䷄","䷅","䷆","䷇","䷈","䷉","䷊","䷋","䷌","䷍","䷎","䷏","䷐","䷑","䷒","䷓","䷔","䷕","䷖","䷗","䷘","䷙","䷚","䷛","䷜","䷝","䷞","䷟","䷠","䷡","䷢","䷣","䷤","䷥","䷦","䷧","䷨","䷩","䷪","䷫","䷬","䷭","䷮","䷯","䷰","䷱","䷲","䷳","䷴","䷵","䷶","䷷","䷸","䷹","䷺","䷻","䷼","䷽","䷾","䷿"];let e=["X","X"];let t=["1","0"];let l=["0","1","2","3","4","5","6","7","8","9"];let o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];let r=["𝄋","𝄞","𝄢","♩","♪","♫","♬","♭","♮","♯","𝅘𝅥𝅮","𝅘𝅥𝅰","𝅘𝅥𝅱","𝅘𝅥𝅲"];let n=["☐","☑","☒"];let i=["♡","♥"];let a=["⇩","⇧","⬂","⇨","⬀","⬃","⇦","⬁","⮕","⬅","⬆","⬇","⬈","⬉","⬊","⬋"];let d=["❅","❆","❉","❊"];let f=["☆","⚝","✸","✫","✯","★","✴","✹"];let m=["⦿","☉","☽","☾","❍","☄","★","✈"];let s=["❆","🌣","⛆","ϟ","℃","℉","☈","☁","⛈"];let h=["☿","♀","♁","♂","♃","♄","♅","♆","♇"];let c=["⚵","⚶","⚴","⚳","⚷","⚸","⚘","⚕"];let u=["£","$","€","¥","₱","₪","₩","﷼","₴"];let x=["∞","π","Σ","√","△","φ","÷","+","x","−","𝒫"];let b=["♡","♢","♤","♧","♠","♦","♥","♣"];let y=["♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟"];let S=["🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾","🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮","🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎","🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞","🂠","🃟","🂿"];let F=["🁣","🁤","🁥","🁦","🁧","🁨","🁩","🁪","🁫","🁬","🁭","🁮","🁯","🁰","🁱","🁲","🁳","🁴","🁵","🁶","🁷","🁸","🁹","🁺","🁻","🁼","🁽","🁾","🁿","🂀","🂁","🂂","🂃","🂄","🂅","🂆","🂇","🂈","🂉","🂊","🂋","🂌","🂍","🂎","🂏","🂐","🂑","🂒","🂓","🁢","🀱","🀲","🀳","🀴","🀵","🀶","🀷","🀸","🀹","🀺","🀻","🀼","🀽","🀾","🀿","🁀","🁁","🁂","🁃","🁄","🁅","🁆","🁇","🁈","🁉","🁊","🁋","🁌","🁍","🁎","🁏","🁐","🁑","🁒","🁓","🁔","🁕","🁖","🁗","🁘","🁙","🁚","🁛","🁜","🁝","🁞","🁟","🁠","🁡","🀰"];let w=["⛓","₿","Ł","Ð","Ξ","₳","ꜩ"];Fe=["#","@","&","ᵍᵐ","⁴²⁰","⁶⁹","ᴼᴳ","ⁿᵍᵐᶦ","ʷᵃᵍᵐᶦ","🙭","ʷᵉⁿ","ᵐᵒᵒⁿ","ᵈʸᵒʳ"];let k=["𝌆","𝌇","𝌈","𝌉","𝌊","𝌋","𝌌","𝌍","𝌎","𝌏","𝌐","𝌑","𝌒","𝌓","𝌔","𝌕","𝌖","𝌗","𝌘","𝌙","𝌚","𝌛","𝌜","𝌝","𝌞","𝌟","𝌠","𝌡","𝌢","𝌣","𝌤","𝌥","𝌦","𝌧","𝌨","𝌩","𝌪","𝌫","𝌬","𝌭","𝌮","𝌯","𝌰","𝌱","𝌲","𝌳","𝌴","𝌵","𝌶","𝌷","𝌸","𝌹","𝌺","𝌻","𝌼","𝌽","𝌾","𝌿","𝍀","𝍁","𝍂","𝍃","𝍄","𝍅","𝍆","𝍇","𝍈","𝍉","𝍊","𝍋","𝍌","𝍍","𝍎","𝍏","𝍐","𝍑","𝍒","𝍓","𝍔","𝍕","𝍖"];let g=["☯","☮","✾","❀","✿","❁","☥","🕈"];let _=["✇","☢","☣","☠","⚠"];let p=["✝","☪","✡","☥","⛤","⛧","☸"];ee=["☤","⚕","⚛","⚗","⚖","⚙","⚒","𝒫","Ω","⌨","☄","♫","🖌","🖋","🎭","⛏","🕮","⚔","✈","⚓"];let z=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"];te=["⌛","⌚","⏱"];let T=["⚀","⚁","⚂","⚃","⚄","⚅"];let I=["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"];let P=["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"];le=[e,t,i,d,Fe,u,k,b,f,w,a,x,y,m,l,o,r,h,s,g,_,p,ee,S,F,z,te,T,I,P,n,c];let O=["|"];let W=["❙"];let E=["𝆄"];let M=["|","❙","𝆄"];let C=["--","==","__","☰"];let R=["\\\\"];let V=["//"];let X=["𝆲"];let A=["𝆱"];we=["--"];let B=["=="];let H=["__"];let $=["☰"];let v=["\\\\","//"];let D=["𝆲","𝆱"];let G=["𝆲","𝆱","\\\\","//"];let J=["|","\\\\","//","--","==","__","❙","☰","𝆲","𝆱","𝆄"];let K=["←","→"];let L=["↑","↓"];let Q=["←","→","↑","↓"];let U=["↖","↗"];let Y=["↘","↙"];let Z=["↖","↗","↘","↙"];let j=["←","→","↑","↓","↖","↗","↘","↙"];ne=[O,W,E,M,C,we,B,H,$,R,V,X,A,v,D,G,J,K,L,Q,U,Y,Z,j];ae=[["♠","♦","♥","♣"],["♚","♥","♛"],["☆","⚝","★"],["▇","▇"],["▓","▓"],["▒","▒"],["☁","☁"],["▦","▦"],["▩","▩"],["✦","✦","✦","✖"],["✿","✿"],["☯","☯"],["■","●","▼","▲","◆"],["▚","▞","▝","▘","▗","▖"],["▌","▐","▌","▎","▏","▕","▐"],["✓","✔","✗","✘"],["⁂","⁂"],["─","━","│","┃","┄","┅","┆","┇","┈","┉","┊","┋","┌","┍","┎","┏","┐","┑","┒","┓","└","┕","┖","┗","┘","┙","┚","┛","├","┝","┞","┟","┠","┡","┢","┣","┤","┥","┦","┧","┨","┩","┪","┫","┬","┭","┮","┯","┰","┱","┲","┳","┴","┵","┶","┷","┸","┹","┺","┻","┼","┽","┾","┿","╀","╁","╂","╃","╄","╅","╆","╇","╈","╉","╊","╋","╌","╍","╎","╏","═","║","╒","╓","╔","╕","╖","╗","╘","╙","╚","╛","╜","╝","╞","╟","╠","╡","╢","╣","╤","╥","╦","╧","╨","╩","╪","╫","╬","╭","╮","╯","╰","╱","╲","╳","╴","╵","╶","╷","╸","╹","╺","╻","╼","╽","╾","╿"],["?!","¡¿","¡","¿","?","!","‽","⸘"]];fe=[["𝍖","𝍖"],["ᛰ","ᛰ"],["§","§"],["✴","✴"],["☆","☆"],["❅","❅"],["#","#"],["░","░"],["▤","▤"],["▥","▥"],["✖","◯"],["⌘","⌘"],["÷","+","x","−"],["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン"],["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚳ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ","ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ","ᛠ"],["⚀","⚁","⚂","⚃","⚄","⚅"],["♀","♂","⚲","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩"],["※","※"],["⠁","⠂","⠃","⠄","⠅","⠆","⠇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿"]];Se=int(random(11,38));for(let r=0;r<4;r++){let o=random(100);me=random(fe);ie=random(ne);de=random(ae);if(o<26){switch(r){case 0:he=ie;break;case 1:ce=ie;break;case 2:ue=ie;break;case 3:ke=ie;break;default:}}else{let e=74;let t=[me,de];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<26+(e+1)*l){switch(r){case 0:he=t[e];break;case 1:ce=t[e];break;case 2:ue=t[e];break;case 3:ke=t[e];break;default:}break}}}}let N=random(100);me=random(fe);ie=random(ne);de=random(ae);oe=random(le);if(N<16){se=oe}else{let e=84;let t=[me,de,ie];let l=e/t.length;for(let e=0;e<t.length;e++){if(N<16+(e+1)*l){se=t[e];break}}}for(let e=0;e<11;e++){let e=floor(random(1,88));while(q.includes(e)){e=floor(random(1,88))}q.push(e)}q.sort(function(e,t){return e-t});for(let r=0;r<11;r++){let o=random(100);me=random(fe);ie=random(ne);de=random(ae);oe=random(le);if(o<16){if(r==0){be=[oe]}else{be.push([oe])}}else{let e=84;let t=[me,de,ie];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<16+(e+1)*l){if(r==0){be=[t[e]]}else{be.push([t[e]])}break}}}}ge=be[10].flat();for(let e=0;e<_e;e++){let e=floor(random(1,88));while(ye.includes(e)){e=floor(random(1,88))}ye.push(e)}ye.sort(function(e,t){return e-t});oe=random(le);xe=oe}function ze(){U++;if(U%30===0){let e=random(100);let t=random(-1*(F/16.25),F/16.25+1);let l=random(-1*(w/65),w/65+1);if(e<33&&k>5){d=width/2+t;f=height/2+l}else{d=width/2;f=height/2}if(day()!=g){I=false;T++;g=day();for(let e=0;e<q.length;e++){if(T===q[e]){ge=be[e].flat();Se=int(random(11,38))}}let t,l,o;for(let e=0;e<ye.length;e++){if(T===ye[e]){t=int(random(1,361));l=int(random(50,87));o=int(random(5,19));n=[t,l,o];A=color(n[0],n[1],n[2]);t=int(random(1,361));l=int(random(50,89));o=int(random(50,83));c=[t,l,o];B=color(c[0],c[1],c[2])}}if(r%30===0&&r!=0){let o=random(100);me=random(fe);ie=random(ne);de=random(ae);if(o<26){ke=ie}else{let e=74;let t=[me,de];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<26+(e+1)*l){ke=t[e]}}}}for(let n=0;n<2;n++){let r=random(100);me=random(fe);ie=random(ne);de=random(ae);if(r<26){switch(n){case 0:if((day()==m||day()==P)&&day()!==i){let e=he;while(he==e){he=ie}e=he;i=day()}break;case 1:if(s>=R&&day()!==a){s=0;R=int(random(58,117));ce=ie;a=day()}break;default:}}else{let e=74;let l=[me,de];let o=e/l.length;for(let t=0;t<l.length;t++){if(r<26+(t+1)*o){switch(n){case 0:if((day()==m||day()==P)&&day()!==i){let e=he;while(he==e){he=l[t]}e=he;i=day()}break;case 1:if(s>=R&&day()!==a){s=0;R=int(random(58,117));ce=l[t];a=day()}break;default:}break}}}}if(day()==O||day()==W||day()==E||day()==M||day()==C){oe=random(le);xe=oe}}if(r%89===0&&r!=0&&!I){T=0;be=[];q=[];ye=[];_e=int(random(9,18));I=true;for(let e=0;e<11;e++){let e=floor(random(1,88));while(q.includes(e)){e=floor(random(1,88))}q.push(e)}q.sort(function(e,t){return e-t});for(let e=0;e<_e;e++){let e=floor(random(1,88));while(ye.includes(e)){e=floor(random(1,88))}ye.push(e)}ye.sort(function(e,t){return e-t});for(let r=0;r<11;r++){let o=random(100);me=random(fe);ie=random(ne);de=random(ae);oe=random(le);if(o<16){if(r==0){be=[oe]}else{be.push([oe])}}else{let e=84;let t=[me,de,ie];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<16+(e+1)*l){if(r==0){be=[t[e]]}else{be.push([t[e]])}break}}}}}if((hour()==12||hour()==0)&&_!==hour()){_=hour();let o=random(100);me=random(fe);ie=random(ne);de=random(ae);oe=random(le);if(o<16){se=oe}else{let e=84;let t=[me,de,ie];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<16+(e+1)*l){se=t[e];break}}}}if(p!==month()){p=month();z=year();if(month()!=2){m=int(random(1,16));P=int(random(16,30))}else{m=int(random(1,30));if(m==29&&z%4!=0){m=int(random(1,30))}P=42}O=int(random(1,7));W=int(random(7,13));E=int(random(13,19));M=int(random(19,25));C=int(random(25,29));if(month()==1){let o=random(100);me=random(fe);ie=random(ne);de=random(ae);if(o<26){ue=ie}else{let e=74;let t=[me,de];let l=e/t.length;for(let e=0;e<t.length;e++){if(o<26+(e+1)*l){ue=t[e]}}}}}Te();Ie();Pe();Oe();We();Ee();Me();Ce();Ve();Xe();if(U==4800){U=0}}}function Te(){if(l!=day()){l=day();let e=int(random(1,4));x[0]=x[0]+e;if(x[0]>360){x[0]=x[0]-360}v=color(x[0],x[1],x[2]);S[0]=S[0]+e;if(S[0]>360){S[0]=S[0]-360}J=color(S[0],S[1],S[2]);e=int(random(1,3));b[0]=b[0]+e;if(b[0]>360){b[0]=b[0]-360}D=color(b[0],b[1],b[2]);y[0]=y[0]+e;if(y[0]>360){y[0]=y[0]-360}G=color(y[0],y[1],y[2])}if(currentMinute!=minute()){currentMinute=minute();u[0]=u[0]+1;if(u[0]>360){u[0]=u[0]-360}H=color(u[0],u[1],u[2])}}function Ie(){textSize(Se);textFont("FreeSerif");fill(B);for(let e=0;e<450;e++){let e=random(ge);textFont("FreeSerif");if(te.includes(e)||ee.includes(e)){textFont("Symbola")}text(e,random(width),random(height))}fill(A);for(let e=0;e<6250;e++){bb0=random(ge);textFont("FreeSerif");if(te.includes(bb0)||ee.includes(bb0)){textFont("Symbola")}text(bb0,random(width),random(height))}}function Pe(){textSize(17);textFont("FreeSerif");fill(H,230);noStroke();let d=width/2;let f=height/1.99;let m=2.4*width/2;let s=2.5*height/2;let h=.4*width/2;let c=.5*height/2;let u=18;let x=floor((m-h)/u);let e=floor((s-c)/u);let b=d-x/2*u+u/2;let y=f-e/2*u+u/2;for(let a=0;a<x*e;a++){let e=b+a%x*u;let t=y+floor(a/x)*u;let l=random(se);if(se==te||se==ee){textFont("Symbola")}let o=dist(d,f,e,t);let r=map(o,h,m,0,1);let n=map(o,c,s,0,1);let i=(r+n)/3;if(random()<i){text(l,e,t)}}}function Oe(){textSize(9);textFont("FreeSerif");fill(0);noStroke();let d=width/2;let f=height/2;let m=F/3;let s=w/7.2;for(let e=0;e<4350;e++){let e=random(TWO_PI);let t=random(m);let l=random(s);let o=d+t*cos(e);let r=f+l*sin(e);let n=random(he);let i=dist(d,f,o,r);let a;if(i<s/3){a=map(i,0,s/1,1,.6)}else if(i<s){a=map(i,s/3,s,.4,1)}else{a=0}if(o<d-m/2||o>d+m/2){a*=map(abs(o-d),m/2,m,.2,1)}if(random()<a){fill($)}else{fill($)}text(n,o,r)}}function We(){textSize(7);textFont("FreeSerif");fill(190,170,0);noStroke();let t=0;let a=w/7;if(ne.includes(ce)){t=12500}else{t=8500}for(let e=0;e<t;e++){let e=random(TWO_PI);let t=random(a);let l=d+t*sin(e);let o=f+t*cos(e);let r=random(ce);let n=dist(d,f,l,o);let i;if(n<a/3){i=map(n,0,a/3,1,.2)}else if(n<a){i=map(n,a/3,a,.2,1)}else{i=0}if(random()<i){fill(v)}else{fill(v)}text(r,l,o)}}function Ee(){textSize(7);textFont("FreeSerif");fill(190,170,0);noStroke();let a=w/8;let t;if(ne.includes(ce)){t=3500}else{t=2e3}for(let e=0;e<t;e++){let e=random(TWO_PI);let t=random(a);let l=d+t*sin(e);let o=f+t*cos(e);let r=random(ce);let n=dist(d,f,l,o);let i;if(n<a/3){i=map(n,0,a/3,1,.2)}else if(n<a){i=map(n,a/3,a,.2,1)}else{i=0}if(random()<i){fill(D)}else{fill(G)}text(r,l,o)}}function Me(){textSize(17);textFont("FreeSerif");fill(J,190);noStroke();let n=w/8.5;let i=0;if(xe==Fe){i=-6;n=w/9.5}else{i=-5}if(xe==te||xe==ee){textFont("Symbola")}for(let e=0;e<35;e++){let e=random(TWO_PI);let t=random(n);let l=d+t*cos(e);let o=f+t*sin(e);let r=random(xe);text(r,l+i,o+i);text(r,l+i+1,o+i+1)}}function Ce(){textSize(7);textFont("FreeSerif");fill(K);noStroke();let e=18;let t=3800;let l=random(100);let o=0;if(l<24&&k>5){o=random(-3,3);e=e+o}else{if(h<5){e=15.5}else{e=18}}if(h==3){e=15;t=3e3}if(h==4){e=15;t=3300}if(ue==we){t=6600}let r=w/e;let n=TWO_PI/h;let i=-PI/2;let a=[];for(let l=0;l<h;l++){let e=d+r*cos(i+l*n);let t=f+r*sin(i+l*n);a.push(createVector(e,t))}for(let e=0;e<t;e++){let e=Re(a);let t=random(ue);text(t,e.x,e.y)}}function Re(l){let o=F;let r=0;let n=w;let i=0;for(let t=0;t<l.length;t++){let e=l[t];if(e.x<o)o=e.x;if(e.x>r)r=e.x;if(e.y<n)n=e.y;if(e.y>i)i=e.y}let t=false;let a=1e3;let d;for(let e=0;e<a&&!t;e++){d=createVector(random(o,r),random(n,i));t=Ne(d,l)}return d}function Ne(r,n){let i=false;for(let l=0,o=n.length-1;l<n.length;o=l++){let e=n[l];let t=n[o];if(e.y>r.y!=t.y>r.y&&r.x<(t.x-e.x)*(r.y-e.y)/(t.y-e.y)+e.x){i=!i}}return i}function Ve(){textSize(7);fill(A);noStroke();textFont("FreeSerif");let e=.2;let s=width/2;let h=height/2;k=random(100);if(k<5){e=.005}else{e=.2}let c=.69*F/2;let u=.35*w/2;let x=.69*F/2;let b=e*w/2;let y=(c-x)/2;let S=(u-b)/2;for(let e=0;e<1e4;e++){let e=random(TWO_PI);let t=random(x,c);let l=random(b,u);let o=s+t*cos(e);let r=h+l*sin(e);let n=random(ke);let i=floor((o-s)/y)+1;let a=floor((r-h)/S)+1;let d=map(abs(i),1,2,.2,1);let f=map(abs(a),1,2,.2,1);let m=(d+f)/2;if(random()<m){text(n,o,r)}}}function Xe(){let e;let t;let l;if(day()!==o){o=day();r++;s++;e=false;t=false;l=false}if(r%2===0&&r!=0&&!e){N=random(re);e=true}if(r%7===0&&r!=0&&!t){V=random(re);t=true}if(r%17===0&&r!=0&&!l){X=random(re);l=true}textSize((height/10+width/10)/2);textFont("Symbola");textAlign(CENTER,CENTER);fill(42,0,255,204);text(N,width/2,height/6);text(V,width/5,height/1.25);text(X,width/1.25,height/1.25)}