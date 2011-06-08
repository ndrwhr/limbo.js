(function(){
    var level = 1;
    try {
        (function dream(){
            return dream(level++);
        })();
    } catch(e){
        console.log(level);
    }
})();
