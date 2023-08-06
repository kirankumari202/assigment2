function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  // Create a copy of the HTML content to work on
  let highlightedContent = htmlContent;

  // Sort plainTextPositions in reverse order by end position to avoid position shifting during replacements
  plainTextPositions.sort((a, b) => b.end - a.end);

  // Loop through the plainTextPositions array and replace the corresponding positions in the highlightedContent
  plainTextPositions.forEach(({ start, end }) => {
    const plainWord = plainText.substring(start, end);
    const regex = new RegExp(plainWord, 'g');
    const highlightedWord = `<mark>${plainWord}</mark>`;
    highlightedContent = highlightedContent.replace(regex, highlightedWord);
  });

  return highlightedContent;
}
