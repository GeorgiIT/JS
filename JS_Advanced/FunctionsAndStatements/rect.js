function createRect(width, heigth){
    const rect = {width, heigth}

    rect.getArea = () => {
        return rect.width * rect.heigth;
    };

    return rect;
}
const myRect = createRect(15, 10);
const getArea = myRect.getArea;

console.log(getArea())