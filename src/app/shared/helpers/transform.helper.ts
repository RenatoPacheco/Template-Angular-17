export function transformToBoolean<T>(value: boolean|null|T): boolean {
    return typeof value !== 'boolean' ? (/true/i).test(`${value}`) : value;
}

export function transformToNumber<T>(value: number|null|T): number {
    return typeof value !== 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value;
}