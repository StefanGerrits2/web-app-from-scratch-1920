export default function transformData(data) {
    data.map(item => {
        item.volume = item.volume.value + ' ' + item.volume.unit; 
        item.boil_volume = item.boil_volume.value + ' ' + item.boil_volume.unit;
    })

    return data
}