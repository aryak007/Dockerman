
let commitId = 123;
let commitIdMap = {
    233:1,
    244:1,
    123:1
};
let count = commitIdMap[commitId]
console.log(count)
if (commitIdMap[commitId]!=null) {
    count++;
    commitIdMap[commitId] = count;
    
}
else
{
    commitIdMap[commitId] = 1;
}

console.log(commitIdMap)
