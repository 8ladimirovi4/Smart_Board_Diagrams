// @ts-nocheck
import { useEffect, useRef, useState, memo } from 'react';
//import { gsap } from 'gsap'; создает анимацию
import { Handle, NodeResizer, Position } from '@xyflow/react';
import { ReactSVG } from 'react-svg'; // Импортируем компонент из библиотеки
import './style.css';

function UserSvgNode({ data, isConnectable }) {
  const [svgContent, setSvgContent] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: '240', height: '252' });

  // Функция обработки загрузки файла
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.readAsText(file); // Читаем загруженные данные
      reader.onload = (e) => { // Когда данные загрузились, передаем в state
        const content = e.target.result;
        setSvgContent(content);
      };
    } else {
      alert('Пожалуйста, загрузите файл в формате SVG');
    }
  };

    // Функция для изменения размеров контейнера при изменении размера
    const handleResize = (event, params) => {
        const {width, height} = params
        setSvgDimensions({ width, height});
      };



  return (
    <div
    className="user-svg-node-container"
    style={{ width: `${svgDimensions.width}px`, height: `${svgDimensions.height}px` }}
  >
      {/* Используем ReactSVG для безопасного рендеринга SVG */}
      {svgContent && (
        <ReactSVG
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`} // Передаем контент как строку
          width={svgDimensions.width} // Масштабируем SVG по ширине
          height={svgDimensions.height} // Масштабируем SVG по высоте
          beforeInjection={(svg) => {
            // Обновляем viewBox для корректного масштабирования
           //svg.setAttribute('viewBox', `0 0 ${svgDimensions.width} ${svgDimensions.height}`); // масштаб
           svg.setAttribute('width', svgDimensions.width);
           svg.setAttribute('height', svgDimensions.height);
          }}
        />
      )}

      {/* Загрузка SVG файла */}
      <input type="file" accept="image/svg+xml" onChange={handleFileUpload} />

      {/* Компонент NodeResizer для изменения размера */}
      <NodeResizer
        minWidth={50}  // Минимальная ширина
        minHeight={50} // Минимальная высота
        onResize={handleResize} // Обработчик для изменения размеров
      />
    </div>
  );
}

//export default memo(UserSvgNode);
export default memo(UserSvgNode);
