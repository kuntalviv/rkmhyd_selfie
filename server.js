const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading index.html");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    });
  }
  else if (req.url === "/content.html") {
    fs.readFile("content.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading content.html");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    });
  }

  else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading style.css");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.end(data);
    });
  }
  else if (req.url === "/home.css") {
    fs.readFile("home.css", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading home.css");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.end(data);
    });
  }

  else if (req.url === "/app.js") {
    fs.readFile("app.js", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading app.js");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      res.end(data);
    });
  }
  else if (req.url === "/constants.js") {
    fs.readFile("constants.js", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading app.js");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      res.end(data);
    });
  }

  else if (req.url === "/Certificate_Template_Sample.png") {
    fs.readFile("Certificate_Template_Sample.png", (err, data) => {
      if (err) {

        res.writeHead(500);
        res.end("Error loading app.js");
        return;
      }

      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    })
  }

  else if (req.url === "/swamiji_icon.jpg") {
    fs.readFile("swamiji_icon.jpg", (err, data) => {
      if (err) {

        res.writeHead(500);
        res.end("Error loading app.js");
        return;
      }

      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    })
  }
  else if (req.url === "/Certificate_Template.jpeg") {
    fs.readFile("Certificate_Template.jpeg", (err, data) => {
      if (err) {

        res.writeHead(500);
        res.end("Error loading app.js");
        return;
      }

      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    })
  }

  else if (req.method === 'GET' && req.url === '/speech.mp3') {

    // Verify the MP3 file exists before attempting to stream
    fs.stat("speech.mp3", (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found: Audio file missing.');
      }

      // Set mandatory audio streaming headers
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg',        // Standard MIME type for MP3 files
        'Content-Length': stats.size,       // Tells client the total file size
        'Accept-Ranges': 'bytes'            // Enables scrubbing/seeking in players
      });

      // Create a read stream and pipe it directly to the response object
      const readStream = fs.createReadStream("speech.mp3");
      readStream.pipe(res);

      // Handle potential stream errors safely
      readStream.on('error', (streamErr) => {
        console.error('Stream Error:', streamErr);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        }
      });
    });
  }

  else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
