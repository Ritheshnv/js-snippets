function getStudents(classRoom) {
    const {hasTeachingAssistant, classList} = classRoom;
    let teacher, teachingAssistant, students;
    if(hasTeachingAssistant) {
         [teacher, teachingAssistant, ...students] = classList;
    } else {
         [teacher, ...students] = classList;
    }
    return students;
}

const classRoom = {
    hasTeachingAssistant: false,
    classList: ['Rashi', 'Kumar', 'Ram', 'Rojesh', 'Kwatles']
}

console.log(getStudents(classRoom));