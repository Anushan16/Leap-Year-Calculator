function isLeap(year) {
    
    if (year % 4 == 0 ){
        if (year % 100 == 0  ) {
            if (year % 4 == 0) {
                 return(message("True"))
            
            }
            
            else {
                return(message("False"))
            }
        }
        else {
           return(message("True"))
        }
    }
    
    
    else {
        return(message("False"))
    }

// function to print out the appropriate message
function message(arg) {
    if (arg == "True"){
        return ("Leap year.")
    }
    
    else if (arg == "False") {
        return("Not leap year.")
    }
    
    else {
        return  ("Not a valid answer")
    }
}
    


}

// Test Cases
document.write(isLeap(2021))

