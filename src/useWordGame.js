import{useState, useRef, useEffect} from "react"

function useWordGame(startingTime = 10 ){

    const [text, setText] = useState("");
    const [timeRemaining, settimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
  
    function handleChange(e) {
      setText(e.target.value);
    }
  
    function countWords(text) {
      const wordArr = text.trim().split(" ");
      console.log(wordArr.filter((word) => word !== "").length);
      return wordArr.filter((word) => word !== "").length;
    }
  
  
  function startGame(){
    settimeRemaining(startingTime)
    setIsTimeRunning(true)
    setText("")
   textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  
  function endGame(){
    setIsTimeRunning(false)
    setWordCount(countWords(text))
  }
  
    useEffect(() => {
  
        if (isTimeRunning && timeRemaining > 0) {
          setTimeout(() => {
            settimeRemaining((time) => time - 1);
          }, 1000);
        } else if(timeRemaining === 0){
          endGame()
       
        }
  
    }, [timeRemaining, isTimeRunning]);

    return{textBoxRef,text,handleChange,isTimeRunning,timeRemaining, wordCount,startGame,}
}

export default useWordGame

