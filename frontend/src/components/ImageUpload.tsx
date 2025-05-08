import React, { useState, useCallback, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { baseAPIURL } from "../constants/constants";
import { Image, ImageApiResponse } from "../interfaces/imageResponse";

const ImageUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${baseAPIURL}/images/all`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data: ImageApiResponse = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch images.");
      }

      setImages(data.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    setStatus("Uploading...");

    try {
      const response = await fetch(`${baseAPIURL}/images/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Upload successful!");
        setFiles([]);
        getImages();
      } else {
        setStatus("Upload failed. Please try again.");
      }
    } catch (error) {
      setStatus("Error uploading files. Please try again.");
    }
  };

  if (loading) return <p>Loading.....</p>;

  return (
    <section className="bg-gray-50 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        {images.length > 0 ? (
          images.map((item) => (
            <div key={item.ID} className="flex justify-center items-center">
              <img
                className="w-32 h-32 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                src={baseAPIURL + item.image_url}
                alt="Fitness Image"
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No images found.
          </p>
        )}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Join Our Community
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Share Your Fitness Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload photos of your progress or workout sessions and become part
            of our motivating community
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-500"
                }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Drag & drop images here or click to upload
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Share your workout photos, progress pics, or healthy meals
              </p>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
              />
            </div>

            {files.length > 0 && (
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {files.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full hover:bg-black/75"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}

            <button
              onClick={uploadFiles}
              disabled={files.length === 0}
              className={`mt-6 w-full py-3 rounded-lg font-semibold text-white
                ${
                  files.length > 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Upload Images
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
