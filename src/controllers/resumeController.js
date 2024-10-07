import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const getResume = (req, res) => {
  const filePath = path.join(__dirname, "../", "uploads", "resume.pdf");
  res.sendFile(filePath);
};

const downloadResume = (req, res) => {
  const filePath = path.join(__dirname, "../", "uploads", "resume.pdf");
  res.download(filePath, "resume.pdf", (err) => {
    if (err) {
      console.log("Error downloading the file:", err);
    }
  });
};

export { getResume, downloadResume };
