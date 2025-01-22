


export const executeCode=async (code:string,language:'java' | 'cpp')=>{
    
    try {
        const req= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${language}/`,{
            method:'POST',
            body:JSON.stringify({body:code,language,userId:"abcId"}),
            headers:{
                'Content-Type':'application/json'
            }
        })

        
        
        const res=await req.json()
        console.log('res recieved !!',res);
        
        return res;
    
    } catch (error) {
        console.log(error);
        
        if(error instanceof TypeError){
            throw new Error("Server error , try again later !!")
        }
        throw new Error("Error in connecting to the server , Try again later !!")
    }


}