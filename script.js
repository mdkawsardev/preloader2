const myPromise = (evt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(evt);
        }, 3000);
    });
};

(async function () {
    try {
        await myPromise();
        myPromise(
            document.getElementById("preloader").classList.add("hidden"),
            document.getElementById("content").classList.remove("hidden")
        )
    } catch (error) {
        console.log(error)
    }
}())