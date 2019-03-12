function userNames(input) {

    let catalog = new Set();
    input.forEach(name => catalog.add(name));
    let sortedNames = Array.from(catalog).sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedNames.join("\n"));
}
userNames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);