//@ts-nocheck
import * as joint from '@joint/plus';
export class ChartElement extends joint.shapes.chart.Knob {
    constructor(config) {
        super(config);
    }

    static createDeagram(diagram){
        return new ChartElement(diagram)
    }
}

