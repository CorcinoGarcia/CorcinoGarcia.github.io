let noButtonClickCount = 0;

function handleNoButtonClick() {
    if (noButtonClickCount === 0) {
        showMessage("Are you sure?");
    } else if (noButtonClickCount === 1) {
        showMessage("Think about it again.");
    } else if (noButtonClickCount === 2) {
        showMessage("Are you really saying no?");
    } else if (noButtonClickCount === 3) {
        showMessage("I'm sorry, but I'm taking away the 'No' button for your own good.");
        hideNoButton();
    } else {
        hideNoButton();
        return;
    }

    noButtonClickCount++;
    moveNoButton();
}

function showMessage(message) {
    document.getElementById('noText').innerText = message;
    document.getElementById('noText').style.display = 'block';
}

function hideNoButton() {
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('noText').innerText = 'No is not an option pookie, just press the yes button';
    document.getElementById('noText').style.display = 'block';
}


function goToNextPage() {
    window.location.href = 'nextPage.html';
}