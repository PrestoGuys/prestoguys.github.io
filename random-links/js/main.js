document.addEventListener('DOMContentLoaded', () => {
    const jsonVersion = '5'; // Increment this version number each time you update the JSON file
    fetch(`meta.json?v=${jsonVersion}`)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => console.error('Error loading JSON:', error));

    function displayData(data) {
        document.getElementById('title').textContent = data.title;
        document.getElementById('version').textContent = 'Version: ' + data.version;

        const itemsList = document.getElementById('items');
        itemsList.innerHTML = ''; // Clear existing items
    }
});
