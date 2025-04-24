const delivery=(days)=>{
days.forEach(day=>{
switch(day){
    case'Mon':
    console.log(`${day} is scheduled for morning` );
    break;
    case'Tue':
    console.log(`${day} is scheduled for afternoon `);
    break;
    case 'Fri':
        console.log(`${day} is scheduled for evening `);
        break;

}
});



};
const days=["Mon","Tue","Fri"];
delivery(days);

const bookStatus=(statuss)=>{
for(let i=0;i<statuss.length;i++){
    if(statuss[i]=="available"){
        console.log("Ready to lend");
    }
    else if(statuss[i]=="borrowed"){
        console.log("Checked out");
    }
}

}
const statuss=["available","borrowed"];
bookStatus(statuss);



function checkCustomerAges(ages) {
    ages.forEach(age => {
      if (age >= 18) {
        console.log("Adult");
      } else {
        console.log("Minor");
      }
    });
  }
  checkCustomerAges([15, 22, 18, 10]);

  function countLives(initialLives) {
    let lives = initialLives;
    while (lives > 0) {
      console.log(`You have ${lives} lives left`);
      lives--;
    }
    console.log("Game Over!");
  }
  
  countLives(5);

  function feedback(text) {
    let index = 0;
    do {
      console.log(text[index]);
      index++;
    } while (index < text.length);
  }feedback(["Good job", "Needs improvement", "keep it up"]);

  function checkLoginStatus(loginStatus) {
    loginStatus.forEach(status => {
      if (status === "logged in") {
        console.log("Welcome back!");
      } else {
        console.log("Please log in");
      }
    });
  }
  
  checkLoginStatus(["logged in", "logged out", "logged in","logged out"]);

  function processPriorities(priorities) {
    priorities.forEach(priority => {
      switch (priority) {
        case "low":
          console.log("Address within 48 hours");
          break;
        case "medium":
          console.log("Address within 24 hours");
          break;
        case "high":
          console.log("Immediate attention required");
          break;
        default:
          console.log("Unknown priority ");
      }
    });
  }
  
  processPriorities(["low", "medium", "high", "low"]);

  function quizCountdown(seconds) {
    while (seconds > 0) {
      console.log(seconds);
      seconds--;
    }
    console.log("Time's up!");
  }
  
  quizCountdown(10);
  