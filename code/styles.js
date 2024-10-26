let hasFlippedBlock = false;
let lockBoard = false;
let firstBlock, secondBlock;

document.querySelectorAll(".block").forEach(bl => {
    bl.addEventListener('click', flipBlock);
});

function flipBlock() {
    if (lockBoard) return;
    if (this === firstBlock) return;

    this.classList.add('flipped');

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
    firstBlock.removeEventListener('click', flipBlock);
    secondBlock.removeEventListener('click', flipBlock);

    resetBoard();
}

function unflipBlocks() {
    lockBoard = true;

    setTimeout(() => {
        firstBlock.classList.remove('flipped');
        secondBlock.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedBlock, lockBoard] = [false, false];
    [firstBlock, secondBlock] = [null, null];
}
