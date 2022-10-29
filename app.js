const button = document.getElementById("btn")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted"){
            new Notification("Congratulations you made yourself Noitfication!")
        }
    })
})