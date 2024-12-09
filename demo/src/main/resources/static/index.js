// Wait for the DOM to load completely || Navbar addEventListener Function
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inventory-nav').addEventListener('click', function (event) {
        // Fetch the inventory.html content
        fetch('inventory.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Load the HTML content into the #content tag
                document.getElementById("content").innerHTML = html;
                // Dynamically load inventory data once the page content is inserted
                loadInventoryData();
            })
            .catch(error => console.error('Error loading inventory.html:', error));
    });

    document.getElementById('inbound-nav').addEventListener('click', function (event) {
        loadInboundData(); // Load inbound data
    });

    document.getElementById('outbound-nav').addEventListener('click', function (event) {
        loadOutboundData(); // Load outbound data
    });

    document.getElementById('home-nav').addEventListener('click', function (event) {
        loadHomePage(); // Load home page
    });

    // Use event delegation for dynamically loaded elements like "Add Product" button
    document.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('btn-add-table')) {
            openAddForm(); // Open Add Product form
        }
    });

    // Use event delegation for dynamically loaded elements like the Search form
    document.addEventListener('submit', function (event) {
    if (event.target && event.target.id === 'search-form') {
        event.preventDefault(); // Prevent the form from reloading the page
        const query = document.getElementById('search-input').value.trim();
        if (query) {
            searchInventory(query); // Perform the search
        } else {
            loadInventoryData(); // Load all data if the search input is empty
        }
    }
});
});

//----------------------------------------------------
// Layout function
// Function to reset content to the home view
function loadHomePage() {
    document.getElementById('content').innerHTML = `
        <h1>Hello, world!</h1>
        <p>Welcome to your new app.</p>
    `;
}

// Function to load inventory data from the server dynamically
function loadInventoryData() {
    fetch('/get-all-inventory')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const inventoryTableBody = document.getElementById('inventory-data');
            if (inventoryTableBody) {
                inventoryTableBody.innerHTML = ''; // Clear the table before populating

                // Populate the table with data
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.productName}</td>
                        <td>${item.supplier || ''}</td>
                        <td>
                           <button class="btn btn-warning btn-sm update-btn" data-id="${item.id}" data-product="${item.productName}" data-supplier="${item.supplier}">Update</button>
                        </td>
                        <td>
                            <button class="btn-delete btn btn-danger btn-sm" data-id="${item.id}">Delete</button>
                        </td>
                    `;
                    inventoryTableBody.appendChild(row);
                });
                
                 // Add event listeners to update buttons
                 const updateButtons = document.querySelectorAll('.update-btn');
                 updateButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        const id = this.getAttribute('data-id');
                        const productName = this.getAttribute('data-product');
                        const supplier = this.getAttribute('data-supplier');
                        openUpdateForm(id, productName, supplier);
                    });
                });

                // Attach event listeners to delete buttons
                const deleteButtons = document.querySelectorAll('.btn-delete');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        const id = this.getAttribute('data-id');
                        deleteInventoryItem(id);
                    });
                });
            }
        })
        .catch(error => {
            console.error('Error fetching inventory data:', error);
            const inventoryTableBody = document.getElementById('inventory-data');
            if (inventoryTableBody) {
                inventoryTableBody.innerHTML = '<tr><td colspan="5">Error loading data. Please try again later.</td></tr>';
            }
        });
}

// Function to load inbound data dynamically
function loadInboundData() {
    // Placeholder function for loading inbound data
    fetch('/get-all-inbound')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch inbound data');
        }
        return response.json();
    })
    .then(data => {
        // Update the content area with inbound data table
        document.getElementById('content').innerHTML = `
            <h3>Inbound List</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Product SKU</th>
                        <th>Quantity</th>
                        <th>Received Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody id="inbound-data"></tbody>
            </table>
        `;
        const inboundTableBody = document.getElementById('inbound-data');

        // Populate the table with inbound data
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.reference}</td>
                <td>${item.productSku}</td>
                <td>${item.quantity}</td>
                <td>${item.dateReceived}</td>
                <td>${item.location || ''}</td>
            `;
            inboundTableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching inbound data:', error);
        document.getElementById('content').innerHTML = `
            <h3>Error</h3>
            <p>Failed to load inbound data. Please try again later.</p>
        `;
    });
}

// Function to load outbound data dynamically
function loadOutboundData() {
    // Placeholder function for loading outbound data
    fetch('/get-all-outbound')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch outbound data');
        }
        return response.json();
    })
    .then(data => {
        // Update the content area with outbound data table
        document.getElementById('content').innerHTML = `
            <h3>Outbound List</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Product SKU</th>
                        <th>Quantity</th>
                        <th>Shipped Date</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody id="outbound-data"></tbody>
            </table>
        `;
        const outboundTableBody = document.getElementById('outbound-data');

        // Populate the table with outbound data
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.reference}</td>
                <td>${item.productSku}</td>
                <td>${item.quantity}</td>
                <td>${item.dateShipped}</td>
                <td>${item.destination || ''}</td>
            `;
            outboundTableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching outbound data:', error);
        document.getElementById('content').innerHTML = `
            <h3>Error</h3>
            <p>Failed to load outbound data. Please try again later.</p>
        `;
    });
}

//-------------------------------------------
//  Delete Function
//  Function to delete an inventory item through controller
function deleteInventoryItem(id) {
    fetch(`/delete-inventory/${id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete inventory item');
            }
            console.log(`Deleted inventory item with ID: ${id}`);
            loadInventoryData(); // Reload data after deletion
        })
        .catch(error => console.error('Error deleting inventory item:', error));
}

//-------------------------------------------
//  Update Function
// Function to send update request to the database through controller
function updateInventoryItem(product) {
    fetch('/update-inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update inventory item');
            }
            alert('Product updated successfully!');
            loadInventoryData(); // Reload inventory data after update
        })
        .catch(error => {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        });
}

//-------------------------------------------
//  Add Function
// Function to send a POST request to add a new inventory item
function addInventoryItem(product) {
    fetch('/add-inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add inventory item');
            }
            alert('Product added successfully!');
            loadInventoryData(); // Reload inventory data after adding a product
        })
        .catch(error => {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        });
}

//-----------------------------------------------
//  Select Function
// Function to search inventory data based on the query
function searchInventory(query) {
    fetch(`/search-inventory?query=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to search inventory data');
            }
            return response.json();
        })
        .then(data => {
            const inventoryTableBody = document.getElementById('inventory-data');
            if (inventoryTableBody) {
                inventoryTableBody.innerHTML = ''; // Clear the table

                // Populate the table with filtered data
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.productName}</td>
                        <td>${item.supplier || ''}</td>
                        <td>
                            <button class="btn btn-warning btn-sm update-btn" data-id="${item.id}" data-product="${item.productName}" data-supplier="${item.supplier}">Update</button>
                        </td>
                        <td>
                            <button class="btn-delete btn btn-danger btn-sm" data-id="${item.id}">Delete</button>
                        </td>
                    `;
                    inventoryTableBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error('Error searching inventory data:', error);
            const inventoryTableBody = document.getElementById('inventory-data');
            if (inventoryTableBody) {
                inventoryTableBody.innerHTML = '<tr><td colspan="5">Error loading data. Please try again later.</td></tr>';
            }
        });
}

//------------------------------------------------
//  Form function
// Function to open update form with pre-filled data
function openUpdateForm(id, productName, supplier) {
    // Show a modal or dynamically insert a form into the DOM
    document.getElementById('content').innerHTML = `
        <h3>Update Product</h3>
        <form id="update-form">
            <div class="mb-3">
                <label for="product-id" class="form-label">Product ID</label>
                <input type="text" class="form-control" id="product-id" value="${id}" readonly>
            </div>
            <div class="mb-3">
                <label for="product-name" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="product-name" value="${productName}">
            </div>
            <div class="mb-3">
                <label for="supplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="supplier" value="${supplier}">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    `;

    // Add submit event listener to the form
    document.getElementById('update-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const updatedProduct = {
            id: document.getElementById('product-id').value,
            productName: document.getElementById('product-name').value,
            supplier: document.getElementById('supplier').value
        };
        updateInventoryItem(updatedProduct);
    });
}

// Function to open the Add Product form
function openAddForm() {
    document.getElementById('content').innerHTML = `
        <h3>Add Product</h3>
        <form id="add-form">
            <div class="mb-3">
                <label for="product-id" class="form-label">Product ID</label>
                <input type="text" class="form-control" id="product-id" placeholder="Enter Product ID">
            </div>
            <div class="mb-3">
                <label for="product-name" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Enter Product Name">
            </div>
            <div class="mb-3">
                <label for="supplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="supplier" placeholder="Enter Supplier Name">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    `;

    // Add event listener for form submission
    document.getElementById('add-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const newProduct = {
            id: document.getElementById('product-id').value,
            productName: document.getElementById('product-name').value,
            supplier: document.getElementById('supplier').value
        };
        addInventoryItem(newProduct);
    });
}