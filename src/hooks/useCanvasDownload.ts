import { useCallback } from 'react';
import Konva from 'konva';

export const useCanvasDownload = () => {
  const downloadCanvas = useCallback((stageRef: React.RefObject<Konva.Stage>) => {
    if (!stageRef.current) {
      console.error('Canvas reference not found');
      return;
    }

    try {
      // Ensure the stage is properly rendered before export
      const stage = stageRef.current;
      
      // Force a redraw to ensure all elements are rendered
      stage.draw();
      
      // Wait a brief moment for rendering to complete
      setTimeout(() => {
        try {
          const dataURL = stage.toDataURL({
            mimeType: 'image/png',
            quality: 1,
            pixelRatio: 2, // Higher resolution for better quality
          });

          // Verify we got a valid data URL
          if (!dataURL || dataURL === 'data:,') {
            console.error('Failed to generate canvas data URL');
            return;
          }

          const link = document.createElement('a');
          link.download = `sticker-canvas-${new Date().toISOString().split('T')[0]}.png`;
          link.href = dataURL;
          
          // Ensure the link is added to the document
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
          }, 100);
          
        } catch (exportError) {
          console.error('Failed to export canvas:', exportError);
          alert('Failed to download image. Please try again.');
        }
      }, 100);
      
    } catch (error) {
      console.error('Failed to download canvas:', error);
      alert('Failed to download image. Please try again.');
    }
  }, []);

  return { downloadCanvas };
};