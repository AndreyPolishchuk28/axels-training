const sleep = message => new Promise(resolve => setTimeout(resolve, message));

export default (async function showResults(values) {
    await sleep(500);
    console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
});
