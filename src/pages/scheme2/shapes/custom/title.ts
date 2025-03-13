//@ts-nocheck
import * as joint from '@joint/plus';

export namespace custom {

    export class Title extends joint.dia.Element {
        defaults() {
            return joint.util.defaultsDeep({
                type: 'custom.Title',
                size: { width: 200, height: 50 }, // Размер заголовка
                attrs: {
                    body: {
                        refWidth: '100%',
                        refHeight: '100%',
                        fill: '#FFFFFF',       // Цвет фона
                        stroke: '#FFFFFF',     // Цвет границы
                        strokeWidth: 0,        // Толщина границы
                        rx: 5,                 // Радиус скругления углов
                        ry: 5
                    },
                    label: {
                        text: 'Title',   // Текст заголовка
                        refX: '50%',            // Позиция текста по горизонтали
                        refY: '50%',            // Позиция текста по вертикали
                        textAnchor: 'middle',   // Выравнивание текста по горизонтали
                        textVerticalAnchor: 'middle', // Выравнивание текста по вертикали
                        fontSize: 16,           // Размер шрифта
                        fontWeight: 'bold',     // Жирный шрифт
                        fill: '#333333',        // Цвет текста
                        fontFamily: 'Arial, sans-serif'
                    }
                },
                markup: [
                    {
                        tagName: 'rect',       // Прямоугольник для фона
                        selector: 'body'
                    },
                    {
                        tagName: 'text',       // Текст заголовка
                        selector: 'label'
                    }
                ]
            }, super.defaults);
        }
    }
}
