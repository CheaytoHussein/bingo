//naming the inputs b1->b25 and p1->p25
for(var i=1;i<=25;i++){
    var c = 'b' + i;
    var d = 'p' + i;
    c = document.getElementById(c);
    d = document.getElementById(d);
}
var bs = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25];
var ps = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25];
var values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const random_values = _.shuffle(values);//shuffling the array values
const random_values2 = _.shuffle(values);//shuffling the array values again
for(i=0;i<=24;i++){
    //setting the values of the input boxes
    bs[i].value = random_values[i];
    bs[i].title = random_values[i];
    ps[i].value = random_values2[i];
    ps[i].title = random_values2[i];
}
var scroll = 0 
function func(element){
    scroll++
    element.classList.toggle("flip");
    element.value = "X";
    element.disabled = true;
    if(scroll%2 != 0 && bs.indexOf(element) != -1 ){
        document.body.style.filter = "blur(120px)";
        scrollTo(0,2304);
        for(let i=0;i<=24;i++){
            bs[i].title = "";
            ps[i].title = "";
        }
        document.body.style.pointerEvents = "none";
        setTimeout(()=>{
            document.body.style.filter = "blur(0px)"; 
            for(let i=0;i<=24;i++){
                bs[i].title = random_values[i]
                ps[i].title = random_values2[i]
            }
            document.body.style.pointerEvents = "auto";
        },3500)
    }
    else if(scroll%2 != 0 && bs.indexOf(element) == -1 ){
        document.body.style.filter = "blur(120px)";
        scrollTo(0,0);
        for(let i=0;i<=24;i++){
            bs[i].title = ""
            ps[i].title = ""
        }
        document.body.style.pointerEvents = "none";
        setTimeout(()=>{
            document.body.style.filter = "blur(0px)";
            for(let i=0;i<=24;i++){
                bs[i].title = random_values[i]
                ps[i].title = random_values2[i]
            }
            document.body.style.pointerEvents = "auto";
        },3500)
    }
    let matrixOne = [
        [b1,b2,b3,b4,b5],
        [b6,b7,b8,b9,b10],
        [b11,b12,b13,b14,b15],
        [b16,b17,b18,b19,b20],
        [b21,b22,b23,b24,b25]
    ]
    let matrixTwo = [
        [p1,p2,p3,p4,p5],
        [p6,p7,p8,p9,p10],
        [p11,p12,p13,p14,p15],
        [p16,p17,p18,p19,p20],
        [p21,p22,p23,p24,p25]
    ]
    let h1 = document.getElementById("text1");
    let h2 = document.getElementById("text2");
    let winVarOne = 0;
    let winVarTwo = 0;
    //setting the win conditions for matrixOne
    for(rowNumber=0;rowNumber<5;rowNumber++){
        row = 0
        while(row<5 && matrixOne[rowNumber][row].disabled){
            row++;
            if(row==5){
                winVarOne += 1;
            }
        }
    }//checks if the row buttons are all pressed in matrixOne
    for(columnNum=0;columnNum<5;columnNum++){
        column = 0;
        while(column<5 && matrixOne[column][columnNum].disabled){
            column++;
            if(column==5){
                winVarOne += 1;
            }
        }
    }//checks if the column buttons are all pressed in matrixOne
    diagonal = 0;
    while(diagonal<5 && matrixOne[diagonal][diagonal].disabled){
        diagonal++;
        if(diagonal==5){
            winVarOne += 1;
        }
    }//check if the descending diagonal button are all pressed in matrixOne 
    let j=5;
    while(j<=21 && document.getElementById('b'+j).disabled){
        j+=4;
        if(j==21){
            winVarOne += 1;
        }
    }//checks if all ascending diagonal buttons are pressed in matrixOne
    //
    for(rowNumberTwo=0;rowNumberTwo<5;rowNumberTwo++){
        let rowTwo = 0;
        while(rowTwo<5 && matrixTwo[rowNumberTwo][rowTwo].disabled){
            rowTwo++;
            if(rowTwo==5){
                winVarTwo += 1;
            }
        }
    }//checks if the row buttons are all pressed in matrixTwo
    for(let columnNumTwo=0;columnNumTwo<5;columnNumTwo++){
        let columnTwo = 0;
        while(columnTwo<5 && matrixTwo[columnTwo][columnNumTwo].disabled){
            columnTwo++;
            if(columnTwo==5){
                winVarTwo += 1;
            }
        }
    }//checks if the column buttons are all pressed in matrixTwo
    diagonalTwo = 0;
    while(diagonalTwo<5 && matrixTwo[diagonalTwo][diagonalTwo].disabled){
        diagonalTwo++;
        if(diagonalTwo==5){
            winVarTwo += 1;
        }
    }
    for(let k=5; k<=21 && document.getElementById('p'+k).disabled ; k +=4){
        if(k==21){
            winVarTwo +=1;
        }
    }//checks if all ascending diagonal buttons are pressed in matrixTwo
    //
    var title = ['B I N G O ','ɸ I N G O','ɸ ɸ N G O','ɸ ɸ ɸ G O','ɸ ɸ ɸ ɸ O','ɸ ɸ ɸ ɸ ɸ'];
    h1.innerHTML = title[winVarOne];
    h2.innerHTML = title[winVarTwo];
    if(h1.innerHTML==title[5]){
        setTimeout(()=>{alert('playerOne won')},600)
        for(let i=0;i<=24;i++){
            bs[i].disabled = true;
            ps[i].disabled = true;
        }
    }
    if(h2.innerHTML==title[5]){
        setTimeout(()=>{alert(' won')},600)
        for(let i=0;i<=24;i++){
            bs[i].disabled = true;
            ps[i].disabled = true;
        }
    }
}