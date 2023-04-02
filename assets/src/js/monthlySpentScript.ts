function onSubmit(arg1, arg2) {
    const form = FormApp.openById('1WVfnxiutUW_vP9BqD53pTWjHSc9CYhtuRBDiSywQX3w');
    const date = new Date();
    const day = date.getDate();
    const month = day > 10 ? date.getMonth() + 2 : date.getMonth() + 1;

    const year = date.getFullYear();
    const shetName = year + "-" + month
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(shetName);
    const firstCell = sheet.getRange("A1");

    let indexX = 1;
    form.getResponses().forEach((response) => {
        const items = response.getItemResponses()

        const originalItems = items.reduce((acc, item) => {
            return {...acc, [item.getItem().getTitle()]: item.getResponse()}
        }, {"timestamp": response.getTimestamp()});

        let containsArray = false;

        const converted = Object.keys(originalItems).reduce((acc, key, index) => {
            if (Array.isArray(originalItems[key])) {
                containsArray = true
                return [
                    ...acc,
                    ...originalItems[key].map(value => ({...originalItems, [key]: value}))
                ]
            }
            return acc
        }, [])

        // const objectsToSend = containsArray ? converted : originalItems;
        // objectsToSend.forEach((item) => {
            Object.values(originalItems).forEach((column, indexY) => {
                firstCell.offset(indexX, indexY).setValue(column);
            })
            indexX += 1;
        // })
    })

}
