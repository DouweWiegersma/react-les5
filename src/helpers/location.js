const regionColors = {
    Africa: 'blue',
    Americas: 'green',
    Asia: 'red',
    Europe: 'yellow',
    Oceania: 'purple',
    Antarctic: 'pink',

}

export function getColorByRegion(region){
    return regionColors[region] || 'black'
}

