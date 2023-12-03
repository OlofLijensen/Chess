function Openfunction() {
    document.getElementById("Menu").style.width="200px";
    document.getElementById("Menu").style.height="120%"; //Over shoot since i have scroll prevention//
    document.getElementById("Menu2").style.margin ="0";
    window.onscroll=function(){window.scrollTo(0, 0);};    //When detected scroll scroll back to 0,0//
}

function Closefunction() {
    document.getElementById("Menu").style.width="0px";
    document.getElementById("Menu").style.height="0px";
    document.getElementById("Menu2").style.margin ="100px";
    window.onscroll=null
}


let u = 0 //dena räknar för varje åtta steg//
const container = document.querySelector('.gameboard'); //vart ska allt//


for (let i=1; i < 73; i++){
    u++
    //gate om vi har tagit 8 steg ökas vi med 2 oberoend om index är udda eller jämn// 
    if(u%8==0){
        if(i%2==0){
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.classList.add('box1');
            boxDiv.classList.add(i);
            boxDiv.draggable;
            container.appendChild(boxDiv);

            i++
            u=0;
            
        }
        else{
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.classList.add('box2');
            boxDiv.classList.add(i);
            container.appendChild(boxDiv);
            i++
            u=0;
        }
    }
    //om inte 8steg kolla jämn och udda//
    else{
        if(i%2==0){
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.classList.add('box1');
            boxDiv.classList.add(i);
            container.appendChild(boxDiv);
            
        }
        else{
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.classList.add('box2');
            boxDiv.classList.add(i);
            container.appendChild(boxDiv);
        }
    }    
}


//är också en init för board där alla saker samt drag and dropp är då alla referenser den behöver är inom denna//
//och om en ny resetboard körs kan drag andr dropp inte hitta infon den behöver //
function resetboard() {
    const box = document.querySelectorAll('.box');
    box.forEach(box =>{
        if (box.hasChildNodes()){
            box.removeChild(box.childNodes[0]);
        }else{}
    })
    var BRook = document.createElement("img");
    BRook.src = "pics/Chess_rdt60.png";
    BRook.classList.add("black");
    BRook.classList.add("img");

    var div1 = document.getElementsByClassName("1")[0];
    div1.appendChild(BRook);



    var Bknight = document.createElement("img");
    Bknight.src = "pics/Chess_ndt60.png";
    Bknight.classList.add("black");
    Bknight.classList.add("img");

    var div1 = document.getElementsByClassName("2")[0];
    div1.appendChild(Bknight);


    var Bbishop = document.createElement("img");
    Bbishop.src = "pics/Chess_bdt60.png";
    Bbishop.classList.add("black");
    Bbishop.classList.add("img");

    var div1 = document.getElementsByClassName("3")[0];
    div1.appendChild(Bbishop);


    var Bqueen = document.createElement("img");
    Bqueen.src = "pics/Chess_qdt60.png";
    Bqueen.classList.add("black");
    Bqueen.classList.add("img");

    var div1 = document.getElementsByClassName("4")[0];
    div1.appendChild(Bqueen);

    var Bking = document.createElement("img");
    Bking.src = "pics/Chess_kdt60.png";
    Bking.classList.add("black");
    Bking.classList.add("importantB");
    Bking.classList.add("img");

    var div1 = document.getElementsByClassName("5")[0];
    div1.appendChild(Bking);
  
    var Bbishop = document.createElement("img");
    Bbishop.src = "pics/Chess_bdt60.png";
    Bbishop.classList.add("black");
    Bbishop.classList.add("img");

    var div1 = document.getElementsByClassName("6")[0];
    div1.appendChild(Bbishop);

    var Bknight = document.createElement("img");
    Bknight.src = "pics/Chess_ndt60.png";
    Bknight.classList.add("black");
    Bknight.classList.add("img");

    var div1 = document.getElementsByClassName("7")[0];
    div1.appendChild(Bknight);

    var BRook = document.createElement("img");
    BRook.src = "pics/Chess_rdt60.png";
    BRook.classList.add("black");
    BRook.classList.add("img");

    var div1 = document.getElementsByClassName("8")[0];
    div1.appendChild(BRook);


    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("10")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("11")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("12")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("13")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("14")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("15")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("16")[0];
    div1.appendChild(Bpawn);

    var Bpawn = document.createElement("img");
    Bpawn.src = "pics/Chess_pdt60.png";
    Bpawn.classList.add("black");
    Bpawn.classList.add("img");

    var div1 = document.getElementsByClassName("17")[0];
    div1.appendChild(Bpawn);


    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("55")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("56")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img"); 
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("57")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("58")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("59")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");

    var div1 = document.getElementsByClassName("60")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");


    var div1 = document.getElementsByClassName("61")[0];
    div1.appendChild(pawn);

    var pawn = document.createElement("img");
    pawn.src = "pics/Chess_plt60.png";
    pawn.classList.add("white");
    pawn.classList.add("img");


    var div1 = document.getElementsByClassName("62")[0];
    div1.appendChild(pawn);



    var rook = document.createElement("img");
    rook.src = "pics/Chess_rlt60.png";
    rook.classList.add("white");
    rook.classList.add("img");

    var div1 = document.getElementsByClassName("64")[0];
    div1.appendChild(rook);



    var knight = document.createElement("img");
    knight.src = "pics/Chess_nlt60.png";
    knight.classList.add("white");
    knight.classList.add("img");


    var div1 = document.getElementsByClassName("65")[0];
    div1.appendChild(knight);



    var bishop = document.createElement("img");
    bishop.src = "pics/Chess_blt60.png";
    bishop.classList.add("white");
    bishop.classList.add("img");

    var div1 = document.getElementsByClassName("66")[0];
    div1.appendChild(bishop);


    var queen = document.createElement("img");
    queen.src = "pics/Chess_qlt60.png";
    queen.classList.add("white");
    queen.classList.add("img");


    var div1 = document.getElementsByClassName("67")[0];
    div1.appendChild(queen);


    var king = document.createElement("img");
    king.src = "pics/Chess_klt60.png";
    king.classList.add("white");
    king.classList.add("importantW");
    king.classList.add("img");


    var div1 = document.getElementsByClassName("68")[0];
    div1.appendChild(king);

    var bishop = document.createElement("img");
    bishop.src = "pics/Chess_blt60.png";
    bishop.classList.add("white");
    bishop.classList.add("img");


    var div1 = document.getElementsByClassName("69")[0];
    div1.appendChild(bishop);

    var knight = document.createElement("img");
    knight.src = "pics/Chess_nlt60.png";
    knight.classList.add("white");
    knight.classList.add("img");


    var div1 = document.getElementsByClassName("70")[0];
    div1.appendChild(knight);

    var rook = document.createElement("img");
    rook.src = "pics/Chess_rlt60.png";
    rook.classList.add("white");
    rook.classList.add("img");


    var div1 = document.getElementsByClassName("71")[0];
    div1.appendChild(rook);


    for(let a=0; a<32; a++){
        document.getElementsByClassName("img")[a].setAttribute("draggable", "true")
    }

    const imgs = document.querySelectorAll('.img');

    //drag and dropp//
    imgs.forEach(img => {
        img.addEventListener('dragstart', () => {
          //specefierar vilken img som ska draggas//
          img.classList.add('dragging')
        })
     
        img.addEventListener('dragend', () => {
          img.classList.remove('dragging')
        })
    })
    
    box.forEach(box =>{
        //tillåter drag and drop//
        box.addEventListener('dragover', e =>{
            e.preventDefault();
        })
        box.addEventListener('drop', () =>{
            const item = document.getElementsByClassName('dragging')[0];
            //om den behöver ta bort förgående child//
            if(box.hasChildNodes()){
                box.removeChild(box.firstElementChild);
                box.prepend(item)
            }
            else{
                box.prepend(item)
            }
        })
    })
}
resetboard();