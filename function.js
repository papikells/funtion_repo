function solveQuadratic(a, b, c) {
    let solutions = [];
  
    let discriminant = b ** 2 - 4 * a * c;
  
    if (discriminant < 0) {
      return solutions;
    } else if (discriminant === 0) {
      let x = -b / (2 * a);
      solutions.push(x);
    } else {
      let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      solutions.push(x1, x2);
    }
  
    return solutions;
  }