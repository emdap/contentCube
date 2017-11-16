
var xDown = null;                                                        
var yDown = null;    


export function handleTouchStart(e) {                                         
    xDown = e.touches[0].clientX;                                      
    yDown = e.touches[0].clientY;

                                           
console.log(yDown, xDown);                                      
};    


export function handleTouchMove(e) {
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
            var dir = {which: 39} 
            //create object so that handleRotate can access this same way as keyboard event
           

        } else {
            var dir = {which: 37} 
            /* right swipe */


        }                       
    } else {
        if ( yDiff > 0 ) {
            var dir = {which: 40} 
            /* up swipe */ 


        } else { 
            var dir = {which: 38} 
            /* down swipe */


        }                                                                 
    }
    /* reset values */               
    xDown = null;
    yDown = null;

    return dir;                                             
};