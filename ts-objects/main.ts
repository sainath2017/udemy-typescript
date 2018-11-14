class Point1 {
   x: number;
   y: number;

   draw(x,y) {
       console.log(this.x+this.y);
   }
}

let pointObject: Point1;
pointObject.x = 1;
pointObject.y = 2;
// pointObject.draw(1,2);