//sort array objects with given order
function sortArray(data, key, order = "asc") {
    const result = data.sort((obj, obj2) =>
        order === "desc"
            ? parseInt(obj[key]) < parseInt(obj2[key])
            : parseInt(obj[key]) > parseInt(obj2[key])
    );
    return result;
}
/**
 * Adds comma to amount for better readability
 * @param {integer or string value } amount
 */
function commalize(amount) {
    if (!amount || isNaN(amount)) {
        return "";
    }
    const amt = amount.toString();
    const len = amt.length;
    switch (len) {
        case 4:
            return amt.substring(0, 1) + "," + amt.substring(1);
        case 5:
            return amt.substring(0, 2) + "," + amt.substring(2);
        case 6:
            return (
                amt.substring(0, 1) +
                "," +
                amt.substring(1, 3) +
                "," +
                amt.substring(3)
            );
        case 7:
            return (
                amt.substring(0, 2) +
                "," +
                amt.substring(2, 4) +
                "," +
                amt.substring(4)
            );
        case 8:
            return (
                amt.substring(0, 1) +
                "," +
                amt.substring(1, 3) +
                "," +
                amt.substring(3, 5) +
                "," +
                amt.substring(5)
            );
        case 9:
            return (
                amt.substring(0, 2) +
                "," +
                amt.substring(2, 4) +
                "," +
                amt.substring(6, 4) +
                "," +
                amt.substring(6, 9)
            );
        default:
            return amt;
    }
}
export const HelperMath = {
    sortArray,
    commalize
};
