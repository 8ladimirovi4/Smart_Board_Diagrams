import * as joint from '@joint/plus';

//custom shapes classes
import { Polygon } from '../shapes/custom/polygon'
import { ChartElement } from '../shapes/custom/chart_knob'

//stencil group config
export const stencilGroups = {
    basic: {
        index: 1,
        label: 'Basic shapes',
        paperOptions: { background: 'blue' }
      },
      advanced: { index: 2, label: 'Advanced shapes' },
      custom: { index: 3, label: 'Custom shapes' },
      svg: {
          index: 5,
          label: 'Svg shapes',
          layout: {
              marginY: 10,
              rowGap: 10,
              columnWidth: 140,
              columns: 4,
              rowHeight: 'compact',
          },
          paperOptions: {
              interactive: false // Пример настройки, если нужно
          }
      },
      charts: { 
        index: 4,
        label: 'Charts',
    }
};

const PRIMARY_SHAPE_COLOR = '#353535';
const PRIMARY_SHAPE_FILL = '#ffffff';

//svg shapes config
const stencilPaths = [
    // Tall rectangle
    'M 0,0 50,0 50,300 0,300 Z',
    // Tall narrow rectangle
    'M 0,0 30,0 30,300 0,300 Z',
    // Half of tall rectangle
    'M 0,0 50,0 50,150 0,150 Z',
    // Half of tall narrow rectangle
    'M 0,0 30,0 30,150 0,150 Z',
    // Arrows
    'M 0 0 H 100 V 100 Z',
    'M 0,0 100,0 50,100 Z',
    'M 0,0 50,100 100,0 Q 50,50 0,0 Z',
    'M 0,0 100,50 0,100 25,50 0,0 Z',
    // Cross
    'M 0,40 40,40 40,0 60,0 60,40 100,40 100,60 60,60 60,100 40,100 40,60 0,60 Z',
    // Sheared rectangle
    'M 10 0 H 90 l 10 10 V 90 l -10 10 H 10 l -10 -10 V 10 Z',
    // Diamond
    'M 50,0 100,50 50,100 0,50 50,0 Z',
    // Pentagon
    'M 50,0 100,38 82,100 18,100 0,38 Z',
    // Hexagon
    'M 0,50 25,0 75,0 100,50 75,100 25,100 Z',
    // Octagon
    'M 0,40 40,0 60,0 100,40 100,60 60,100 40,100 0,60 Z',
    // Heart
    'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z',
    // Star
    'M 0,42.5 37.5,37.5 50,5 62.5,37.5 100,42.5 75,62.5 80,100 50,85 20,100 25,62.5 0,42.5 Z',
    // Rectangle
    'M 0,0 100,0 100,50 0,50 Z',
    // Rounded rectangle
    'M 10,0 Q 0,0 0,10 L 0,40 Q 0,50 10,50 L 90,50 Q 100,50 100,40 L 100,10 Q 100,0 90,0 Z',
    // Circle
    'M 0,50 A 50,50 0 1,0 100,50 A 50,50 0 1,0 0,50 Z',
    // Quarter circle
    'M 0,50 A 50,50 0 1,0 50,100 L 50,50 Z',
    // Ellipse
    'M 0,50 A 50,25 0 1,0 100,50 A 50,25 0 1,0 0,50 Z',
    // Half circle
    'M 0,50 A 50,50 0 1,0 100,50 L 50,50 Z',
];
//svg shapes
const svgShapes = stencilPaths.map(d => Polygon.fromPathData(d));

//diagrams config
const knobsCfg = [
    {
        //position: { x: 100, y: 100 },
        size: { width: 200, height: 200 },
        min: 0, max: 100,
        value: 50, fill: '#2c97de',
        sliceDefaults: {
            legendLabel: 'CPU\n{value:.0f}%'
        },
        attrs: {
            '.legend-slice text': { 'font-size': 10, fill: '#2c97de', style: { 'text-shadow': '0 0 1px black' }}
        }
    },
    {
       // position: { x: 50, y: 50 },
       size: { width: 200, height: 200 },
        min: 0, max: 100,
        value: 80, fill: '#2c97de',
        sliceDefaults: {
            legendLabel: 'CPU\n{value:.0f}%'
        },
        attrs: {
            '.legend-slice text': { 'font-size': 10, fill: '#2c97de', style: { 'text-shadow': '0 0 1px black' }}
        }
    }
]
//diagram shapes
const knobShapes = knobsCfg.map(cfg => ChartElement.createDeagram(cfg))


export const stencilShapes = {
    basic: [
        {
            type: 'standard.Rectangle',
            name: 'Rectangle',
            attrs: {
                body: {
                    rx: 2,
                    ry: 2,
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
        {
            type: 'standard.Ellipse',
            name: 'Circle',
            attrs: {
                body: {
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
        {
            type: 'standard.Ellipse',
            size: { width: 60, height: 40 },
            name: 'Ellipse',
            attrs: {
                body: {
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            type: 'standard.Polygon',
            name: 'Rhombus',
            attrs: {
                body: {
                    points: 'calc(0.5 * w),0 calc(w),calc(0.5 * h) calc(0.5 * w),calc(h) 0,calc(0.5 * h)',
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
        {
            type: 'standard.Polyline',
            name: 'Polyline',
            attrs: {
                body: {
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
        {
            // Triangle pointing up
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Triangle Up',
            attrs: {
                body: {
                    d: 'M calc(0.5*w) 0 calc(w) calc(h) H 0 Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Triangle pointing down
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Triangle Down',
            attrs: {
                body: {
                    d: 'M 0 0 L calc(w) 0 calc(0.5*w) calc(h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Triangle with Curved Sides
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Triangle Curved',
            attrs: {
                body: {
                    d: 'M calc(w / 2) calc(h) L 0 calc(h / 2) A calc(w / 2) calc(h / 2) 0 0 1 calc(w / 2) 0 A calc(w / 2) calc(h / 2) 0 0 1 calc(w) calc(h / 2) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            },
            keywords: ['triangle', 'curved']
        },
        {
            // Pentagon
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Pentagon',
            attrs: {
                body: {
                    d: `
                                M calc(0.75*w) 0
                                L calc(w) calc(0.5*h)
                                L calc(0.5*w) calc(h)
                                L 0 calc(0.5*h)
                                L calc(0.25*w) 0
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Hexagon
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Hexagon',
            attrs: {
                body: {
                    d: 'M 0 calc(0.5*h) L calc(0.25*w) 0 calc(0.75*w) 0 calc(w) calc(0.5*h) calc(0.75*w) calc(h) calc(0.25*w) calc(h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Octagon
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Octagon',
            attrs: {
                body: {
                    d: 'M calc(0.3*w) 0 L calc(0.7*w) 0 calc(w) calc(0.3*h) calc(w) calc(0.7*h) calc(0.7*w) calc(h) calc(0.3*w) calc(h) 0 calc(0.7*h) 0 calc(0.3*h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Parallelogram
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Parallelogram',
            attrs: {
                body: {
                    d: `
                                M calc(0.3*w) 0
                                L calc(w) 0
                                L calc(0.7*w) calc(h)
                                L 0 calc(h)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Trapezoid
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Trapezoid',
            attrs: {
                body: {
                    d: `
                                M calc(0.2*w) 0
                                L calc(0.8*w) 0
                                L calc(w) calc(h)
                                L 0 calc(h)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Star
            type: 'standard.Path',
            size: { width: 40, height: 40 },
            name: 'Star',
            attrs: {
                body: {
                    d: `
                                M calc(0.5*w) 0
                                L calc(0.61*w) calc(0.25*h)
                                L calc(w) calc(0.3*h)
                                L calc(0.7*w) calc(0.5*h)
                                L calc(0.75*w) calc(0.79*h)
                                L calc(0.5*w) calc(0.65*h)
                                L calc(0.25*w) calc(0.79*h)
                                L calc(0.3*w) calc(0.5*h)
                                L 0 calc(0.3*h)
                                L calc(0.39*w) calc(0.25*h)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 40, height: 40 }
            }
        },
        {
            // Cross
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Cross',
            attrs: {
                body: {
                    d: `
                                M calc(0.3*w) 0
                                L calc(0.7*w) 0
                                V calc(0.3*h)
                                L calc(w) calc(0.3*h)
                                L calc(w) calc(0.7*h)
                                H calc(0.7*w)
                                L calc(0.7*w) calc(h)
                                L calc(0.3*w) calc(h)
                                V calc(0.7*h)
                                L 0 calc(0.7*h)
                                L 0 calc(0.3*h)
                                H calc(0.3*w)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Arrow
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Arrow',
            attrs: {
                body: {
                    d: `
                                M 0 calc(0.5*h)
                                L calc(0.5*w) 0
                                L calc(w) calc(0.5*h)
                                L calc(0.8*w) calc(0.5*h)
                                L calc(0.8*w) calc(h)
                                L calc(0.2*w) calc(h)
                                L calc(0.2*w) calc(0.5*h)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Pentagon with Curved Sides
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Pentagon Curved',
            attrs: {
                body: {
                    d: `
                                M 0 calc(0.62*h)
                                Q calc(0.2*w) calc(0.15*h) calc(0.5*w) 0
                                Q calc(0.8*w) calc(0.15*h) calc(w) calc(0.62*h)
                                L calc(0.77*w) calc(h)
                                L calc(0.23*w) calc(h)
                                Z
                            `,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // Right-Angle Triangle
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'Triangle Right-Angle',
            attrs: {
                body: {
                    strokeLinejoin: 'butt',
                    d: 'M 0 calc(h) L calc(w) calc(h) L 0 0 Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // L-shape 1
            type: 'standard.Path',
            size: { width: 40, height: 40 },
            name: 'L-shape 1',
            attrs: {
                body: {
                    d: 'M 0 0 L calc(w/2) 0 L calc(w/2) calc(h/2) L calc(w) calc(h/2) L calc(w) calc(h) L 0 calc(h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 40, height: 40 }
            }
        },
        {
            // L-shape 2
            type: 'standard.Path',
            size: { width: 40, height: 40 },
            name: 'L-shape 2',
            attrs: {
                body: {
                    d: 'M 0 0 L calc(w) 0 L calc(w) calc(h/2) L calc(w/2) calc(h/2) L calc(w/2) calc(h) L 0 calc(h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 40, height: 40 }
            }
        },
        {
            // L-shape 3
            type: 'standard.Path',
            size: { width: 40, height: 40 },
            name: 'L-shape 3',
            attrs: {
                body: {
                    d: 'M 0 0 L calc(w) 0 L calc(w) calc(h) L calc(w/2) calc(h) L calc(w/2) calc(h/2) L 0 calc(h/2) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 40, height: 40 }
            }
        },
        {
            // L-shape 4
            type: 'standard.Path',
            size: { width: 40, height: 40 },
            name: 'L-shape 4',
            attrs: {
                body: {
                    d: 'M calc(w / 2) 0 L calc(w) 0 L calc(w) calc(h) L 0 calc(h) L 0 calc(h / 2) L calc(w / 2) calc(h / 2) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 40, height: 40 }
            }
        },
        {
            // U-shape 1
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'U-shape 1',
            attrs: {
                body: {
                    d: 'M 0 0 calc(w / 3) 0 calc(w / 3) calc(h / 2) calc(2 * w / 3) calc(h / 2) calc(2 * w / 3) 0 calc(w) 0 calc(w) calc(h) 0 calc(h) Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        },
        {
            // U-shape 2
            type: 'standard.Path',
            size: { width: 60, height: 40 },
            name: 'U-shape 2',
            attrs: {
                body: {
                    d: 'M 0 0 0 calc(h) calc(w / 3) calc(h) calc(w / 3) calc(h / 2) calc(2 * w / 3) calc(h / 2) calc(2 * w / 3) calc(h) calc(w) calc(h) calc(w) 0 Z',
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeDasharray: '0'
                },
                label: {
                    y: 'calc(h + 5)',
                    fill: PRIMARY_SHAPE_COLOR,
                    textVerticalAnchor: 'top',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 0,
                }
            },
            targetAttributes: {
                size: { width: 60, height: 40 }
            }
        }

    ],
    advanced: [
        {
            type: 'standard.Image',
            size: { width: 53, height: 42 },
            name: 'Image',
            attrs: {
                image: {
                    xlinkHref: 'assets/image-icon1.svg'
                },
                body: {
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11
                }
            },
            targetAttributes: {
                size: { width: 53, height: 42 }
            }
        },
        {
            type: 'standard.EmbeddedImage',
            size: { width: 90, height: 54 },
            name: 'Card',
            attrs: {
                body: {
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                image: {
                    xlinkHref: 'assets/image-icon1.svg',
                    width: 'calc(0.4 * w)',
                    height: 'calc(h)',
                    x: 3,
                    y: 0,
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 90, height: 54 },
                attrs: {
                    image: { width: 'calc(0.3*w)', height: 'calc(h-20)', x: 10, y: 10 }
                }
            }
        },
        {
            type: 'standard.HeaderedRectangle',
            size: { width: 90, height: 54 },
            name: 'Rectangle with header',
            attrs: {
                body: {
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                header: {
                    stroke: PRIMARY_SHAPE_COLOR,
                    fill: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0',
                    height: 10
                },
                headerText: {
                    text: 'header',
                    textWrap: {
                        maxLineCount: 1,
                        width: -10,
                        ellipsis: true
                    },
                    fill: '#FFFFFF',
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 7,
                    strokeWidth: 0,
                    y: 5
                },
                bodyText: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie.',
                    textWrap: {
                        width: -10,
                        height: -20,
                        ellipsis: true
                    },
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0,
                    y: 'calc(h/2 + 10)',
                }
            },
            targetAttributes: {
                size: { width: 90, height: 54 },
                attrs: {
                    header: { height: 20 },
                    headerText: { y: 10, fontSize: 11 }
                }
            }
        },
        {
            type: 'standard.InscribedImage',
            size: { width: 64, height: 64 },
            name: 'Icon',
            attrs: {
                border: {
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                background: {
                    fill: PRIMARY_SHAPE_FILL
                },
                image: {
                    xlinkHref: 'assets/image-icon1.svg'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
        {
            type: 'standard.Cylinder',
            size: { width: 64, height: 50 },
            name: 'Cylinder',
            attrs: {
                body: {
                    lateralArea: 5,
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                top: {
                    cy: 5,
                    ry: 5,
                    fill: PRIMARY_SHAPE_FILL,
                    stroke: PRIMARY_SHAPE_COLOR,
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    fill: PRIMARY_SHAPE_COLOR,
                    fontFamily: 'Open Sans',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            targetAttributes: {
                size: { width: 64, height: 64 }
            }
        },
    ],
    custom:[
        {
            type: 'custom.Title',  
        },
    ],
    svg: svgShapes,
    charts: knobShapes
};