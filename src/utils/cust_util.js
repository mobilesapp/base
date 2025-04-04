export function generateCustomerId() {
    const prefix = 'CUST';
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, '');
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${prefix}-${formattedDate}-${randomString}`;
}
