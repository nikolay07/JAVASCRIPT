window.addEventListener("error", function onUnhandledError(err) {
    console.error("error", err.message);
});

let userParsingResult = '{"name": "Tom"}';

try {
    const user = JSON.parse(userParsingResult); /* валидный JSON c данными пользователя */
    console.log("User data: ", user);
    userParsingResult = "success";
} catch (e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult = '{"name": "Ann"';

try {
    const product = JSON.parse(productParsingResult); /* сломанный JSON c данными о продукте */
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch (e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}