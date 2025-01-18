# Delivery-MERN

1. Server Setup
    1.1. Start with the "npm init -y"
    1.2. Next install basics "npm install express mongoose dotenv"
    1.3. Create a file in backend folder like e.g."server.js" for the entry point of the backend server
    1.4. Change the package.json scripts to below to use "npm run dev" instead "node ./backend/server.js"
        <code>
            "scripts": {
                "dev": "node backend/server.js"
            },
        </code>
    1.5. "npm i nodemon -D" to install dev dependency to run your changes automatically but also need to change the package.json scripts node to nodemon
        <code>
            "scripts": {
                "dev": "nodemon backend/server.js"
            },
        </code>

2. MongoDB Setup
    
