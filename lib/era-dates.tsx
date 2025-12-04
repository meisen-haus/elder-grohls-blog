export function convertDatesToNerd(date: Date): string | undefined {
    const daysOfWeek =[
        'Sundas',
        'Morndas',
        'Tirdas',
        'Middas',
        'Turdas',
        'Fredas',
        'Loredas',
    ]

    const monthsOfYear = [
        'Morning Star',
        'Sun\'s Dawn',
        'First Seed',
        'Rain\'s Hand',
        'Second Seed',
        'Midyear',
        'Sun\'s Height',
        'Last Seed',
        'Hearthfire',
        'Frostfall',
        'Sun\'s Dusk',
        'Evening Star',
    ]

    const ordinalSuffix = (day: number) => {
        if (day % 10 === 1 && day !== 11) return 'st'
        if (day % 10 === 2 && day !== 12) return 'nd'
        if (day % 10 === 3 && day !== 13) return 'rd'
        return 'th'
    }

    const dayOfWeek = daysOfWeek[date.getDay()]
    const month = monthsOfYear[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${dayOfWeek}, ${day}${ordinalSuffix(day)} of ${month}, 3E ${427 + (year - 2002)}`
  }