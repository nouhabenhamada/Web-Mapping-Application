## 🌍 Web GIS Application with OpenLayers & GeoServer 🗺️

## 📝 Description
A modern web mapping application built using OpenLayers and GeoServer that allows users to visualize geographical data, create spatial features, and interact with maps. The application includes drawing tools, geolocation features, and spatial data management capabilities.

## 🎥 Demonstration Video
[Watch the video demonstration](https://drive.google.com/file/d/1rEUoAbCJ5VMjKmU1QI1vFfbVJpvZ1qUr/view?usp=sharing)

## 🛠 Architecture
![architecture](https://github.com/user-attachments/assets/28516ba5-f16f-4706-8136-46239a6f36fb)

## Screenshots
![Cap2](https://github.com/user-attachments/assets/514e1d35-17e3-4fb8-a93c-91f125933242)
![Cap1](https://github.com/user-attachments/assets/ac8029b3-bdb7-4450-8861-4afb17d1517e)
![Cap3](https://github.com/user-attachments/assets/fcf7c561-01a4-4906-8dd8-87e31caa1850)
![Cap7](https://github.com/user-attachments/assets/c682989d-9a1e-4aab-acc2-ee5d9c5a009d)

## 🛠️ Technologies Used
- **Frontend:**
 - 🌐 HTML5, CSS3, JavaScript
 - 🗺️ OpenLayers
 - 🎨 jQuery
 - 🎯 Bootstrap

- **Middleware:**
 - 🚀 Express.js
 - 📡 Node.js

- **Backend:**
 - 🗄️ PostgreSQL/PostGIS
 - 🌐 GeoServer

## ✨ Features
- 🗺️ Interactive map visualization
- 📍 User geolocation
- ✏️ Drawing tools (Points, Lines, Polygons)
- 💾 Spatial data storage
- 🔄 Real-time coordinate display
- 🎨 Layer management
- 🎯 Map controls (zoom, pan, etc.)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- PostgreSQL with PostGIS extension
- GeoServer installed and configured

### Installation Steps
1. Clone the repository:
```bash
git clone https://github.com/nouhabenhamada/Web-Mapping-Application-OpenLayers-GeoServer.git
cd Web-Mapping-Application-OpenLayers-GeoServer
```
2. Install dependencies:
```javascript
npm install
```
3. Configure database connection in server.js:
```javascript
const db = {
    host: 'your_host',
    port: 'your_port',
    database: 'your_database',
    user: 'your_username',
    password: 'your_password'
}
```
4. Start the server:
```javascript
node server.js
```
## 📝 Usage
1. Open the application in your browser
2. Use the top toolbar to select drawing tools
3. Click "My Position" to see your current location
4. Toggle layers using the layer switcher
5. Draw features on the map and save them to the database

##  👥 Authors
[Nouha Ben Hamada](https://github.com/nouhabenhamada) & [Nour Laabidi](https://github.com/nourlabidi) 


