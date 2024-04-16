function closures(){
    
    count = 0
    function addition(){
        document.getElementById('add')
        .addEventListener('click',function(){
            count+=1
            console.log(count)
        })
    }
    function subtraction(){
        document.getElementById('sub').
        addEventListener('click',function(){
            if (count>0)[
                count = count-1
            ]
            else{
                console.log("YOUR CART IS EMPTY")
            }
            console.log(count)
        })
    }
    addition()
    subtraction()    
}

closures()