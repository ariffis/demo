// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inventory-nav').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        loadInventoryData(); // Load inventory data
    });

    document.getElementById('inbound-nav').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        loadInboundData(); // Load inbound data
    });

    document.getElementById('outbound-nav').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        loadOutboundData(); // Load outbound data
    });

    document.getElementById('home-nav').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        loadHomePage(); // Load home page
    });
});

// Function to reset content to the home view
function loadHomePage() {
    document.getElementById('content').innerHTML = `
        <h1>Hello, world!</h1>
        <p>Welcome to your new app.</p>
    `;
}

// Function to load inventory data from the server dynamically
function loadInventoryData() {
    fetch('/inventory')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let content = '<h3>Inventory List</h3><ul>';
            data.forEach(item => {
                content += `<li>${item.productName} - ${item.supplier} units</li>`;
            });
            content += '</ul>';
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching inventory data:', error);
            document.getElementById('content').innerHTML = '<p>Error loading inventory data. Please try again later.</p>';
        });
}

// Function to load inbound data dynamically
function loadInboundData() {
    // Placeholder function for loading inbound data
    document.getElementById('content').innerHTML = '<h3>Inbound List (Coming soon...)</h3>';
}

// Function to load outbound data dynamically
function loadOutboundData() {
    // Placeholder function for loading outbound data
    document.getElementById('content').innerHTML = '<h3>Outbound List (Coming soon...)</h3>';
}
