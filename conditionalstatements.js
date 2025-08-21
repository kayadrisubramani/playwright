function launchBrowser(browserName)
{
    if (browserName==="chrome"){
        console.log("Open chrome browser")
        }
        else{  
        console.log("Move to different browser")
        }
}
launchBrowser("chrome")
launchBrowser("Safari")

function functionName(testType){
switch(testType){
        case "Sanity":
            console.log("Sanity testing")
            break
        case "Regression":
            console.log("Regression testing")
            break
        case "Smoke":
            console.log("smoke testing") 
        default: 
        console.log("Default smoke test")    
}

}
functionName ("Regression")
functionName ("Other")

