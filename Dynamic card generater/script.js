document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const cardCount = document.getElementById('cardCount');

    function generateArray(size) {
        const names = [
            'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis',
            'Emily Wilson', 'David Clark', 'Sophia Martinez', 'James Lewis', 'Olivia Lee',
            'Liam Walker', 'Ava Hall', 'Noah Young', 'Isabella Allen', 'Mason Scott',
            'Ethan Harris', 'Mia Thompson'
        ];
        const emails = [
            'john@example.com', 'jane@example.com', 'alice@example.com', 'bob@example.com', 'charlie@example.com',
            'emily@example.com', 'david@example.com', 'sophia@example.com', 'james@example.com', 'olivia@example.com',
            'liam@example.com', 'ava@example.com', 'noah@example.com', 'isabella@example.com', 'mason@example.com',
            'ethan@example.com', 'mia@example.com'
        ];
        const phones = [
            '123-456-7890', '234-567-8901', '345-678-9012', '456-789-0123', '567-890-1234',
            '678-901-2345', '789-012-3456', '890-123-4567', '901-234-5678', '012-345-6789',
            '123-456-0000', '234-567-1111', '345-678-2222', '456-789-3333', '567-890-4444',
            '678-901-5555', '789-012-6666'
        ];
        const addresses = [
            '123 Main St', '456 Oak St', '789 Pine St', '101 Maple St', '202 Elm St',
            '303 Birch St', '404 Cedar St', '505 Walnut St', '606 Ash St', '707 Chestnut St',
            '808 Fir St', '909 Willow St', '1010 Spruce St', '1111 Redwood St', '1212 Sequoia St',
            '1313 Cedar St', '1414 Maple St'
        ];
        const images = [
            'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
            'https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg',
            'https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg',
            'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
            'https://images.pexels.com/photos/1264074/pexels-photo-1264074.jpeg',
            'https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg',
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            'https://images.pexels.com/photos/1181381/pexels-photo-1181381.jpeg',
            'https://images.pexels.com/photos/1212345/pexels-photo-1212345.jpeg',
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
        ];

        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push({
                name: names[i % names.length],
                email: emails[i % emails.length],
                phone: phones[i % phones.length],
                address: addresses[i % addresses.length],
                image: images[i % images.length]
            });
        }
        return arr;
    }

    function renderCards(numberOfCards) {
        cardContainer.innerHTML = ''; 
        const cards = generateArray(numberOfCards);
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <h3>${card.name}</h3>
                <p>Email: ${card.email}</p>
                <p>Phone: ${card.phone}</p>
                <p>Address: ${card.address}</p>
            `;
            cardContainer.appendChild(cardElement);
        });
    }
    renderCards(6);

    cardCount.addEventListener('change', (event) => {
        renderCards(event.target.value);
    });
});