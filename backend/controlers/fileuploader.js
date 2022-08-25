import asyncHandler from 'express-async-handler'
import File from '../models/file.js'
import path from 'path'

const uploadsinglefile = asyncHandler(async (req, res) => {
        try {
          const { title, description } = req.body;
          const { path, mimetype } = req.file;
          const file = new File({
            title,
            description,
            file_path: path,
            file_mimetype: mimetype
          });
          await file.save();
          res.send('file uploaded successfully.');
        } catch (error) {
          res.status(400).send('Error while uploading file. Try again later.');
        }
      },
      (error, req, res, next) => {
        if (error) {
          res.status(500).send(error.message);
        }
      
})

const getAllFiles = asyncHandler(async (req, res) => {
    try {
        const files = await File.find({});
        const sortedByCreationDate = files.sort(
          (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
      } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
      }
  
})

const downloadId = asyncHandler(async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
          'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
      } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
      }
})

export {uploadsinglefile,getAllFiles,downloadId}













