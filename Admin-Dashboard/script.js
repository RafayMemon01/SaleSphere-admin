console.log("Hello Admin");
const cardCreateWindow = (event)=>{
    event.preventDefault();
    console.log("cardOpened");

}
// Function to update time
const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    
    // Get the third div element
    const thirdDiv = document.querySelector('header div:nth-child(3)');

    // Update the content of the third div
    thirdDiv.textContent = ` ${timeString}`;
};

// Update time initially and set interval to update every second
updateTime();
setInterval(updateTime, 1000);


document.addEventListener('DOMContentLoaded', function() {
    const productImageInput = document.getElementById('productImage');
    const previewImage = document.getElementById('previewImage');

    productImageInput.addEventListener('change', function() {
        try {
            const file = this.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const imageUrl = e.target.result;
                previewImage.src = imageUrl;
            }

            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    const saveButton = document.querySelector('#exampleModal .modal-footer .btn-primary');
    saveButton.addEventListener('click', function() {
        try {
            const productName = document.getElementById('productName').value;
            const productDescription = document.getElementById('productDescription').value;
            const affiliateLink = document.getElementById('affiliateLink').value;
            const productImageURL = document.getElementById('productImage').value;

            // Send the imageURL to the server (you'll need to implement this part)
            // You can use XMLHttpRequest or fetch API to send data to your server
            // Example using fetch:
            fetch('your_server_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: productName,
                    productDescription: productDescription,
                    affiliateLink: affiliateLink,
                    productImageURL: productImageURL,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
