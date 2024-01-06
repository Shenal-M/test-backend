const express = require('express');
const router = express.Router();

// Example endpoint to retrieve data
router.get('/data', (req, res) => {
    // Retrieve data from the database or perform other operations
    res.json({ message: 'hello from the backend' });
  });


module.exports = router;