function charLocation(tex, wid, ch) {
    var newArray = [];
    var locations = [];
    var lastRowChars = tex.split("").length % wid;
    var neededChars = wid - lastRowChars;
    console.log(neededChars);
    
    //split into arrays the length of wid
    do {newArray.push(tex.substring(0, wid)) }
    while( (tex = tex.substring(wid, tex.length)) != "" );
    
    //reverse every other line
    for (var i = 0; i < newArray.length; i++) {
        if (isOdd(i))
            newArray[i] = newArray[i].split("").reverse().join("");
    }

    console.log(newArray);
    //find locations, and push to an array
    for (var j = 0; j < newArray.length; j++) {
        var letterArray = newArray[j].split("");
        
        var lastIndex = 0;
        
        for (k = 0; k <letterArray.length; k++){
            if (j == newArray.length -1 && j!=0 && letterArray[k] == ch && isOdd(j)) {
                var newK = k +neededChars;
                locations.push([j, newK]);
            }
                
            else if (letterArray[k] == ch)
                locations.push([j, k]);
        }
        
    }
    //console.log(locations)
    return locations;
    
}

function isOdd(num) { return num % 2;}
