$(document).ready(function(){
  $("#submitBtn").on("click", function(){
    
   // $("#wikiEntries").html("first test");
    
    
    var wikiURLStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=";   
        
    var entryStr =$('#seachWiki').val(); 

    //$("#wikiEntries").html("2nd test " + entryStr);
    
   // alert("entryStr1: " + entryStr);
    
    if(entryStr===""){
       $("#wikiEntries").html("Please enter your search words.");
    }
    else {
    entryStr = entryStr.replace(" ", "%20")  + "&callback=?";
    
    wikiURLStr += entryStr;
    
    console.log(wikiURLStr);
    
    $.getJSON(wikiURLStr, function(json){
      
  console.log(json);  
  var finalDisplay="";
      
      for(var i = 0; i < json.query.search.length; i++){
      //alert(i);
var title= json.query.search[i].title;
           
var snippet = json.query.search[i].snippet;
 //alert(title + " " + snippet);
 
   finalDisplay +=  "<h4>" + title + "</h4>" + snippet;    
        
//$("#wikiEntries").html("3rd test");     
      //$("#wikiEntries").html(JSON.stringify(json));   
 }  
  
     // $("#wikiEntries").html("4th test");
      
     // alert("entryStr: " + entryStr);
      
      
 //alert("finalDisplay: " + finalDisplay);

//$("#wikiEntries").html("5th test");      
//$("#wikiEntries").html("testing"); 
      $("#wikiEntries").html(finalDisplay); 
      
    });  
   
    
    }
    
    
  });
});