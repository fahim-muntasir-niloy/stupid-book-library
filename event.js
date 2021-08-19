// declaring constants

let a = document.getElementById("Author")
let b = document.getElementById("Book")
let d = document.getElementById("Date")
let btn = document.getElementById("submitBtn")

let bookList = document.getElementById("book-list")

btn.addEventListener('click', function(){
    
    //basic validation of input
    if (a.value == "" || b.value =="" || d.value ==""){
        alert("Data Missing, Check again")
    }
    else{
        let newRow = document.createElement('tr')
    

    //inserting data in table
    let newA = document.createElement("td")
    newA.innerHTML = a.value;
    newRow.appendChild(newA);

    let newB = document.createElement("td")
    newB.innerHTML = b.value;
    newRow.appendChild(newB);

    let newD = document.createElement("td")
    newD.innerHTML = d.value;
    newRow.appendChild(newD);

    //displaying data
    bookList.appendChild(newRow)
}
})