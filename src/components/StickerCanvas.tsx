import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { Sticker } from '../types/sticker';
import Konva from 'konva';

interface StickerCanvasProps {
  stickers: Sticker[];
  onStickerUpdate: (id: string, x: number, y: number) => void;
  onStickerDelete: (id: string) => void;
}

export const StickerCanvas = forwardRef<Konva.Stage, StickerCanvasProps>(({
  stickers,
  onStickerUpdate,
  onStickerDelete,
}, ref) => {
  const stageRef = useRef<Konva.Stage>(null);
  const [draggedSticker, setDraggedSticker] = useState<string | null>(null);

  // Expose the stage ref to parent component
  useImperativeHandle(ref, () => stageRef.current!, []);

  const snapToGrid = (value: number): number => {
    return Math.round(value / 40) * 40;
  };

  const handleDragStart = (id: string) => {
    setDraggedSticker(id);
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>, id: string) => {
    const node = e.target;
    const snappedX = snapToGrid(node.x());
    const snappedY = snapToGrid(node.y());
    
    // Keep sticker within canvas bounds
    const boundedX = Math.max(0, Math.min(snappedX, 600 - 60));
    const boundedY = Math.max(0, Math.min(snappedY, 400 - 60));
    
    node.x(boundedX);
    node.y(boundedY);
    
    onStickerUpdate(id, boundedX, boundedY);
    setDraggedSticker(null);
  };

  const handleDoubleClick = (id: string) => {
    onStickerDelete(id);
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <Stage
          width={600}
          height={400}
          ref={stageRef}
          className="cursor-grab active:cursor-grabbing"
        >
          <Layer>
            {/* Grid pattern for visual guidance */}
            {Array.from({ length: 16 }, (_, i) => (
              <React.Fragment key={`v-${i}`}>
                <Text
                  x={i * 40}
                  y={0}
                  width={1}
                  height={400}
                  fill="rgba(0,0,0,0.05)"
                />
              </React.Fragment>
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <React.Fragment key={`h-${i}`}>
                <Text
                  x={0}
                  y={i * 40}
                  width={600}
                  height={1}
                  fill="rgba(0,0,0,0.05)"
                />
              </React.Fragment>
            ))}
            
            {/* Stickers */}
            {stickers.map((sticker) => (
              <Text
                key={sticker.id}
                x={sticker.x}
                y={sticker.y}
                text={sticker.emoji}
                fontSize={48}
                draggable
                onDragStart={() => handleDragStart(sticker.id)}
                onDragEnd={(e) => handleDragEnd(e, sticker.id)}
                onDblClick={() => handleDoubleClick(sticker.id)}
                shadowColor="rgba(0,0,0,0.2)"
                shadowBlur={draggedSticker === sticker.id ? 15 : 5}
                shadowOffset={{ x: 2, y: 2 }}
                scaleX={draggedSticker === sticker.id ? 1.1 : 1}
                scaleY={draggedSticker === sticker.id ? 1.1 : 1}
                opacity={draggedSticker === sticker.id ? 0.8 : 1}
              />
            ))}
          </Layer>
        </Stage>
      </div>
      
      {/* Instructions */}
      <div className="absolute -bottom-12 left-0 right-0 text-center">
        <p className="text-sm text-gray-500">
          Double-click stickers to delete • Stickers snap to 40px grid
        </p>
      </div>
    </div>
  );
});

StickerCanvas.displayName = 'StickerCanvas';

export { StickerCanvas as default };