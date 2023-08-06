const highlightHTMLContent = require('./highlightHTMLContent'); 

describe('highlightHTMLContent', () => {
  test('should highlight single word correctly', () => {
    const htmlContent = '<p>Hello world!</p>';
    const plainText = 'world';
    const plainTextPositions = [{ start: 6, end: 11 }];
    const expected = '<p>Hello <mark>world</mark>!</p>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expected);
  });

  test('should highlight multiple words correctly', () => {
    const htmlContent = '<p>Hello world! Welcome world!</p>';
    const plainText = 'world';
    const plainTextPositions = [{ start: 6, end: 11 }, { start: 20, end: 25 }];
    const expected = '<p>Hello <mark>world</mark>! Welcome <mark>world</mark>!</p>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expected);
  });

  test('should handle overlapping positions correctly', () => {
    const htmlContent = '<p>Hello world!</p>';
    const plainText = 'Hello world!';
    const plainTextPositions = [{ start: 0, end: 12 }];
    const expected = '<p><mark>Hello world!</mark></p>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expected);
  });

  test('should handle HTML tags correctly', () => {
    const htmlContent = '<p>Hello <strong>world</strong>!</p>';
    const plainText = 'world';
    const plainTextPositions = [{ start: 7, end: 12 }];
    const expected = '<p>Hello <strong><mark>world</mark></strong>!</p>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expected);
  });

  test('should not highlight anything when plainTextPositions is empty', () => {
    const htmlContent = '<p>Hello world!</p>';
    const plainText = 'world';
    const plainTextPositions = [];
    const expected = '<p>Hello world!</p>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expected);
  });
});

