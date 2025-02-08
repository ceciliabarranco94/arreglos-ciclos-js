/*
Exercise #4 (sugerencia filter() e includes())

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// funcion para encontrar cursos comunes
let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

// imprime los cursos comunes
commonCourses.forEach(course => console.log('Common course: ' + course)); //Common course: Programming


//DOCUMENTACIÓN filter()

/**
 * const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
 * 
 * const result = words.filter((word) => word.length > 6);
 * 
 * console.log(result);
 * // Expected output: Array ["exuberant", "destruction", "present"]
 */

//DOCUMENTACIÓN includes()
/**
 * const array1 = [1, 2, 3];
 * console.log(array1.includes(2));
 * // Expected output: true
 * 
 * 
 * const pets = ['cat', 'dog', 'bat'];
 * console.log(pets.includes('cat'));
 * // Expected output: true
 * 
 * console.log(pets.includes('at'));
 * // Expected output: false
 */

//PRUEBAS
/**
 *  
 * let student1Courses = ['Math', 'English', 'Programming'];
 * let student2Courses = ['Geography', 'Spanish', 'Programming'];
 * function getCommonCourses(student1Courses, student2Courses);
 * for (let student1Courses = student2Courses);
 * 
 * let student1Courses = ['Math', 'English', 'Programming'];
 * let student2Courses = ['Geography', 'Spanish', 'Programming'];
 * function getCommonCourses(student1Courses, student2Courses) => s	tudent1Courses.filter(student2Courses);
 * 
 */