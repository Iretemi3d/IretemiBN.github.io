function displayLarger(imge)
{imge.style.width="250px";
imge.style.height="250px";
}


function displaySmaller(imge)
{imge.style.width="200px";
imge.style.height="200px";
}

function coloor(imge)
{imge.style.backgroundColor="#031029";
}



function start(){

const body = document.querySelector('body');
const date = new Date();
const day = date.getDate();
var perc = day * 3.57142857143

var elem = document.getElementById("progress");
elem.setAttribute("value", perc); 
elem.setAttribute("max", "100"); 

}


