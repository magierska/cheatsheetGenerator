export function getRuntimeConfig() {
    console.log(document.getElementById('js-bundle-runtime-config').innerHTML)
    return JSON.parse(
        document.getElementById('js-bundle-runtime-config').innerHTML
    );
}