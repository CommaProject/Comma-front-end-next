import React, { useEffect, useRef, useState } from 'react';
import * as style from './RandomAlbumLocation.style';

export const RandomAlbumLocation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX - offset.x, y: event.clientY - offset.y });

  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    setOffset({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    });
    console.log(event.clientX, event.clientY ,offset, dragStart)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if(canvas && context){
      const img = new Image();
      img.src = 'https://direct.samsunglife.com/upload/202103/16084.jpg'

      img.onload = () =>{
        canvas.width = 1000;
        canvas.height = 1000;

        context.drawImage(img, 0 + offset.x , 0 + offset.y);
      }
    }
  }, []);

  return (
    <style.Wrapper>
      <style.CanvasContainer
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      />
    </style.Wrapper>
  );
};
