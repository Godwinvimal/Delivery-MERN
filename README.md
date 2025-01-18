# Delivery-MERN

<h4>1. Server Setup</h4>
    <p>1.1. Start with the "npm init -y"</p>
    <p>1.2. Next install basics "npm install express mongoose dotenv"</p>
    <p>1.3. Create a file in backend folder like e.g."server.js" for the entry point of the backend server</p>
    <p>1.4. Change the package.json scripts to below to use "npm run dev" instead "node ./backend/server.js"</p>
        <code>
            "scripts": {
                "dev": "node backend/server.js"
            },
        </code>
    <p>1.5. "npm i nodemon -D" to install dev dependency to run your changes automatically but also need to change the package.json scripts node to nodemon</p>
        <code>
            "scripts": {
                "dev": "nodemon backend/server.js"
            },
        </code>

<h4>2. MongoDB Setup</h4>
    
