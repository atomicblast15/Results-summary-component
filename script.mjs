function giveMe(func) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the data and update the HTML content
      let container = document.getElementsByClassName("sum-score");
      for (let i = 0; i < container.length; i++) {
        container[i].innerHTML = `${data[i].score}`;
        console.log(container[i]);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  func();
}

function giveScore() {
  let a = Number(document.getElementById("score1").textContent);
  let b = Number(document.getElementById("score2").textContent);
  let c = Number(document.getElementById("score3").textContent);
  let d = Number(document.getElementById("score4").textContent);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  let average = Math.round((a + b + c + d) / 4);
  console.log(average);
  document.getElementById("result-score").innerHTML = average;
}

giveMe(giveScore);
