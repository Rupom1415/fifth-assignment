function showSectionById (id){
    // hide both sections
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}