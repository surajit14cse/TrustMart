const products = {
    "stylish-watch": {
        name: "Stylish Watch",
        price: "$49.99",
        image: "assets/images/StylishWatch.png",
        description: "A sleek and elegant watch that combines classic design with modern functionality. Perfect for any occasion, it features a durable build and precise timekeeping.",
        specs: [
            "Material: Stainless Steel",
            "Water Resistance: 3 ATM",
            "Strap: Genuine Leather",
            "Features: Chronograph, Date Display"
        ]
    },
    "wireless-headphones": {
        name: "Wireless Headphones",
        price: "$99.00",
        image: "assets/images/WirelessHeadphones.png",
        description: "Immerse yourself in high-fidelity audio with these comfortable wireless headphones. Featuring noise cancellation and long battery life, they are perfect for music lovers on the go.",
        specs: [
            "Connectivity: Bluetooth 5.0",
            "Battery Life: Up to 30 hours",
            "Features: Active Noise Cancellation, Built-in Mic",
            "Compatibility: Universal"
        ]
    },
    "smart-speaker": {
        name: "Smart Speaker",
        price: "$75.50",
        image: "assets/images/SmartSpeaker.png",
        description: "Experience the future of home audio with this smart speaker. Voice-activated and capable of controlling your smart home devices, it delivers rich, room-filling sound.",
        specs: [
            "Voice Assistant: Integrated",
            "Connectivity: Wi-Fi, Bluetooth",
            "Audio: 360-degree sound",
            "Features: Smart Home Hub, Music Streaming"
        ]
    },
    "designer-handbag": {
        name: "Designer Handbag",
        price: "$120.00",
        image: "assets/images/DesignerHandbag.png",
        description: "Elevate your style with this exquisite designer handbag. Crafted from premium materials, it offers ample space and sophisticated aesthetics for the modern individual.",
        specs: [
            "Material: Premium PU Leather",
            "Dimensions: 30cm x 25cm x 15cm",
            "Closure: Zipper",
            "Features: Multiple Compartments, Adjustable Strap"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    if (productId && products[productId]) {
        const product = products[productId];

        // Update title in head
        document.title = product.name + " - TrustMart";

        // Update breadcrumb
        const breadcrumbProductName = document.querySelector('.breadcrumb-item.active');
        if (breadcrumbProductName) {
            breadcrumbProductName.textContent = product.name;
        }

        // Update product image
        const mainProductImage = document.querySelector('.main-product-image img');
        if (mainProductImage) {
            mainProductImage.src = product.image;
            mainProductImage.alt = product.name;
        }

        // Update product title
        const productTitle = document.querySelector('.col-lg-6 h1.mb-3');
        if (productTitle) {
            productTitle.textContent = product.name;
        }

        // Update product price
        const productPrice = document.querySelector('.col-lg-6 p.h3');
        if (productPrice) {
            productPrice.textContent = product.price;
        }

        // Update product description
        const productDescription = document.querySelector('.col-lg-6 p.text-muted');
        if (productDescription) {
            productDescription.textContent = product.description;
        }

        // Update product specifications (assuming a ul li structure inside accordion-body)
        const productSpecsContainer = document.querySelector('#collapseTwo .accordion-body ul');
        if (productSpecsContainer && product.specs) {
            productSpecsContainer.innerHTML = ''; // Clear existing specs
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                productSpecsContainer.appendChild(li);
            });
        }
    } else {
        // Handle case where product ID is not found or invalid
        // Maybe redirect to a 404 page or product listing
        console.error("Product not found or invalid product ID.");
        // For now, let's just leave the default content, or clear it
        // Or redirect: window.location.href = 'product-listing.html';
    }
});