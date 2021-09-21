export const dayDiff = (d1: Date, d2: Date) => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000)
