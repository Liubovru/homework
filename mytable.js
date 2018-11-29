//script for multiplication table output
const newDiv = document.createElement('div');// div-container for table
newDiv.setAttribute('id','container'); //set id name for div
document.body.appendChild(newDiv);
for (let colNum = 1; colNum <= 10; colNum++) {
multTable(colNum);
}
// function multTable() create and output list for one column
//  column - number of column (list);
function multTable(colNum) {
//create a list  
let ul = document.createElement('ul');
ul.setAttribute('class','list');
newDiv.appendChild(ul);
for(i = 1; i <= 10; i++) //create 10 rows for col.
    {
        li=document.createElement('li');
        li.innerHTML= colNum + " x " + i + " = " + colNum*i;
        ul.appendChild(li);
    }
}

