import React, { useState, useEffect } from 'react';




const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
   let timer :NodeJS.Timeout

    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => 
      clearInterval(timer);
    }
  , [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  

   return(
<div className='flex flex-col min-h-screen 
items-center justify-center bg-gradient-to-br 
from-white to-black'>

<img src='https://img.icons8.com/ios/256/000000/stopwatch.png'/>

<h1 className='text-4xl font-extrabold uppercase mb-6 text-black'>Countdown Timer</h1>
<input
type='number'
className='boader-2 border-white--950 bg-transparent p-3
mb-6 text-white-500 text xl rounded text-bold-200 text-black bg-white '
placeholder='Enter Time in seconds'
value={time > 0 ? time : ''}
onChange={(e)=>setTime(Number(e.target.value))}
/>    
   <div className='text-4xl font-semi uppercase mb-6 text-black'>
    {remainingTime } seconds remaining
    </div>


<div>
    <button
onClick={handleStart}
className='text-black-300 px-8 py-4 rounded sm font normal
bg-gradient-to-r from-violet-500 to-fuchsia-500
hover:from-violet-500 hover:to-fuchsia-200'>
Start
</button>


  <button
onClick={handlePause }
className='text-black-500 px-8 py-4 rounded sm font normal
bg-gradient-to-r from-red-500  to-pink-500
hover:from-red-500 hover:to-pink-700'>
Pause
</button>

<button
onClick={handleReset }
className='text-black-500 px-8 py-4 rounded sm font normal
bg-gradient-to-r from-orange-500 to-yellow-500
hover:from-orange-500 hover:to-yellow-700'>
Reset
</button>
<footer>
  <h1 className='text-center'>presented by: @Rukhsana Khan</h1>
</footer>
  </div>
</div>

   )

}
export default CountdownTimer;
