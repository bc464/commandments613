let content = document.getElementById("negData");
let searchInput = document.querySelector(".search-input");

// fetching json-positiveMain
fetch("./data/negativeMain.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    negativeMain(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

// Function to display json-positiveMain
function negativeMain() {
  let mainContainer = document.getElementById("negData");
  let div2 = document.createElement("div");
  div2.classList.add("linkBack");
  div2.innerHTML = `
  
 <a href="index.html" class="arrowBack">&larr;</a>
 </div>
`;
  content.append(div2);

  fetch("./data/negativeMain.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");

        div.classList.add("infoData");
        div.innerHTML = `
       
            <p>${data[i].id}</p>
            <p>${data[i].title}</p>
            `;

        mainContainer.appendChild(div);
      }
    });
}
// negativeMain();
// function when user clicks on a specific command
let links = document.getElementById("negData");
links.addEventListener("click", function commandChosen(e) {
  let clickedCommand = e.target.outerText;
  fetch("./data/negativeMain.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        if (clickedCommand === data[i].title) {
          content.innerHTML = "";
          content.innerHTML = `
        <a href="negativeInfoPage.html" class="arrowBack">&larr;</a>
        <div class="title-commandment">
        <h2>${data[i].title}</h2>
        </div>

        `;
          let div = document.createElement("div");
          div.classList.add("textBox");
          div.innerHTML = `
        <p>${data[i].text}</p>
        `;
          content.append(div);
          searchInput.style.display = "none";
          window.scrollTo(0, 0);
        }
      }
    });
});
