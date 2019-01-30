export const readingTime = post => {
    // Average words read per minute are 200 based on http://www.readingsoft.com/
    const wordsReadPerMin = 200;
    const noOfWordsInArticle = post.split(/\s/g).length;
    const readTimeInMinutes = Math.ceil(noOfWordsInArticle / wordsReadPerMin);
    return `Reading Time: ${readTimeInMinutes} min`;
  };