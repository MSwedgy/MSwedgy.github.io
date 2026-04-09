
const inputSkillName = document.querySelector("#skillName");
const levelNumb = document.querySelector("#levelInput");

let Rarity = document.querySelector("#Rarity");



function Skill(name, rarity, level){
    this.name = name;
    this.rarity = rarity;
    this.level = level;
}

function addSkill() {
    let rarityDiv = document.getElementById(`${Rarity.value}`);
    const skillname = document.createElement("p");
    const deleteButton = document.createElement("button");
    const levelBtn = document.createElement("button")

    let newSkill = new Skill(inputSkillName.value, Rarity.value, levelNumb.value);
    
    skillname.textContent = `${newSkill.name} ${newSkill.level} (${newSkill.rarity})`;
    deleteButton.textContent = "Delete";
    
    levelBtn.textContent = "+1"

    rarityDiv.appendChild(skillname);
    skillname.appendChild(deleteButton);
    skillname.appendChild(levelBtn);

    
    deleteButton.addEventListener("click", () => {
        rarityDiv.removeChild(skillname);
    })

    levelBtn.addEventListener("click", () => {
        newSkill.level++;
        skillname.textContent = `${newSkill.name} ${newSkill.level} (${newSkill.rarity})`;
        skillname.appendChild(deleteButton);
        skillname.appendChild(levelBtn);

    })

    inputSkillName.value= "";
    levelNumb.value = "";
}

const addSkillbtn = document.querySelector("#addSkill");
addSkillbtn.addEventListener("click", addSkill);

const titleBtn = document.querySelector("#titleBtn");
titleBtn.addEventListener("click", () => {
    const titleZone = document.querySelector("#availableTitles");
    const titleName = document.querySelector("#newTitle");
    
    const newTitle = document.createElement("p");
    newTitle.textContent = titleName.value;
    titleZone.appendChild(newTitle);
    const titleRemoveBtn = document.createElement("button");
    titleRemoveBtn.textContent = "Remove";

    newTitle.appendChild(titleRemoveBtn);
    titleRemoveBtn.addEventListener("click", () => {
        titleZone.removeChild(newTitle);
    })
    titleName.value = "";
})