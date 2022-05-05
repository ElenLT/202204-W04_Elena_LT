export default function strictEquals(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return Object.is(Math.abs(a), Math.abs(b));
    }
    return Object.is(a, b);
}
