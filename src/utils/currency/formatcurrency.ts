export function formatCurrency(value: number){
    const dolarFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return dolarFormat.format(value).replaceAll(',', '.').slice(0, -3)
}