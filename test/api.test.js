const request = require("supertest")
const baseURL = "http://localhost:5000"
const fs = require('fs'); 
var FormData = require('form-data');
const testFolder = './uploads/images/'; 
const fileUpload = require('../middleware/file-upload');
const fileController = require('../controller/controler');
const app = require('../app'); 
const path = require('path');
const filePath = './test/icons8-copy-64.png';

let testFilePath = null;
describe('PUT /api/v1/file - upload a new image file', () => {
  
    console.log(filePath)
  // Upload first test file to CDN
  it('should upload the test file', () => {
    // Test if the test file is exist
    if (fs.existsSync(filePath)) {
        return request(app)
          .put('/api/uploads/images')
          .attach('file', filePath)
          .then((res) => {
            const { success, message, filePath } = res.body;
            expect(success).toBeTruthy();
            expect(message).toBe('Uploaded successfully');
            expect(typeof filePath).toBeTruthy();
            // store file data for following tests
            testFilePath = filePath;
          })
          .catch(err => console.log(err));
      }


    else {
        console.log('file does not exist'); 
       
    }
      
        
})
})


