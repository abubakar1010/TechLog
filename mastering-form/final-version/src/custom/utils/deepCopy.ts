export const deepCopy = <T>(value: T): T => {
    return JSON.parse(JSON.stringify(value))
}

export const isEmpty = (value: Record<string,any>) => {
    return Object.keys(value).length === 0
}