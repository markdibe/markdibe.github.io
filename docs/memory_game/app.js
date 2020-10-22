document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [{
            name: "fries",
            img: "images/fries.jpg"
        },
        {
            name: "fries",
            img: "images/fries.jpg"
        },
        {
            name: "burger",
            img: "images/burger.jpg"
        },
        {
            name: "burger",
            img: "images/burger.jpg"
        },
        {
            name: "pizza",
            img: "images/pizza.jpg"
        },
        {
            name: "pizza",
            img: "images/pizza.jpg"
        },
        {
            name: "potato",
            img: "images/potato.jpg"
        },
        {
            name: "potato",
            img: "images/potato.jpg"
        },
        {
            name: "sushi",
            img: "images/sushi.jpg"
        },
        {
            name: "sushi",
            img: "images/sushi.jpg"
        },
        {
            name: "shawarma",
            img: "images/shawarma.jpg"
        },
        {
            name: "shawarma",
            img: "images/shawarma.jpg"
        }
    ]

    cardArray.sort(() => {
        return 0.5 - Math.random();
    });

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector("#result");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];





    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/recipe.jpg");
            card.setAttribute("data-id", i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            
            cards[optionOneId].setAttribute("src", "images/check.png");
            cards[optionTwoId].setAttribute("src", "images/check.png");
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/recipe.jpg");
            cards[optionTwoId].setAttribute("src", "images/recipe.jpg");
            alert("try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congradulation you found then all";
        }
    }


    function flipCard() {
        var cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});