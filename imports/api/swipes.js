
var xDown = null;                                                        
var yDown = null; 

var startTime = null;

var dir = null;

export function handleTouchStart(e) {                     
console.log('start');                    
    xDown = e.touches[0].clientX;                                      
    yDown = e.touches[0].clientY;

    startTime = new Date();                                      
};

export function handleTouchEnd(e){
    console.log('end');
    var endTime = new Date();
    var diffTime = endTime.getTime() - startTime.getTime();

    if (diffTime < 200){
        console.log(diffTime);
        return dir;
    }

}


export function handleTouchMove(e) {
    console.log('move');
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = e.touches[0].clientX;                                    
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;


    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            dir = {which: 39} 
            //create object so that handleRotate can access this same way as keyboard event
           

        } else {
            dir = {which: 37} 
            /* right swipe */


        }                       
    } else {
        if ( yDiff > 0 ) {
            dir = {which: 40} 
            /* up swipe */ 


        } else { 
            dir = {which: 38} 
            /* down swipe */


        }                                                                 
    }
    /* reset values */               
    xDown = null;
    yDown = null;                                             
};