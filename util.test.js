

const { generateText, checkAndGenerate } = require('./util')

test ('should output name and age', ()=>{
    const text = generateText ('Max',29);
    expect(text).toBe('Max (29 years old)');
});

test ('should generate valid text output', ()=>{
    const text = generateText ('Max',29);
    expect(text).toBe('Max (29 years old)');
});
