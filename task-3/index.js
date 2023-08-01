const fs = require("fs");

fs.createReadStream("data.txt", "utf-8")
  .on("data", (data) => {
    const res = data.split(" ").map((ele) => {
      if (ele.includes(".")) {
        return ele.split(".");
      } else if (ele.includes(",")) {
        return ele.split(",");
      } else {
        return ele;
      }
    });

    const value = res.flatMap((ele) => ele).filter((ele) => ele.length > 0);

    console.log("Word Count :", value.length);
  })
  .on("error", (error) => console.log(error));
