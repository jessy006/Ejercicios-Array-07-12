"user strict"

let frase = "vida solo hay una";
let numWord= 2
let count= 0;
let space= " ";
let start= 0;

for (let i=0; i<frase.length; i++){
    if (frase [i]== space){

        count++;
    
        if (count===numWord){
            end = i;
        
        }
        if (count===numWord-1){
            start = i;
       
        }

    } 

}
alert (frase.substring(start,end ));