// Donation Page function
document.getElementById('show-donation-page')
    .addEventListener('click', function () {
        showSectionById('donation-page');

        const historyTab = document.getElementById('show-history-page')
        historyTab.classList.remove(
            "bg-[#B4F461]",
            "border-none"
        );

        const donateTab = document.getElementById('show-donation-page')
        donateTab.classList.add(
            "bg-[#B4F461]",
            "border-none"
        );
    })


// History Page function
document.getElementById('show-history-page')
    .addEventListener('click', function () {
        showSectionById('history-page');

        const historyTab = document.getElementById('show-history-page')
        historyTab.classList.add(
            "bg-[#B4F461]",
            "border-none"
        );

        const donateTab = document.getElementById('show-donation-page')
        donateTab.classList.remove(
            "bg-[#B4F461]",
            "border-none"
        );
        donateTab.classList.add(
            "border-gray-300"
        );

    })
