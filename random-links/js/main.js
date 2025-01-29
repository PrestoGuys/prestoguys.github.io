document.addEventListener('DOMContentLoaded', () => {
    const jsonVersion = '4'; // Increment this version number each time you update the JSON file
    fetch(`RandomLinks.json?v=${jsonVersion}`)
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

        data.items.forEach(item => {
            const listItem = document.createElement('div');
            listItem.className = 'gg';
            listItem.innerHTML = `
                <a href="${item.link}" target="_blank"><h3>${item.name}</h3></a>
                <p><b>${item.description}</b></p>
                <p>${item.mydescription}</p>
                <br>
            `;
            itemsList.appendChild(listItem);
        });
    }
});
