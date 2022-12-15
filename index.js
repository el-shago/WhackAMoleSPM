      const score = document.querySelector(".score span");
      const holes = document.querySelectorAll(".hole");
      const playbtn = document.querySelector(".buttons .play");
      const stopbtn = document.querySelector(".buttons .stop");
      const cursor = document.querySelector(".cursor img");

      window.addEventListener("mousemove", (e) => {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";

        window.addEventListener("click", () => {
          cursor.style.animation = "hit 0.1s ease";
          setTimeout(()=>{
            cursor.style.removeProperty("animation");
          },100)
        })
      });
    
      playbtn.addEventListener("click",()=>{
        playbtn.style.display = "none";
        stopbtn.style.display = "inline-block";

        let hole;
        let points = 0;

        const startGame = setInterval(()=>{
          let arrayNo = Math.floor(Math.random()*9);
          hole = holes[arrayNo];

          let image = document.createElement("img");
          image.setAttribute("src", "fotos/mole.png");
          image.setAttribute("class", "mole");
          hole.appendChild(image);
          setTimeout(()=> {
            hole.removeChild(image);
          },600);
        }, 800);

        window.addEventListener("click", (e) =>{
          if(e.target === hole)score.innerText = ++points;
        });

        stopbtn.addEventListener("click",()=>{
          clearInterval(startGame);
          stopbtn.style.display = "none";
          playbtn.style.display = "inline-block";
          timeLeft = 0;
        })

      var timeLeft = 30;
      var elem = document.getElementById('seconds');
      var timerId = setInterval(countdown, 1000);
      
      function countdown() {
        if (timeLeft == -1) {
          clearTimeout(timerId);
          doSomething();
        } else {
          elem.innerHTML = timeLeft;
          timeLeft--;
        }
        if(timeLeft == 0){
          clearInterval(startGame);
          stopbtn.style.display = "none";
          playbtn.style.display = "inline-block";
        }
        if(timeLeft == 10){
          
        }
      }
      });