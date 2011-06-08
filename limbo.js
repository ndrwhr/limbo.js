(function(level){
    try {
        (function dream(){
            return dream(level++);
        })();
    } catch(e){
        console.log(level);
    }
})(1);
