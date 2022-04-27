export function getData(item: any) {
    let id = item.id;
    let height = item.height;
    let width = item.width;
    let ratio = height * width;
    let created_at = item.created_at.split('T')[0];
    let urls = {
        small: item.urls.small,
        regular: item.urls.regular,
    }
    let name = item.user.name;
    return { ratio, urls, name,height,width, created_at, id };
}