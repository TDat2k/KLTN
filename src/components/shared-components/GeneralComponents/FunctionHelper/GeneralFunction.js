export const toCapitalize = (str) => {
    if (str == undefined || str == null) return '';
    //Viết hoa đầu mỗi từ.
    str = str.split(' ');

    for (var i = 0, x = str.length; i < x; i++) {
        if (str[i].length > 0) str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
};

export const toClassName = (modelName) => {
    //Chuyển từ tên model thành tên lớp. Ví dụ: "unit_convert" => "UnitConvert"
    return toCapitalize(modelName.replace(/_/g, ' ')).replace(/ /g, '');
};

export const toObjectName = (modelName) => {
    //Chuyển từ tên model thành tên lớp. Ví dụ: "unit_convert" => "UnitConvert"
    let className = toClassName(modelName);
    return className.charAt(0).toLowerCase() + className.slice(1);
};

export const toCategory = (modelName, mainModelName = '') => {
    /** Phương thức tạo category path dựa trên model và main model. Ví dụ model: article, main model: supplier => article_by_supplier */
    return mainModelName ? modelName + '_by_' + mainModelName : mainModelName;
};
