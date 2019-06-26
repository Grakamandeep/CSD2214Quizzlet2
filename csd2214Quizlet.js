function waitingFn(TimeINMs){

    const futureTime =Date.now() + TimeINMs;

  while (futureTime> Date.now()){
    //while
  }

}

debugger;
waitingFn(3000);

