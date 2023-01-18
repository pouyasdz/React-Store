export function handleHover(setter:any,primary:boolean){
    if(!primary) return;
    setter(true)
}

export function handleLeft(setter:any,primary:boolean){
    if(!primary) return;
    setter(false)
}