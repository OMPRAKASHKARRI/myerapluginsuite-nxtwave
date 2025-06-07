import React from 'react';
import { StickerTemplate } from '../types/sticker';

interface StickerButtonProps {
  sticker: StickerTemplate;
  onClick: () => void;
}

export const StickerButton: React.FC<StickerButtonProps> = ({ sticker, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-100 hover:border-blue-200"
    >
      <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
        {sticker.emoji}
      </div>
      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
        {sticker.label}
      </span>
    </button>
  );
};