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

function headingTextById (id){
    const textValues = document.getElementById(id).innerText;
    return (textValues);
}

function donationId(btnId, inputId, amountId, uiId, headingId){
    document.getElementById(btnId).addEventListener('click', function(){

        const donationAmount = getInputValueById(inputId);
        const totalDonation = getInnerTextById(amountId);
        const needToDonate = getInnerTextById(uiId)
        const headingDetail = headingTextById(headingId)

        // input validation
        if(isNaN(donationAmount) || donationAmount<=0){
            alert ('Wrong Amount! Please try again.')
            document.getElementById(inputId).value = '';
            return;
        }

        // calculating new values
        const totalAmount = totalDonation + donationAmount;
        const donationNeeded = needToDonate - donationAmount;

        // update navbar UI Balance
        document.getElementById(amountId).innerText = totalAmount.toFixed(0);
        document.getElementById(uiId).innerText = donationNeeded.toFixed(0);

        // clear input field
        document.getElementById(inputId).value = '';

        // Add History Section
        const historyItem = document.createElement("div");
        historyItem.className = "bg-base-100 mx-5 md:mx-36 mb-8 p-8 border rounded-2xl border-gray-200";

        historyItem.innerHTML = `

            <h2 class="card-title mb-2"> ${donationAmount.toFixed(0)} Taka is Donated for ${headingDetail} </h2>
            <p class="font-light text-justify mb-5 bg-slate-50 p-2 rounded-lg">Date: ${new Date().toString()}</p>

        `;

        const historyContainer = document.getElementById('history-page');

        historyContainer.appendChild(historyItem, historyContainer.lastChild);

        // Open Modal
        const modal = document.getElementById('myModal');
        const closeModal = document.getElementById('btn-modal');

        modal.classList.remove('hidden');
        const header = document.getElementById('header');
        header.classList.remove('sticky')

        closeModal.addEventListener('click', function(){
            modal.classList.add('hidden');
            header.classList.add('sticky')
        })

        window.addEventListener('click', function(event){
            if(event.target === modal){
                modal.classList.add('hidden');
                header.classList.add('sticky')
            }
        })

    })
}