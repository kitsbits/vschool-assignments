let str = "https://thing.com?something=black and gold&something else=red";

function stringToObject(str) {
        let query = str.slice(str.indexOf("?") + 1);

        return query.split("&").map(item => {
            return item.split("=");
        }).reduce((total, each) => {
            let property = each[0]
            let value = each[1]
            if (!value) {
                return total;
            }
            total[property] = value
            return total;
        }, {});

// BEN'S WAY \\
    let query = {}
    let url = str.slice(str.indexOf("?") + 1).split(/[=&]/);
    if (url.length < 2) return {};
    for (let i = 0; i < url.length; i+=2) {
        query[url[i]] = url[i + 1]
    }

    return query;

    // if (str.indexOf("?") !== -1) {
    //     let query = str.slice(str.indexOf("?") + 1);
    //     if (query.length < 1) {
    //         return {}
    //     }
    //     return query.split("&").map(item => {
    //         return item.split("=");
    //     }).reduce((total, each) => {
    //         let property = each[0]
    //         let value = each[1]
    //         if (!value) {
    //             return total;
    //         }
    //         total[property] = value
    //         return total;
    //     }, {});
    // } else {
    //     return {}
    // }
    // return querySplit;
}

console.log(stringToObject(str));
