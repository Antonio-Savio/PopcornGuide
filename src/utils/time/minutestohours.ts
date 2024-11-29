export function minToHourFormat(minutes: number){
    const hourFloat = minutes / 60

    const hour = String(hourFloat).slice(0,1)

    const min = minutes - (Number(hour) * 60)

    return `${hour} h ${min} min` 
}