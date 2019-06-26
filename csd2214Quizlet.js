function waitingFn(TimeINMs){

    const futureTime =Date.now() + TimeINMs;

  while (futureTime> Date.now()){
    //while
  }

}

waitingFn(3000);

