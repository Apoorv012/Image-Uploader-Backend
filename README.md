# Image Uploader Backend

A Node.js backend service for uploading and retrieving images with unique code generation. This service uses Cloudinary for image storage and MongoDB for metadata management.

## 🚀 Features

- **Image Upload**: Upload images with automatic Cloudinary integration
- **Unique Code Generation**: Generate unique 6-character alphabetic codes for each uploaded image
- **Image Retrieval**: Retrieve images using unique codes
- **Cloud Storage**: Secure image storage using Cloudinary
- **Database Integration**: MongoDB for storing image metadata
- **File Management**: Local file handling with automatic cleanup

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Apoorv012/Image-Uploader-Backend.git
   cd Image-Uploader-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:4000` (or the port specified in your environment variables).

## 📁 Project Structure

```
Image-Uploader-Backend/
├── app.js                     # Main application entry point
├── config/
│   └── db.config.js          # MongoDB connection configuration
├── controllers/
│   └── image.controllers.js  # Image upload and retrieval logic
├── middlewares/
│   └── multer.middleware.js  # File upload middleware
├── routes/
│   ├── index.routes.js       # Main router
│   └── v1/
│       ├── v1-main.js        # API version 1 router
│       └── image.routes.js   # Image-specific routes
├── utils/
│   ├── cloudinary.js         # Cloudinary integration
│   └── code_generation.js    # Unique code generation logic
├── uploads/                  # Local file storage (temporary)
└── package.json
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:4000/api/v1
```

### Endpoints

#### 1. Upload Image
- **POST** `/api/v1/image/upload`
- **Description**: Upload an image and get a unique code
- **Content-Type**: `multipart/form-data`
- **Body**: Form data with `image` field
- **Response**:
  ```json
  {
    "message": "Image uploaded successfully",
    "url": "https://res.cloudinary.com/...",
    "code": "abc123"
  }
  ```

#### 2. Get Image by Code
- **GET** `/api/v1/image/get/:code`
- **Description**: Retrieve image URL using unique code
- **Parameters**: `code` - The unique 6-character code
- **Response**:
  ```json
  {
    "message": "Image fetched successfully",
    "url": "https://res.cloudinary.com/..."
  }
  ```

#### 3. Health Check
- **GET** `/ping`
- **Description**: Simple health check endpoint
- **Response**: `pong`

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database for storing image metadata
- **Cloudinary** - Cloud image storage and management
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Dependencies

### Production Dependencies
- `cloudinary` - Cloud image storage service
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable loader
- `express` - Web application framework
- `mongodb` - MongoDB driver
- `multer` - File upload middleware
- `randomstring` - Unique code generation

### Development Dependencies
- `nodemon` - Development server with auto-restart

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB database
2. Update the `MONGODB_URI` in your `.env` file
3. The application will create a database named `uploads` with a collection named `images`

### Cloudinary Setup
1. Sign up for a Cloudinary account
2. Get your cloud name, API key, and API secret from the dashboard
3. Update the Cloudinary credentials in your `.env` file

## 🚀 Usage Examples

### Upload an Image
```bash
curl -X POST http://localhost:4000/api/v1/image/upload \
  -F "image=@/path/to/your/image.jpg"
```

### Retrieve an Image
```bash
curl http://localhost:4000/api/v1/image/get/abc123
```

## 🔒 Error Handling

The application includes comprehensive error handling for:
- File upload failures
- Cloudinary upload errors
- Database connection issues
- Invalid image codes
- Missing files

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Apoorv012**
- GitHub: [@Apoorv012](https://github.com/Apoorv012)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/Apoorv012/Image-Uploader-Backend/issues).

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control.
