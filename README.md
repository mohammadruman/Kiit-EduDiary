# Kiit-EduDiary

Kiit-EduDiary is a full-stack blog application that allows users to create, read, update, and delete blog posts. The app is designed with a responsive user interface and includes features such as user authentication and CRUD functionalities. It emphasizes clean, maintainable code and provides a seamless user experience.

## ScreenShot

<img width="958" alt="image" src="https://github.com/user-attachments/assets/21cad04b-13f0-403b-afb2-dfa658b6cefb" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/28ea5890-adf8-467e-84c4-b7ffe15b69e8" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/17805e79-8b81-41bd-aa2a-2e0cc17d4eea" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/46ccbe2f-1dc9-443b-914c-cf0b811c070b" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/dd5d33e4-5f6f-4845-9f10-97c222dc8252" />





## Features

- **User Authentication**: Secure login and registration functionality.
- **CRUD Functionalities**: Create, Read, Update, and Delete blog posts.
- **Responsive Design**: Built for optimal viewing on devices of all sizes.
- **RESTful API Integration**: Smooth data handling between the front-end and back-end.
- **User-Friendly Interface**: Designed for intuitive navigation and interaction.

## Tech Stack

### Front-End
- **React.js**
- **Vite**
- **Tailwind CSS**
- **JavaScript**

### Back-End
- **Node.js**
- **Express.js**

### Database
- **MongoDB**

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/kiit-edudiary.git
   cd kiit-edudiary
   ```

2. **Install Dependencies**:
   - Navigate to the client folder and install front-end dependencies:
     ```bash
     cd client
     npm install
     ```
   - Navigate to the server folder and install back-end dependencies:
     ```bash
     cd ../server
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the server directory and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the Application**:
   - Start the back-end server:
     ```bash
     npm start
     ```
   - Start the front-end development server:
     ```bash
     cd ../client
     npm run dev
     ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Sign Up / Log In**:
   - Create an account or log in with your credentials.

2. **Create Blog Posts**:
   - Use the "Create Post" feature to publish your blogs.

3. **Edit or Delete Posts**:
   - Manage your blogs by editing or deleting them as needed.

4. **Responsive Design**:
   - Enjoy a seamless experience on desktop, tablet, and mobile devices.


