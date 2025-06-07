import React, { useState, useRef } from 'react';
import { Download, Palette, RotateCcw } from 'lucide-react';
import Konva from 'konva';
import { StickerButton } from './components/StickerButton';
import { StickerCanvas } from './components/StickerCanvas';
import { useCanvasDownload } from './hooks/useCanvasDownload';
import { Sticker, StickerTemplate } from './types/sticker';

const STICKER_TEMPLATES: StickerTemplate[] = [
  { emoji: '🌟', label: 'Star' },
  { emoji: '🎈', label: 'Balloon' },
  { emoji: '🎨', label: 'Palette' },
];

function App() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const stageRef = useRef<Konva.Stage>(null);
  const { downloadCanvas } = useCanvasDownload();

  const snapToGrid = (value: number): number => {
    return Math.round(value / 40) * 40;
  };

  const addSticker = (template: StickerTemplate) => {
    const newSticker: Sticker = {
      id: `sticker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      emoji: template.emoji,
      x: snapToGrid(Math.random() * 500), // Random position, snapped to grid
      y: snapToGrid(Math.random() * 300),
      width: 60,
      height: 60,
    };

    setStickers(prev => [...prev, newSticker]);
  };

  const updateSticker = (id: string, x: number, y: number) => {
    setStickers(prev =>
      prev.map(sticker =>
        sticker.id === id ? { ...sticker, x, y } : sticker
      )
    );
  };

  const deleteSticker = (id: string) => {
    setStickers(prev => prev.filter(sticker => sticker.id !== id));
  };

  const clearCanvas = () => {
    setStickers([]);
  };

  const handleDownload = () => {
    if (stickers.length === 0) {
      alert('Please add some stickers before downloading!');
      return;
    }
    downloadCanvas(stageRef);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Palette className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sticker Canvas
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create beautiful compositions by placing and arranging stickers on the canvas. 
            Click buttons to add stickers, drag them around, and download your creation!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Sticker Controls */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Add Stickers
                </h2>
                
                <div className="space-y-3 mb-6">
                  {STICKER_TEMPLATES.map((template) => (
                    <StickerButton
                      key={template.emoji}
                      sticker={template}
                      onClick={() => addSticker(template)}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleDownload}
                    disabled={stickers.length === 0}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download PNG
                  </button>

                  <button
                    onClick={clearCanvas}
                    disabled={stickers.length === 0}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear Canvas
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Stickers:</span>
                      <span className="font-semibold">{stickers.length}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Canvas:</span>
                      <span className="font-semibold">600×400px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="lg:col-span-3">
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <StickerCanvas
                    ref={stageRef}
                    stickers={stickers}
                    onStickerUpdate={updateSticker}
                    onStickerDelete={deleteSticker}
                  />
                </div>

                {/* Canvas Info */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-600 border border-white/30">
                  Click sticker buttons to add • Drag to move • Double-click to delete
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Built with React, Konva, and TypeScript • MyEra Frontend Internship Assignment
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;