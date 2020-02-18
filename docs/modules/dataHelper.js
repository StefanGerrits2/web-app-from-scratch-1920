// Add data
//let structuredData = {beers: []}

export default function dataHelper(data) {
    // Update data
    let structuredData = {beers: []};
    data.forEach(item => {
        item.volume = item.volume.value + ' ' + item.volume.unit; 
        item.boil_volume = item.boil_volume.value + ' ' + item.boil_volume.unit;

        structuredData.beers.push(item);
    
        console.log(structuredData);
    });

    return structuredData;
}