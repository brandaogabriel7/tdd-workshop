const graphBaseUrl = "http://127.0.0.1:5501/images/";
const graphUrl = ["tddvsnontdd.png", "relativecostofdefects.png"];
const graphSlideEl = document.querySelector("#graph-slide");

const toggleGraphSrc = graphEl => {
    console.log(graphEl.src);
    graphEl.src =
        graphBaseUrl +
        (graphEl.src == graphBaseUrl + graphUrl[0] ? graphUrl[1] : graphUrl[0]);
};

graphSlideEl.addEventListener("click", e => {
    toggleGraphSrc(e.currentTarget);
});
