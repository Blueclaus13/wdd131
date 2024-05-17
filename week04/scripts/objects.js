
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language Course",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ],
  enrollStudent: function (sectionNumber){
    const sectionIndex = this.sections.findIndex((section) =>
    section.sectionNum == sectionNumber);
    if(sectionIndex >= 0){
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNumber){
    const sectionIndex = this.sections.findIndex((section) =>
      section.sectionNum == sectionNumber);
      if(sectionIndex >= 0){
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
  },
};

function setCourseData(curse){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = curse.name;
    courseCode.textContent = curse.code;
}

function renderSections(sections){
    const template = sections.map( (section) =>
        `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
    );
    document.querySelector("#sections").innerHTML = template.join("");
}

const enrollStudent = document.querySelector("#enrollStudent");
const dropStudent = document.querySelector("#dropStudent");
const sectionNumber = document.querySelector("#sectionNumber");

enrollStudent.addEventListener("click", function(){
  aCourse.enrollStudent(sectionNumber.value);
  console.log("done")
});

dropStudent.addEventListener("click", function(){
  aCourse.dropStudent(sectionNumber.value);
});

setCourseData(aCourse);
renderSections(aCourse.sections);

