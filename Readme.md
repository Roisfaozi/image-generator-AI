# AI Image Generator

An AI image generator web app using OpenAI API with fullstack vite MERN.

### Requirements

- Node.js 15+ and npm

Run the following command on your local environment:

# Client

```shell
git clone https://github.com/Roisfaozi/image-generator-AI.git your-project-name
cd your-project-name
cd client
npm install
npm run dev
```

# Server

```shell
git clone https://github.com/Roisfaozi/image-generator-AI.git your-project-name
cd your-project-name
cd server
npm install
npm start
```

## How to run app

1. Get api key from OpenAI [https://beta.openai.com](https://beta.openai.com).
2. Edit env.example to .env
3. Enter api key to .env
4. Run the development server :

Open [http://http://localhost:5173/](http://http://localhost:5173/) with your browser to see the app.

Open [http://http://localhost:8080/](http://http://localhost:8080/) with your browser to run API endpoint.

```shell
structure folder app

├── client                          # Components folder
    ├── public                      # Public assets folder
    ├── src                         # Source folder
        ├── assets                  # Assets folder
        ├── components              # Components flder
        ├── constants               # Surpirse me Prompt folder
        ├── pages                   # Pages source
        ├── utils                   # Utilities function folder
    ├── tailwind.config.js          # Tailwind CSS configuration
    ├── vite.config.js              # Vite configuration
├── server                          # Server API folder
    ├── mongoDB                     # MongoDB database function
    ├── routes                      # API routes folder
    ├── .env                        # API environment variables
├── README.md                       # README file
```

### Features

- ⚡ [Vite.js](https://vitejs.dev/) for website bundler
- 📟 [React.js](https://reactjs.org/) for Frontend Framework
- 🤖 Integrate Chatbot API with [OpenAI](https://openai.com)
- 💎 Integrate Styling with [Tailwind CSS](https://tailwindcss.com)
- 🗃 Database collection [MongoDB](https://mongodb.com/)

### Demo app

Open [https://imageopen.netlify.app/](https://imageopen.netlify.app/) the url in your browser for the demo application.

### Support

Support me: [Paypal](https://paypal.me/roisfaozi)
