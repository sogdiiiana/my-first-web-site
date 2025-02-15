document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("container-main");

    const productDiv = document.createElement("div");
    productDiv.classList.add("custom-text");

    const productTitle = document.createElement("h2");
    productTitle.textContent = "RAVSHANOVA SOGDIANA";

    const productDescription = document.createElement("p");
    productDescription.textContent = 
        "I like studying, but do not have much time for that because of my work. " + 
        "I am interested in learning languages, both human languages and programming languages. " + 
        "Currently, I am learning Korean and HTML :D. " + 
        "I usually fall asleep during tutorials and lectures if it is quiet and boring ((, " + 
        "hope that will not happen in this course)).";

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDescription);
    productContainer.appendChild(productDiv);

    const messageButton = document.getElementById("showMessageButton");
    const message = document.getElementById("message");

    if (!messageButton || !message) {
        console.error("Button or message element not found!");
        return;
    }

    messageButton.addEventListener("click", function () {
        message.style.display = message.style.display === "none" || message.style.display === "" ? "block" : "none";
    });

    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squares-container");
    productContainer.appendChild(squaresContainer);

    const colors = ["red", "blue", "green", "yellow"];
    colors.forEach((color, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = color;
        square.style.left = `${50 + index * 60}px`; 
        square.style.top = "50px"; 
        squaresContainer.appendChild(square);
    });

    let activeSquare = null;
    let offsetX, offsetY;

    function moveSquare(event) {
        if (activeSquare) {
            const containerRect = squaresContainer.getBoundingClientRect();
            const squareRect = activeSquare.getBoundingClientRect();

            let newX = event.clientX - offsetX;
            let newY = event.clientY - offsetY;

            if (newX < containerRect.left) newX = containerRect.left;
            if (newY < containerRect.top) newY = containerRect.top;
            if (newX + squareRect.width > containerRect.right) newX = containerRect.right - squareRect.width;
            if (newY + squareRect.height > containerRect.bottom) newY = containerRect.bottom - squareRect.height;

            activeSquare.style.left = newX - containerRect.left + "px";
            activeSquare.style.top = newY - containerRect.top + "px";
        }
    }

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mousedown", function (event) {
            activeSquare = event.target;
            offsetX = event.clientX - activeSquare.getBoundingClientRect().left;
            offsetY = event.clientY - activeSquare.getBoundingClientRect().top;
            activeSquare.style.position = "absolute";
            activeSquare.style.zIndex = "1000";
        });
    });

    document.addEventListener("mousemove", moveSquare);

    document.addEventListener("mouseup", function () {
        if (activeSquare) {
            activeSquare.style.zIndex = "1"; // Reset stacking order
            activeSquare = null;
        }
    });
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter your name");

    const nameButton = document.createElement("button");
    nameButton.textContent = "Submit Name";

    nameButton.addEventListener("click", function () {
        const name = nameInput.value;
        if (name) {
            alert("Hello, " + name + "!");
        } else {
            alert("Please enter your name.");
        }
    });

    nameContainer.appendChild(nameInput);
    nameContainer.appendChild(nameButton);

    productContainer.appendChild(nameContainer);
});








