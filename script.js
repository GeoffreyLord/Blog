// Initialize the current date
let currentDate = new Date();

// Update the displayed date
function updateDateDisplay() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString(undefined, options);
}

// Navigate to the previous day
document.getElementById('prev-day').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
    loadContent();
});

// Navigate to the next day
document.getElementById('next-day').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateDisplay();
    loadContent();
});

// Initial display
updateDateDisplay();


function loadMarketData() {
    // Example market data (replace with API call)
    const marketData = [
        { name: 'Gold', value: '$1,800', change: '+0.5%' },
        { name: 'Oil', value: '$70', change: '-1.2%' },
        { name: 'EUR/USD', value: '1.18', change: '+0.1%' },
        { name: 'S&P 500', value: '$5,628.31', change: '+0.04%' },
        // Add more data as needed
    ];

    const tickerContainer = document.getElementById('market-ticker');
    const tickerContent = marketData.map(item => {
        return `<span>${item.name}: ${item.value} (${item.change})</span>`;
    }).join(' | ');

    tickerContainer.innerHTML = `<div>${tickerContent}</div>`;
}

// Call the function to load market data
loadMarketData();



function loadContent() {
    loadMarketData();
    loadNewsFeed();
    loadEventMap();
}

// Initial content load
loadContent();