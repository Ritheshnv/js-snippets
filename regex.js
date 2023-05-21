const formatString = (name) => {
    let lename = name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/\s/g, '-');
    console.log(lename);
}

formatString('He\'s is greenish');