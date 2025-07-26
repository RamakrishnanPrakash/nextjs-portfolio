"use client";

import { useEffect, useState } from "react";

export const AnimateElement = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    // Create floating elements

    const newElements = [];
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        color: i % 2 === 0 ? "#8B5CF6" : "#FB923C",
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2,
      });
    }
    setElements(newElements);

    // Animate elements
    const interval = setInterval(() => {
      setElements((prev) =>
        prev.map((element) => {
          let newX = element.x + Math.cos(element.direction) * element.speed;
          let newY = element.y + Math.sin(element.direction) * element.speed;
          let newDirection = element.direction;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newDirection = Math.PI - element.direction;
          }
          if (newY <= 0 || newY >= 100) {
            newDirection = -element.direction;
          }

          // Keep within bounds
          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));

          return {
            ...element,
            x: newX,
            y: newY,
            direction: newDirection,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full opacity-20 blur-xl animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            transform: "translate(-50%, -50%)",
            transition: "all 0.05s linear",
          }}
        />
      ))}
    </>
  );
};
