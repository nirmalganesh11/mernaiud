
import express from 'express'
import multer from 'multer'
//const path = require('path');
//const express = require('express');
//const multer = require('multer');
//const File = require('../model/file');
//import File from '../models/file'
import { uploadsinglefile,getAllFiles,downloadId } from '../controlers/fileuploader.js'
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 1000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

// Router.post(
//   '/upload',
//   upload.single('file'),
//   uploadsinglefile
// );
Router.route('/upload').post(upload.single('file'),uploadsinglefile);
Router.route('/getAllFiles').get(getAllFiles);

// Router.get('/getAllFiles', 
//   getAllFiles
// );
Router.route('/download/:id').get(downloadId)

//Router.get('/download/:id',downloadId);

export default Router
