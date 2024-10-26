document.addEventListener("DOMContentLoaded", () => {
    // Array of imagess
    const images = [
        "./images/img1.jpg",
        "./images/img1.jpg",
        "./images/img2.jpg",
        "./images/img2.jpg",
        "./images/img3.jpg",
        "./images/img3.jpg",
        "./images/img4.jpg",
        "./images/img4.jpg",
        "./images/img5.jpg",
        "./images/img5.jpg",
        "./images/img6.jpg",
        "./images/img6.jpg",
    ];

    //Fisher-Yates algorithm
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledImages = shuffle(images);

    // Select all blocks and assign shuffled images
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block, index) => {
        const img = document.createElement("img");
        img.src = shuffledImages[index];
        img.alt = "Memory Image";
        img.style.display = "none"; // Initially hidden
        block.appendChild(img);
        block.dataset.image = shuffledImages[index];
    });

    let hasFlippedBlock = false;
    let lockBoard = false;
    let firstBlock, secondBlock;

    blocks.forEach(block => block.addEventListener("click", flipBlock));

    function flipBlock() {
        if (lockBoard) return;
        if (this === firstBlock) return;

        this.classList.add("flipped");
        this.querySelector("img").style.display = "block";

        if (!hasFlippedBlock) {
            hasFlippedBlock = true;
            firstBlock = this;
            return;
        }

        secondBlock = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstBlock.dataset.image === secondBlock.dataset.image;
        isMatch ? disableBlocks() : unflipBlocks();
    }

    function disableBlocks() {
        firstBlock.removeEventListener("click", flipBlock);
        secondBlock.removeEventListener("click", flipBlock);
        resetBoard();
    }

    function unflipBlocks() {
        lockBoard = true;
        setTimeout(() => {
            firstBlock.classList.remove("flipped");
            firstBlock.querySelector("img").style.display = "none";
            secondBlock.classList.remove("flipped");
            secondBlock.querySelector("img").style.display = "none";
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedBlock, lockBoard] = [false, false];
        [firstBlock, secondBlock] = [null, null];
    }
});
