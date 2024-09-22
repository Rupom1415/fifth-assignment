function showSectionById (id){
    // hide both sections
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function getInputValueById (id){
    const textValue = document.getElementById(id).value;
    const numberValue = parseFloat(textValue);
    return(numberValue);
}

function getInnerTextById (id){
    const textValues= document.getElementById(id).innerText;
    const numberValues= parseFloat(textValues);
    return(numberValues);
}

function donationId(btnId, inputId, amountId, uiId){
    document.getElementById(btnId).addEventListener('click', function(){

        const donationAmount = getInputValueById(inputId);
        const totalDonation = getInnerTextById(amountId);
        const needToDonate = getInnerTextById(uiId)

        // input validation
        if(isNaN(donationAmount)){
            alert ('Wrong Amount! Please try again.')
        }

        // calculating new values
        const totalAmount = totalDonation + donationAmount;
        const donationNeeded = needToDonate - donationAmount;

        // update navbar UI Balance
        document.getElementById(amountId).innerText = totalAmount;
        document.getElementById(uiId).innerText = donationNeeded;

        // clear input field
        document.getElementById(inputId).value = '';
    })
}