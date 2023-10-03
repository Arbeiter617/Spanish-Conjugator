var spanishWord = "";

var prompt1;

var prompt2;

var conjugationVariable;
var completedVariable;
var completedVariable2;

var backupResult;

var spanishVerbsAvailable = ["empezar", "Querer", "pensar", "entender", "mostrar", "preferir", "poder", "dormir"];

var conjugation = {
    empezar: "ie",
    Querer: "ie",
    pensar: "ie",
  entender: "ie",
  mostrar: "ue",
  preferir: "ie",
  poder: "ue",
  dormir: "ue",  
};

var letterReplacement = {
    empezar: "e",
    Querer: "e",
    pensar: "e",
  entender: "e",
  mostrar: "o",
  preferir: "e",
  poder: "o",
  dormir: "o",  
};
//subject replacement objs//
var subjectReplacementAr = {
    yo: "o ",
    tu: "as",
    el: "a ",
  ellos: "an",
  vosotros: "ais",
  nosotros: "amos", 
};

var subjectReplacementEr = {
    yo: "o ",
    tu: "es",
    el: "e ",
  ellos: "en",
  vosotros: "eis",
  nosotros: "emos", 
};

var subjectReplacementIr = {
    yo: "o ",
    tu: "es",
    el: "e ",
  ellos: "en",
  vosotros: "is",
  nosotros: "imos", 
};

var originalEndingER = {
    er: "er", 
};
////////////////



function replaceCharacter(string, index, replacement) {
  return (
    string.slice(0, index) +
    replacement +
    completedVariable.slice(index + replacement.length)
  );
}





function spanishWordTester(conjugation, spanishVerbsAvailable) {
  prompt1 = prompt("Put in a spanish verb");
  
  
  if(spanishVerbsAvailable.includes(prompt1)) {
    //alert(prompt+conjugation[prompt]);
    
    let firstChar = prompt1.charAt(0);
    let length = prompt1.length;
    
    //replace the letters//
    conjugationVariable = conjugation[prompt1];
    
    
    
    if(firstChar !== letterReplacement[prompt1]) {
      completedVariable = prompt1.replace(letterReplacement[prompt1], conjugation[prompt1]);
    } else {
      //alert("undefined error");
      
      const backupResult = prompt1.replace(prompt1[0], '?');
      //console.log(backupResult);
      
      const backupResult2 = backupResult.replace(letterReplacement[prompt1], conjugation[prompt1]);
      
      completedVariable = backupResult2.replace(backupResult2[0], letterReplacement[prompt1]);
      
    }
    
    
    //alert("Stem Has Been Changed: " + completedVariable);
    
    document.getElementById("player").innerHTML =
    "Stem Has Been Changed: " + completedVariable + "!";
    
    prompt2 = prompt("Subject");
    
    if(completedVariable.includes("er")) {
       //er conjugation//
        let length2 = completedVariable.length;
        completedVariable2 = replaceCharacter(completedVariable, length - 1, subjectReplacementEr[prompt2]);
      
      
       //alert("Your Final Verb Is: " + completedVariable2);
      
      document.getElementById("conj").innerHTML =
    "Your Final Verb Is: " + completedVariable2;
      
    } else if(completedVariable.includes("ar")) {
      //ar conjugation//
        length2 = completedVariable.length;
        completedVariable2 = replaceCharacter(completedVariable, length - 1, subjectReplacementAr[prompt2]);
        //alert("Your Final Verb Is: " + completedVariable2);
      
      document.getElementById("conj").innerHTML =
    "Your Final Verb Is: " + completedVariable2;
      
    } else if(completedVariable.includes("ir")) {
      //ir conjugation//
        length2 = completedVariable.length;
        completedVariable2 = replaceCharacter(completedVariable, length - 1, subjectReplacementIr[prompt2]);
      //alert("Your Final Verb Is: " + completedVariable2);
      
      document.getElementById("conj").innerHTML =
    "Your Final Verb Is: " + completedVariable2;
      
    } else {
      //error//
      alert("Something is wrong again");
      document.getElementById("error").innerHTML =
    "ERROR 404: FALSE INPUT";
    }   
    
  } else {
    alert("Something is wrong");
    document.getElementById("error").innerHTML =
    "ERROR 404: FALSE INPUT";
  }
  
}

spanishWordTester(conjugation, spanishVerbsAvailable);