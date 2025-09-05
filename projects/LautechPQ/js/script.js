



/*  Dictionary of Departmens */ 
const departmentsData = {
  agric: ["Agricultural Economics", "Agricultural Extension and Rural Development","Animal Nutrition and Biotechnology","Animal Production and Soil Science","Aquaculture and Fisheries Management","Crop and Environmental Protection","Crop and Soil Science","Forestry","Wildlife and Ecotourism"],
  arts: ["English and Literary Studies", "History", "Library and Information Sciences","Linguistics and Nigerian Languages","Philosophy","Phycology","Political Science","Mass Communication","Sociology","Theatre Arts"],
  basicClinical: ["Chemical Pathology","Haematology and Blood Transfusion","Medical Microbiology and Parasitology","Morbid Anatomy and Histopathology","Pharmacology and Therapeutics"],
  medical: ["Anatomy", "Medical Laboratory Sciences","Physiology"],
  clinical: ["Anaesthesia","Community Medicine","Ear, Nose, and Throat","Medicine","Obstetrics and Gynaecology"," Ophthalmology","Pediatrics and Child Health"," Psychiatry","Radiology","Surgery"],
  computing: ["Computer Science", "Cyber Security Science","Information Systems"],
  engineer: ["Agricultural Engineering","Chemical Engineering", "Civil Engineering","Computer Engineering","Electronics and Electrical Engineering ","Food Engineering","Mechanical Engineering"],
  environ: ["Architecture","Building","Estate Management","Fine and Applied Arts", "Surveying and Geoinformatic","Urban and Regional Planning"],
  food: ["Consumer and Home Economics","Food Science","Hospitality and Tourism Management ","Nutrition and Dietetics",],
  nur: ["Maternal and Child Health Nursing","Medical/Surgical Nursing","Mental Health/Psychiatric Nursing ","Nursing Science","Public/Community Health Nursing "],
  manage: ["Accounting","Business Management","Economics", "Marketing","Transport Management"],
  pure: ["Biochemistry","Earth Sciences","Pure and Applied Biology","Pure and Applied Chemistry", "Pure and Applied Mathematics", "Pure and Applied Physics","Science Laboratory Technology","Statistics"]
};



/* Function to load departments */
function loadDepartments() {
  const facultySelect = document.getElementById("faculty");
  const departmentSelect = document.getElementById("department");
  const selectedFaculty = facultySelect.value;

  // Clear old options
  departmentSelect.innerHTML = "<option value=''>-- Select Department --</option>";

  if (departmentsData[selectedFaculty]) {
    departmentsData[selectedFaculty].forEach(dept => {
      const option = document.createElement("option");
      option.value = dept;
      option.textContent = "Department of " + dept;
      departmentSelect.appendChild(option);
    });

    departmentSelect.style.display = "block";
  } else {
    departmentSelect.style.display = "none";
  }
}


/* Function to load levels */

  const levels = ["100", "200","300","400","500"];
function loadLevels() {
  const facultySelect = document.getElementById("faculty");
  const departmentSelect = document.getElementById("department");
  const levelSelect = document.getElementById("levels");
  const selectedDepartment = departmentSelect.value;

  // Clear old options
  levelSelect.innerHTML = "<option value=''>-- Select Level --</option>";

  
    levels.forEach(level => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level +" level";
      levelSelect.appendChild(option);
    });

    levelSelect.style.display = "block";
  } 



/* Function to load Years */
const years = ["2023/2024","2024/2025","2025/2026"];
function loadYears() {
  const facultySelect = document.getElementById("faculty");
  const departmentSelect = document.getElementById("department");
  const levelSelect = document.getElementById("levels");
  const yearSelect =
  document.getElementById("year")
  const selectedYear = yearSelect.value;

  // Clear old options
  yearSelect.innerHTML = "<option value=''>-- Select Year --</option>";

  
    years.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    yearSelect.style.display = "block";
  } 



/* Dictionary for courses */
const coursesData = { 
/* Agric courses */
  agric:{
      /* Agric Economics */
      "Agricultural Economics":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      
      
      
      /* Agric Extension */
      "Agricultural Extension and Rural Development":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* Animal Nutrition */
      "Animal Nutrition and Biotechnology":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* Animal Production */
      "Animal Production and Soil Science":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* Aquaculture */
      "Aquaculture and Fisheries Management":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      
      
      
      /* Crop and environmental */
      "Crop and Environmental Protection":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* Crop and Soil Science */
      "Crop and Soil Science":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* wildlife and ecotourism */
      "Wildlife and Ecotourism":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      },
      /* Forestry */
      "Forestry":{
          "100":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 100 level stops */
          
          /* 200 level starts */
          "200":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 211 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 200 level stops */
          
            /* 300 level starts */
          "300":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 311 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 300 level stops */
          
            /* 400 level starts */
          "400":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 411 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 400 level stops */
          
            /* 500 level starts */
          "500":{
              /* Harmattan Semester */
              harmattan:[
                  { name:"GST 511 - Communication in English ", link:"#"},
                  { name:"BIO 101 - General Biology I", link:"#"},
                  { name:"BIO 107 - General Biology Practical I ", link:"#"},
                  { name:"CHM 101 - General Chemistry I ", link:"#"},
                  { name:"CHM 107 - General Chemistry Practical I", link:"#"},
                  { name:"MTH 101 - Elementary Mathematics I ", link:"#"},
                  { name:"PHY 101 - General Physics I ", link:"#"},
                  { name:"PHY 107 - General Physics Practical I", link:"#"},
                  { name:"LAUTEC-COS 101 - Introduction to Computing Science ", link:"#"},
                  { name:"LAUTECH-LIB 101 - Introduction to Library  ", link:"#"},
                  { name:"LAUTECH-FAA 101- Fundamentals of Basic Drawing  ", link:"#"},
              ],/* harmattan courses */
              /* Rain Semester */
              rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "AGG 102 – Introduction to Agriculture I", link: "pdfs/GET208.pdf" },
           {name: "AGG 112 - Introduction to Agriculture II",link:"pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name:"BIO 101 - General Biology I", link:"#"},
          { name:"BIO 107 - General Biology Practical I ", link:"#"},
              { name:"CHM 102 - General Chemistry II ", link:"#"},
                  { name:"CHM 108 - General Chemistry Practical II", link:"#"},
        ]
          },/* 500 level stops */
      }
  },
  
  
  
  /* Arts Courses */
  arts:{
  /* English Courses */
      "English and Literary Studies":{
          "100":{
          /* Harmattan Semester */
              harmattan:[
                  { name:"GST 111 - Communication in English ", link:"pdfs/GET208.pdf" },
                  { name: "ENG 101 - A survey of the English Language ", link:"#"},
                  { name: "ENG 103 - Spoken English(Paractical) ", link:"#"},
                  { name: "SOC 111 - Intergroup Relations and Social Development  ", link:"#"},
                  { name: "LIB 101 - Use of Library", link:"#"},
                  { name: "LIT 107 - Introduction to Creative Writing  ", link:"#"},
                  { name: "PHI 109 - Philosophical Problems and Analysis ", link:"#"},
                  { name: "LIT 105 - Introduction to Prose Literature ", link:"#"},
              ],
              /* Rain Semester */
              rain:[
                  { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},
                  { name: "ENG 101 - A survey of the English Language ", link:"#"},
                  { name: "ENG 103 - Spoken English(Paractical) ", link:"#"},
                  { name: "SOC 111 - Intergroup Relations and Social Development  ", link:"#"},
                  { name: "LIB 101 - Use of Library", link:"#"},
                  { name: "LIT 107 - Introduction to Creative Writing  ", link:"#"},
                  { name: "PHI 109 - Philosophical Problems and Analysis ", link:"#"},
                  { name: "LIT 105 - Introduction to Prose Literature ", link:"#"},
              ]
          }
      }
  },
  /* Computing Courses */
  /* Computer Science Courses */
  computing: {
    "Computer Science": {
    /* 100 Level */
      "100": {
      /* Harmattan Semester */
        harmattan: [
        { name:"GST 111 - Communication in English ", link:"pdfs/GET208.pdf" },
          { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        /* Rain Semester */
        rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "COS 102 – Problem Solving", link: "pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 200 level courses */
      "200": {
        harmattan: [
          { name: "CSC201 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH202 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 202", link:"#"},
             { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 300 level courses */
        "300": {
        harmattan: [
          { name: "CSC301 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH301 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 302", link:"#"},
             { name: "MTH 302 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 400 level courses */
        "400": {
        harmattan: [
          { name: "CSC 401 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH 401 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 402", link:"#"},
             { name: "MTH 402 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 500 level courses */
        "500": {
        harmattan: [
          { name: "CSC501 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH501 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 502", link:"#"},
             { name: "MTH 502 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
        },
      },
      "Cyber Security Science": {
    /* 100 Level */
      "100": {
      /* Harmattan Semester */
        harmattan: [
        { name:"GST 111 - Communication in English ", link:"pdfs/GET208.pdf" },
          { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CYB 101 – Fundamentals of Computing and Cybersecurity", link: "pdfs/GET208.pdf" },
             { name: "LAUTECH-CYB 103 – Principles of Web Development I", link: "pdfs/GET208.pdf" }
            
        ],
        /* Rain Semester */
        rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "COS 102 – Problem Solving", link: "pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
         { name: "LAUTECH-CYB 104 - Principles of Web Development II", link:"#"},
             { name: "LAUTECH-CYB 102 – Cyber Human Factor", link: "pdfs/GET208.pdf" },
             { name: "LAUTECH-COS 104 – Introduction to Computing and Informatics", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 200 level courses */
      "200": {
        harmattan: [
          { name: "CSC201 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH202 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 202", link:"#"},
             { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 300 level courses */
        "300": {
        harmattan: [
          { name: "CSC301 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH301 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 302", link:"#"},
             { name: "MTH 302 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 400 level courses */
        "400": {
        harmattan: [
          { name: "CSC 401 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH 401 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 402", link:"#"},
             { name: "MTH 402 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 500 level courses */
        "500": {
        harmattan: [
          { name: "CSC501 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH501 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 502", link:"#"},
             { name: "MTH 502 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
        },
      },
      "Information Systems": {
    /* 100 Level */
      "100": {
      /* Harmattan Semester */
        harmattan: [
        { name:"GST 111 - Communication in English ", link:"pdfs/GET208.pdf" },
          { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
              { name: "LAUTECH-INS 101 – Introduction to Databases", link: "pdfs/GET208.pdf" },
              { name: "LAUTECH-INS 103 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" }
        ],
        /* Rain Semester */
        rain: [
           { name:"GST 112 - Nigerian Peoples Culture ", link:"pdfs/GET208.pdf"},,
          { name: "COS 102 – Problem Solving", link: "pdfs/GET208.pdf" },
          { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-INS 104 – Introduction to Carbon Literacy", link: "pdfs/GET208.pdf" },
              { name: "LAUTECH-INS 106 – Introduction to Big Data", link: "pdfs/GET208.pdf" },
              { name: "LAUTECH-COS 104 – Introduction to Computing and Informatics", link: "pdfs/GET208.pdf" },
              { name: "LAUTECH-INS 108 – Cloud Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 200 level courses */
      "200": {
        harmattan: [
          { name: "CSC201 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH202 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 202", link:"#"},
             { name: "MTH 102 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 300 level courses */
        "300": {
        harmattan: [
          { name: "CSC301 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH301 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 302", link:"#"},
             { name: "MTH 302 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 400 level courses */
        "400": {
        harmattan: [
          { name: "CSC 401 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH 401 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 402", link:"#"},
             { name: "MTH 402 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      },
      /* 500 level courses */
        "500": {
        harmattan: [
          { name: "CSC501 – Data Structures", link: "pdfs/GET208.pdf" },
          { name: "MTH501 – Linear Algebra", link: "pdfs/GET208.pdf" },
           { name: "COS 101 – Introduction to Computer Science", link: "pdfs/GET208.pdf" },
          { name: "MTH 101 – Elementary Mathematics I", link: "pdfs/GET208.pdf" },
          {name: "PHY 101 - General Physics  I",link:"pdfs/GET208.pdf" },
          {name: "PHY 107 - General Physics Practical I",link:"pdfs/GET208.pdf" },
          {name: "STA 101 - Descriptive Statistics",link:"pdfs/GET208.pdf" },
           { name: "LAUTECH-LIB 101 - Introduction to Library", link:"#"},
             { name: "LAUTECH-CSC 101 – Electronic Services", link: "pdfs/GET208.pdf" }
        ],
        rain:[
            {name:"CSC 502", link:"#"},
             { name: "MTH 502 – Elementary Mathematics II", link: "pdfs/GET208.pdf" },
          {name: "PHY 102 - General Physics  II",link:"pdfs/GET208.pdf" },
          {name: "PHY 108 - General Physics Practical II",link:"pdfs/GET208.pdf" },
          { name: "LAUTECH-CSC 102 – Introduction to Web Technologies", link: "pdfs/GET208.pdf" },
           { name: "LAUTECH-CSC 104 - Computer Application Packages", link:"#"},
             { name: "LAUTECH-CSC 106 – Fundamentals of Computing", link: "pdfs/GET208.pdf" }
        ]
      }
    }
  },

  pure: {
    "Pure and Applied Mathematics": {
      "100": {
        harmattan: [
          { name: "MTH101 – Calculus I", link: "pdfs/GET208.pdf" },
          { name: "STA101 – Statistics", link: "pdfs/GET208.pdf" }
        ]
      }
    }
  }
};


/* Function to load Courses */
function loadCourses() {
  const faculty = document.getElementById("faculty").value;
  const department = document.getElementById("department").value;
  const level = document.getElementById("levels").value;
  const year = document.getElementById("year").value;

  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Clear old results

  const courses = coursesData?.[faculty]?.[department]?.[level];
  
  
if (courses && (courses.rain || courses.harmattan)) {
    courseList.style.display = "block";

   

    if (courses.harmattan) {
      const harmattanHeading = document.createElement("h3");
      harmattanHeading.textContent = "❄️ Harmattan Semester Courses";
      courseList.appendChild(harmattanHeading);

      const harmattanList = document.createElement("ul");
      courses.harmattan.forEach(course => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = course.link;
        a.textContent = course.name;
        a.target = "_blank";
        li.appendChild(a);
        harmattanList.appendChild(li);
      });
      courseList.appendChild(harmattanList);
    }
  }
  
  
   if (courses.rain) {
      const rainHeading = document.createElement("h3");
      rainHeading.textContent = "🌧️ Rain Semester Courses";
      courseList.appendChild(rainHeading);

      const rainList = document.createElement("ul");
      courses.rain.forEach(course => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = course.link;
        a.textContent = course.name;
        a.target = "_blank";
        li.appendChild(a);
        rainList.appendChild(li);
      });
      courseList.appendChild(rainList);
    } else {
    courseList.style.display = "block";
    courseList.innerText = "No courses found for selected options.";
  }
}

































function showSection(idToShow) {
  const sections = ['register','forgot','updates','help','sponsors','credits']; // add more if needed

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = (id === idToShow) ? 'block' : 'none';
    }
  });
}


function handleUpdates(event) {
  event.preventDefault(); // Prevent page reload
  const email = document.getElementById("update-email").value;

  //  validation here

  alert(`🎉 Updates will be sent to ${email}!`);

  // Redirect to home page after 1 second
  setTimeout(function () {
    window.location.href = "home.html";
  }, 1000);
}





// --- Live search in the Help section ---
const searchBox  = document.getElementById("helpSearch");
const helpItems  = Array.from(document.querySelectorAll("#helpAccordion li"));
const noMatchMsg = document.getElementById("noMatch");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLowerCase();
  let shown = 0;

  helpItems.forEach(li => {
    const text = li.textContent.toLowerCase();
    const match = text.includes(query);
    li.dataset.hidden = !match;           // toggles the CSS rule above
    if (match) shown++;
  });

  // Show or hide “No matches” feedback
  noMatchMsg.style.display = shown ? "none" : "block";
});


// Accordion behaviour for Help section
document.querySelectorAll(".help-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    // Close all open panels
    document.querySelectorAll(".help-content").forEach(panel => {
      panel.style.display = "none";
    });
    document.querySelectorAll(".help-btn").forEach(b => b.classList.remove("active"));

    // Open the clicked one
    const panel = document.getElementById(targetId);
    panel.style.display = "block";
    btn.classList.add("active");
  });
});






/* Function to Log Out */
  document.getElementById("logout").onclick=function(){
    alert("Thanks for making use of this portal!");
    window.location.href="index.html";
    }




