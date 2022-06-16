function activity(s)
{
    var ukm = false;
    switch (s)
    {
        case "youtube":
            ukm = true;
            break;
        
        case "chess":
            ukm = true;
            break;

        case "poker":
            ukm = true;    
            break;

        case "betrayal":
            ukm = true;
            break;

        case "fishing":
            ukm = true;
            break; 
        
        case "lettertile":
            ukm = true;
            break;  
            
        case "wordsnack":
            ukm = true;
            break; 
            
        case "doodlecrew":
            ukm = true;
            break; 
            
        case "spellcast":
            ukm = true;
            break;   
            
        case "awkword":
            ukm = true;
            break;   
            
        case "puttparty":
            ukm = true;
            break;   
            
        case "sketchheads":
            ukm = true;
            break;  
            
        case "ocho":
            ukm = true;
            break;    
    }
    
    if (ukm == false) return "xamlon";
}

exports.activity = activity;