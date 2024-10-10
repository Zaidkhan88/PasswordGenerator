import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [password,setPass] = useState('')
  const [lengthh,setLength] = useState(8);
  const [char,setChar] = useState(false);
  const [num,setNum] = useState(false)

  const passwordgenerator = useCallback(()=>{
    let pass=''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(char){
      str+='@#$%%^&*'
    }
    if(num){
      str+='1234567890'
    }
    while(pass.length<lengthh){
      let idx = Math.floor(Math.random()*str.length)
      
      pass+=str[idx]
    }
    // {console.log(idx,'idx')}
    // {console.log(pass,'pass')}
    setPass(pass)
     

  },[lengthh,num,char])
  useEffect(()=>{
    passwordgenerator();
  },[lengthh,char,num])


  return (
    <>
    <div className='flex justify-center mt-32'>
      
      <div className='flex flex-col border border-zinc-950 rounded-md justify-center  p-10 w-1/2 h-1/2 '>
{/* {console.log(password)} */}
        <input type="text"
        className='border border-black w-1/2'
        value={password}
        readOnly />
        
        <div className='flex gap-2'>
          <input type="range"
           max={100} min={8} 
           value={lengthh} 
           onChange={
            (e)=>setLength(parseInt(e.target.value))
            }/>
          <label >{lengthh} length</label>
          <input 
          type="checkbox" 
          checked={char}
          onChange={()=>setChar(!char)}
            />
          <label >characters</label>
          <input 
          type="checkbox"
          checked={num} 
          onChange={()=>setNum(!num)} />
          <label >numbers</label>
        </div>
      </div></div>
      
    </>
  )
}

export default App
