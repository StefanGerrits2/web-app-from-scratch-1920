// Add data
// let structuredData = {beers: []};

export default function dataHelper(data) {
    // Update data
    let structuredData = [];
    data.forEach(item => {
        structuredData.push(item);
    });

    console.log('original non changed data', structuredData)

    return structuredData.map(item => {
        return {
            ...item,
            readableVolume: item.volume.value + ' ' + item.volume.unit,
            readableBoilVolume: item.boil_volume = item.boil_volume.value + ' ' + item.boil_volume.unit,
            ingredients: Object.entries(item.ingredients).reduce((accumulator, ingredientsCategory) => {
                const key = ingredientsCategory[0];
                const ingredients = ingredientsCategory[1];

                if (Array.isArray(ingredients)) {
                    return [
                        ...accumulator,
                        ...ingredients.map((ingredient) => {
                            return {
                                ...ingredient,
                                type: key.charAt(0).toUpperCase() + key.slice(1),
                            };
                        })
                    ]
                }
                else {
                    return [
                        ...accumulator,
                        {
                            name: ingredients,
                            type: key.charAt(0).toUpperCase() + key.slice(1),
                        }
                    ]
                }
            }, []),
        }
    }) 
}