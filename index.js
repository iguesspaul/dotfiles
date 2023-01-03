import { TodoistApi } from "@doist/todoist-api-typescript"

const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
}
const append = (n) => {
    const lastn = String(n)
    const lastOf = Number(lastn[lastn.length - 1]);
    if (lastOf == 1) return "st"
    else if (lastOf == 2) return "nd"
    else if (lastOf == 3) return "rd"
    return "th"
}
document.getElementById("date").innerHTML = `Today is the ${day}${append(day)} of ${months[month]}.`


const api = new TodoistApi("4a84ebb649d7adfd728cb7ba3325ddd61254a471")
async function getTasks() {
    const res = await api
        .getTasks()
        .then((tasks) => tasks)
        .catch((error) => {
            console.log(error);
            throw error(404);
        });
    return { res: res };
}

const info = () => ({
    tasks: getTasks()
})

//alpine related code
window.Alpine = Alpine

Alpine.data('info', info);

Alpine.start()



