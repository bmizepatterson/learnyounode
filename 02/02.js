console.log(process.argv.slice(2).reduce((sum, current) => sum + parseInt(current), 0))