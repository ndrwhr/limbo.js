(function(level){
    try {
        (function dream(){
            return dream(level++);
        })();
    } catch(e){
        alert(level + ' levels deep!');
    }
})(1);
