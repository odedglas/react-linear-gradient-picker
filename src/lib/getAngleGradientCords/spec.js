import getAngleCords from '.';

describe('utils / getAngleCords', () => {
    const angleSet = [
        {
            angle: 0,
            gradient: { x1: 0, x2: 0, y1: 1, y2: 0 }
        },
        {
            angle: 90,
            gradient: { x1: 0, x2: 1, y1: 0, y2: 0 }
        },
        {
            angle: 180,
            gradient: { x1: 0, x2: 0, y1: 0, y2: 1 }
        },
        {
            angle: 270,
            gradient: { x1: 1, x2: 0, y1: 0, y2: 0 }
        },
        {
            angle: 37,
            gradient: { x1: 0, y1: 0.7986355100472928, x2: 0.6018150231520483, y2: 0 }
        }
    ];

    it.each([0, 90, 180, 270, 37])('Returns the proper gradient for a given angle (%p)', (angle) => {
        const gradient = angleSet.find((item) => item.angle === angle).gradient;
        const cords =  getAngleCords(angle);

        expect(cords.startPoint.x).toEqual(gradient.x1);
        expect(cords.startPoint.y).toEqual(gradient.y1);
        expect(cords.endPoint.x).toEqual(gradient.x2);
        expect(cords.endPoint.y).toEqual(gradient.y2);
    });
});
