export const jsonNewReference = (object : Object) => {
    try{
        console.log(object)
        return JSON.parse(JSON.stringify(object));
    }catch(e){
        return {}
    }
    
}