"use client";
import React from "react";
import { useState, DragEvent, ChangeEvent } from "react";

const FileUploadPage = () => {
  const [files, setFiles] = useState<File[]>([]);

  const preventDefaults = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    preventDefaults(e);
    const dt = e.dataTransfer;
    const newFiles = dt.files;
    handleFiles(newFiles);
  };

  const handleFiles = (newFiles: FileList) => {
    const fileArray = Array.from(newFiles);
    setFiles((prevFiles) => [...prevFiles, ...fileArray]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // file upload wala part dekh lena, i go sleep now.
    console.log("Uploading files:", files);
    setFiles([]);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        id="upload-area"
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 flex flex-col justify-center items-center cursor-pointer"
        onDragEnter={preventDefaults}
        onDragOver={preventDefaults}
        onDragLeave={preventDefaults}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <input
          type="file"
          id="file-input"
          className="hidden"
          multiple
          onChange={handleInputChange}
        />
        <div className="text-center">
          <p className="text-gray-500">
            Drag and drop files here or click to upload
          </p>
        </div>
      </div>
      <ul className="mt-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-sm text-gray-600 mb-2"
          >
            {file.name}
            <button
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemoveFile(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {files.length > 0 && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleUpload}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default FileUploadPage;
