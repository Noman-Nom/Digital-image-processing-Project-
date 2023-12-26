import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceDetector = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ]);
    };

    const startVideo = () => {
      navigator.getUserMedia(
        { video: {} },
        (stream) => (videoRef.current.srcObject = stream),
        (err) => console.error(err)
      );
    };

    const handlePlay = async () => {
      const video = videoRef.current;
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);

      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
    };

    loadModels();
    startVideo();
  }, []);

  return (
    <div>
      <video id="video" width="720" height="560" autoPlay muted ref={videoRef}></video>
    </div>
  );
};

export default FaceDetector;
