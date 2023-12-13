function receivesAFunction(aFunction){
    aFunction();
}

function returnsANamedFunction(namedFunction){
   return function namedFunction(){
    return true;
   }
}

function returnsAnAnonymousFunction(anonymousFunction){
    return function(){
    }
}
