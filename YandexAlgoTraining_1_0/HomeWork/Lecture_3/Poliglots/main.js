const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, ...languages] = fileContent.toString().trim().split(/\r?\n/);

const result = findLanguageGroups(N, languages);
fs.writeFileSync("output.txt", result.toString());

//144ms, 28.86Mb
function findLanguageGroups(N, languages) {
    const groups = languages.join(",").replace(/\d+,/g, "").split(",");
    let langSet = {};
    const students = Number(N);
    let mainLangArr = [];
    let optLangArr = [];
    let optLangCounter = 0;

    for (let i = 0; i < groups.length; i++) {
        if (!langSet.hasOwnProperty(groups[i])) {
            langSet[groups[i]] = 1;
        } else {
            langSet[groups[i]]++;
        }
    }

    for (const lang in langSet) {
        if (langSet[lang] === students) {
            mainLangArr.push(lang);
        }
        optLangArr.push(lang);
        optLangCounter++;
    }
    return `${mainLangArr.length}\n${mainLangArr.join("\n")}\n${optLangArr.length}\n${optLangArr.join("\n")}`;

}
