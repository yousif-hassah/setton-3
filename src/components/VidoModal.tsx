import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow-xl border-4 border-gray-800">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full border-2 border-black hover:bg-red-700 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-4">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="relative pt-[56.25%]">
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;