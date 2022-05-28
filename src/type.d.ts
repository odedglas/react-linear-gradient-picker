interface PaletteColor {
    color: string,
    opacity: number,
    offset: string | number,
}

type GradientType = 'linear' | 'radial'

interface Stop extends PaletteColor {
    style?: object
}

interface LinearGradient {
    x1: string,
    x2: string,
    y1?: string,
    y2?: string,
    stops: Stop[],
    children: Stop[],
}
