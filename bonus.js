
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

// Ingredients for Nankhatai Cookies
const ingredients = [
    { name: 'all-purpose flour', amount: 1, unit: 'cup' },
    { name: 'gram flour', amount: 0.5, unit: 'cup' },
    { name: 'ghee', amount: 0.5, unit: 'cup' },
    { name: 'powdered sugar', amount: 0.75, unit: 'cup' },
    { name: 'cardamom powder', amount: 0.5, unit: 'teaspoon' }
];

// Keep track of ingredients already used
const used = [false, false, false, false, false];

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let message = '';

    // Check whether all ingredients have been used
    if (used.every(value => value === true)) {
        message = '<p>nothing left</p>';
    } else {

        // Generate a random index
        let index = Math.floor(Math.random() * ingredients.length);

        // Find the next unused ingredient
        while (used[index] === true) {
            index = (index + 1) % ingredients.length;
        }

        // Mark the ingredient as used
        used[index] = true;

        const ingredient = ingredients[index];

        message = `<p>Ingredient index: ${index}</p>
                   <p>${ingredient.amount} ${ingredient.unit}
                   of ${ingredient.name}</p>`;
    }

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Nishanth lists a Nankhatai ingredient</title>
    </head>
    <body>
        <h1>Nishanth's Nankhatai Cookies Ingredients</h1>
        <div>
            ${message}
        </div>
    </body>
    </html>
    `;

    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Bonus server running at http://${hostname}:${port}/`);
});
