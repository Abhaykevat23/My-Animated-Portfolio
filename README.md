# My Animated Portfolio

An animated portfolio website built using the MERN stack and GSAP for smooth animations. This website is designed to create an interactive and visually appealing way to showcase my skills, projects, and achievements.

## Live Demo

Check out the live website here: [My Animated Portfolio](https://abhaykevat.vercel.app/)

## Features

- **Smooth Animations**: Built with GSAP for high-quality animations.
- **Modern Design**: Aesthetic and responsive design optimized for all devices.
- **Project Highlights**: Showcase of projects with animations and details.
- **Interactive Sections**: Dynamic elements for better user engagement.
- **Contact Section**: Users can easily connect through the contact form.

## Technologies Used

- **Frontend**: React.js, GSAP, CSS3
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: Vercel

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Abhaykevat23/My-Animated-Portfolio.git
    cd My-Animated-Portfolio
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory with the following keys:
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    ```

4. **Run the Server**:
    ```bash
    npm start
    ```

5. **Run the Client**:
    Navigate to the `client` folder and start the frontend:
    ```bash
    cd client
    npm start
    ```

6. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
My-Animated-Portfolio/
├── client/                # Frontend code (React.js, GSAP)
├── server/                # Backend code (Node.js, Express)
├── models/                # Database models
├── routes/                # API routes
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json           # Node.js dependencies
└── README.md              # Project documentation
```

## Future Improvements

- Add user authentication for personalized experiences.
- Enhance animation effects for an even smoother UI.
- Integrate a blog section to share updates and articles.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

**Abhay Kevat**  
[GitHub Profile](https://github.com/Abhaykevat23)
